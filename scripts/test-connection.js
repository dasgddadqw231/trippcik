// Supabase 연결 테스트 스크립트
// 실행: node scripts/test-connection.js

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

async function testConnection() {
  console.log('🔄 Supabase 연결 테스트 시작...\n');

  // 환경변수 확인
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ 환경변수가 설정되지 않았습니다.');
    console.log('필요한 환경변수:');
    console.log('- NEXT_PUBLIC_SUPABASE_URL');
    console.log('- NEXT_PUBLIC_SUPABASE_ANON_KEY');
    console.log('\n.env.local 파일을 확인해주세요.');
    return;
  }

  console.log('✅ 환경변수 확인 완료');
  console.log(`📍 Supabase URL: ${supabaseUrl}`);
  console.log(`🔑 Anon Key: ${supabaseKey.substring(0, 20)}...`);

  // Supabase 클라이언트 생성
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // 1. 데이터베이스 연결 테스트
    console.log('\n🔄 데이터베이스 연결 테스트...');
    const { data, error } = await supabase.from('categories').select('count').limit(1);
    
    if (error) {
      console.error('❌ 데이터베이스 연결 실패:', error.message);
      return;
    }
    
    console.log('✅ 데이터베이스 연결 성공');

    // 2. 테이블 존재 확인
    console.log('\n🔄 테이블 존재 확인...');
    const tables = ['categories', 'products', 'profiles', 'cart_items', 'wishlist', 'orders'];
    
    for (const table of tables) {
      try {
        const { data, error } = await supabase.from(table).select('count').limit(1);
        if (error) {
          console.log(`❌ ${table} 테이블: ${error.message}`);
        } else {
          console.log(`✅ ${table} 테이블: 정상`);
        }
      } catch (err) {
        console.log(`❌ ${table} 테이블: ${err.message}`);
      }
    }

    // 3. 샘플 데이터 확인
    console.log('\n🔄 샘플 데이터 확인...');
    
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('*')
      .limit(5);
    
    if (catError) {
      console.log('❌ 카테고리 데이터 조회 실패:', catError.message);
    } else {
      console.log(`✅ 카테고리 데이터: ${categories?.length || 0}개 항목`);
      if (categories && categories.length > 0) {
        categories.forEach(cat => {
          console.log(`   - ${cat.name} (${cat.slug})`);
        });
      }
    }

    const { data: products, error: prodError } = await supabase
      .from('products')
      .select('*')
      .limit(5);
    
    if (prodError) {
      console.log('❌ 상품 데이터 조회 실패:', prodError.message);
    } else {
      console.log(`✅ 상품 데이터: ${products?.length || 0}개 항목`);
      if (products && products.length > 0) {
        products.forEach(prod => {
          console.log(`   - ${prod.name} (₩${prod.price.toLocaleString()})`);
        });
      }
    }

    // 4. 인증 시스템 확인
    console.log('\n🔄 인증 시스템 확인...');
    try {
      const { data: authData, error: authError } = await supabase.auth.getSession();
      if (authError) {
        console.log('❌ 인증 시스템 오류:', authError.message);
      } else {
        console.log('✅ 인증 시스템: 정상');
        console.log(`   현재 세션: ${authData.session ? '로그인됨' : '로그아웃됨'}`);
      }
    } catch (err) {
      console.log('❌ 인증 시스템 오류:', err.message);
    }

    console.log('\n🎉 연결 테스트 완료!');
    console.log('\n📋 다음 단계:');
    console.log('1. 애플리케이션 실행: npm run dev');
    console.log('2. 브라우저에서 http://localhost:3000 접속');
    console.log('3. 회원가입/로그인 테스트');
    console.log('4. 상품 조회 및 장바구니 기능 테스트');

  } catch (error) {
    console.error('❌ 예상치 못한 오류:', error.message);
  }
}

// 스크립트 실행
if (require.main === module) {
  testConnection();
}

module.exports = { testConnection };