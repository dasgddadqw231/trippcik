import { supabase } from '@/lib/supabase'
import { Profile } from '@/types/database'

export interface SignUpData {
  email: string
  password: string
  name?: string
  phone?: string
}

export interface SignInData {
  email: string
  password: string
}

export class AuthService {
  // 회원가입
  static async signUp(data: SignUpData) {
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      })

      if (authError) throw authError

      // 프로필 생성
      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: authData.user.id,
            email: data.email,
            name: data.name || null,
            phone: data.phone || null,
          })

        if (profileError) throw profileError
      }

      return { data: authData, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 로그인
  static async signIn(data: SignInData) {
    try {
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (error) throw error
      return { data: authData, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 로그아웃
  static async signOut() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  // 소셜 로그인 (Google)
  static async signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 소셜 로그인 (Facebook)
  static async signInWithFacebook() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 현재 사용자 정보 가져오기
  static async getCurrentUser() {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) return { data: null, error: null }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (error) throw error
      return { data: profile, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 프로필 업데이트
  static async updateProfile(userId: string, updates: Partial<Profile>) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId)
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 비밀번호 재설정 요청
  static async resetPassword(email: string) {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  // 비밀번호 업데이트
  static async updatePassword(newPassword: string) {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      })

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  // 인증 상태 변경 리스너
  static onAuthStateChange(callback: (user: any) => void) {
    return supabase.auth.onAuthStateChange((event, session) => {
      callback(session?.user || null)
    })
  }
}