import { atom, selector } from 'recoil';

export const dataState = atom({
    key: 'product_data_state',
    default: [
        {
            id: 0,
            name: '레더엘보 숏 자켓',
            price: 88000,
            discounted: null,
            category: ['man', 'outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/2b8036e8aa63cf5e60613fb43d872031.png',
        },
        {
            id: 1,
            name: '스티치 와이드 카고팬츠',
            price: 39000,
            discounted: null,
            category: ['man'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/28a97102a759f4311d821458fdef6bb7.png',
        },
        {
            id: 2,
            name: '맨하탄 와이드 조거팬츠',
            price: 25800,
            discounted: null,
            category: ['man', 'bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/18e0adcf85edbb1aea4a24fdcb1cf769.gif',
        },
        {
            id: 3,
            name: '피시테일 후드 파카',
            price: 114000,
            discounted: null,
            category: ['man', 'outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/a9d14575ede406345cd77c732231084f.png',
        },
        {
            id: 4,
            name: '산티아 맨투맨',
            price: 42000,
            discounted: null,
            category: ['man', 'top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/3e8b109c9943d6bce941225ef484a560.gif',
        },
        {
            id: 5,
            name: '슈가 투턱 와이드 조거팬츠',
            price: 39600,
            discounted: null,
            category: ['man', 'bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/fa41d34119eb055fe485d1253aad33c6.png',
        },
        {
            id: 6,
            name: '반전 배색 와이드 트레이싱 팬츠',
            price: 48400,
            discounted: null,
            category: ['man', 'bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/7d88ca8211023733a0ae9c56aabbd0ab.png',
        },
        {
            id: 7,
            name: '절개라인 와이드 밴딩 팬츠',
            price: 42500,
            discounted: null,
            category: ['man', 'bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/07c0520fcff8ab6b72ef0c26bc5339cf.png',
        },
        {
            id: 8,
            name: '골지 네트 오픈카라 티셔츠',
            price: 30900,
            discounted: null,
            category: ['man'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/89958303b16a6c5f89a1787f983eab33.png',
        },
        {
            id: 9,
            name: '이브닝 오버벌룬핏 데님 밴딩팬츠',
            price: 42000,
            discounted: null,
            category: ['man', 'bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/c098da3e145e6c54b62473837046977d.png',
        },
        {
            id: 10,
            name: '하켐 단가라 니트 반집업',
            price: 52000,
            discounted: 0.33,
            category: ['man', 'top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202204/fd048566e7c63a751df3c5969be6ee5d.gif',
        },
        {
            id: 11,
            name: '기본 슬림 일자 청바지 스트레이트진',
            price: 50900,
            discounted: null,
            category: ['man'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202202/6430c7542494cf62c4087132c4c49336.jpg',
        },
        {
            id: 12,
            name: '봄봄 오버핏 후드 체크 셔츠',
            price: 59000,
            discounted: null,
            category: ['man', 'top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202202/060fd5565a356803539639d6b7e26136.gif',
        },
        {
            id: 13,
            name: '비조 롱 와이드 코튼 팬츠',
            price: 44900,
            discounted: 0.3,
            category: ['man'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/4c4b0213e3eceacc043b7032ebec945a.png',
        },
        {
            id: 14,
            name: '사슬라인 라운드 니트',
            price: 42000,
            discounted: null,
            category: ['man'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202202/bbc6ca024d0fb71be8219ae184c7db62.webp',
        },
        {
            id: 15,
            name: '피그윙 니트 스웨터',
            price: 55000,
            discounted: 0.24,
            category: ['man', 'top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202204/1d33e9ba576e271767d71809abf1f3ee.png',
        },
        {
            id: 16,
            name: '로스트 오버핏 니트 후드',
            price: 52000,
            discounted: null,
            category: ['man', 'top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202202/bb3ae1263796e52a57a28196a24ea80a.jpg',
        },
        {
            id: 17,
            name: '무빙 레이어드 PK 카라티',
            price: 38000,
            discounted: null,
            category: ['man', 'top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202202/76b19da2cbadc2bfab89b7a923cf6673.png',
        },
        {
            id: 18,
            name: '기모쭈리 무지 후드',
            price: 55000,
            discounted: null,
            category: ['man', 'top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202201/6f24efc4d6f168780282fe23e3fa67b7.webp',
        },
        {
            id: 19,
            name: '비스코스 미니멀 브이넥 니트',
            price: 29000,
            discounted: null,
            category: ['man'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202201/669db5bf64b2eb1cd8043a61f9ba9e76.jpg',
        },
        {
            id: 20,
            name: '버블 기모 무지 맨투맨',
            price: 42000,
            discounted: null,
            category: ['man', 'top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202201/dc49ca400930b5bbcc89d8b301286d18.gif',
        },
        {
            id: 21,
            name: '리오 반집업 맨투맨',
            price: 36000,
            discounted: 0.22,
            category: ['man', 'top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202204/1f44695705d12b43730d4bf7a33b7e69.png',
        },
        {
            id: 22,
            name: '몽샤 하이넥 멀티 폴라 집업',
            price: 38000,
            discounted: null,
            category: ['man', 'top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202201/6505f55728e45175c71e82c8103e5bee.webp',
        },
        {
            id: 23,
            name: '세로 퀼팅 언발포켓 크롭 점퍼',
            price: 87000,
            discounted: null,
            category: ['man', 'outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202201/dea828ca21c1505d53acabb37bfc8280.png',
        },
        {
            id: 24,
            name: '샤기 장모 폭스 페이크퍼 자켓',
            price: 12900,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202201/1d65b5e599b2bee1d89d1d2cf7627cb4.webp',
        },
        {
            id: 25,
            name: '미첼 코듀로이 루즈핏 자켓',
            price: 83000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202112/e6c7efecfc0251fa95cc137adb5463f5.webp',
        },
        {
            id: 26,
            name: '몽자 뽀글 무스탕',
            price: 119000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202112/694c0182124fc9146ef8a67fc40fa3d1.webp',
        },
        {
            id: 27,
            name: '오투 알파카 울 가디건',
            price: 69000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202112/007a7389419ac4c3bb16d91e474efa3b.png',
        },
        {
            id: 28,
            name: '양털후리스조끼',
            price: 15900,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202112/2e6bea5e60ba792ae2c8da2a75d6c772.jpg',
        },
        {
            id: 29,
            name: '차이나 컬러 퍼 자켓',
            price: 59000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202112/3c1ca29a2524dfea91132214dc7b45cc.png',
        },
        {
            id: 30,
            name: '패티 오버핏 코듀로이 패딩 셔츠',
            price: 82000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202111/7dd34173abc7731b2f34abbfb4dcafe2.jpg',
        },
        {
            id: 31,
            name: '보송 양면 리버서블 점퍼',
            price: 49000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202111/389a20f98227a08f2ad9b82c3a1ac21c.gif',
        },
        {
            id: 32,
            name: '다이아 브이 가디건',
            price: 47000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202111/17b519ab26b08a9badeb7b6970b4dd17.png',
        },
        {
            id: 33,
            name: '래글런 패딩 코트',
            price: 113000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202111/235d6b1fd8c36e747605a0ba957ccc3f.png',
        },
        {
            id: 34,
            name: '양털 롱패딩 야상 자켓',
            price: 99000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202111/3975df6f77f9676491b1a83da3704594.jpg',
        },
        {
            id: 35,
            name: '스탠다드 울 싱글코트',
            price: 109000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202111/b583248fef07ad692e903119357d84e5.jpg',
        },
        {
            id: 36,
            name: '또또스냅단추 월계관 후드 가디건',
            price: 49500,
            discounted: 0.2,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202204/c5e1bd83e0ae190dd357ddbf82002374.webp',
        },
        {
            id: 37,
            name: '베이직 니트 집업',
            price: 46000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202109/0e69547845e9158d7cb388a14ffe2a44.jpg',
        },
        {
            id: 38,
            name: '가을코디 추천 블럭 가디건',
            price: 40900,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202109/d93994ca6c30da21697f284c5e7f6fc1.jpg',
        },
        {
            id: 39,
            name: '훈남메이커 코듀로이셔츠 가을엔 역시 골덴',
            price: 59000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202109/7247712ce007c0932ed22d4adbff72ad.jpg',
        },
        {
            id: 40,
            name: '오버핏 숏 야상자켓',
            price: 108000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202109/59b011b5fb32b5ef76f0d01907473e95.jpg',
        },
        {
            id: 41,
            name: '핀턱 팬츠 정장 투피스 세트',
            price: 58000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202108/5896525a4b837841057642dd28832870.jpg',
        },
        {
            id: 42,
            name: '데님 후드 숏자켓',
            price: 38000,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202108/5b3cbfea88f03e83a5f88d67a202e8c1.png',
        },
        {
            id: 43,
            name: '파밍 오버핏 체크셔츠 남여공용',
            price: 39800,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202108/93926597d69ab59efe5b2ff4f6ccb7c6.webp',
        },
        {
            id: 44,
            name: '뱅뱅 꾸안꾸 썸머 긴팔 크롭 후드집업',
            price: 38500,
            discounted: null,
            category: ['outer'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202107/bc3ef6b79cedd2723f411e843ae4ccf8.gif',
        },
        {
            id: 46,
            name: '울니트 반 집업 카라 맨투맨',
            price: 46000,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202201/5fcd00b2ad3b546a2e684635db71e40d.png',
        },
        {
            id: 47,
            name: '컷팅 곰돌이 맨투맨',
            price: 49000,
            discounted: 0.23,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202204/4876f8bf2fd45f937fde7600efcdad55.gif',
        },
        {
            id: 48,
            name: '남녀공용 캠퍼스 후드',
            price: 39000,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202112/27378cf39b6c0f0e3a2c97bac8b9a9a3.gif',
        },
        {
            id: 49,
            name: '카라포인트 기모 맨투맨',
            price: 43000,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202112/511e7829a5eb3d2c13d3c3493e2749b7.png',
        },
        {
            id: 50,
            name: '남녀공용 나그랑 니트',
            price: 35000,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202111/041ea0c6a31eeee063edb0de021904fa.jpg',
        },
        {
            id: 51,
            name: '캐롯케익 꽈배기 니트',
            price: 41000,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202110/493714bd5ec25a66dddfc0f630b07f76.png',
        },
        {
            id: 52,
            name: '남녀공용 캐쥬얼 펜뎁 후드',
            price: 54000,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202110/7248d0652d871ad98527da5b95581de6.png',
        },
        {
            id: 53,
            name: '루즈핏 박시 언발 크롭 후드',
            price: 33000,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202110/dcea6307470625ca741b6980b8499a07.jpg',
        },
        {
            id: 54,
            name: '헤비쭈리 비드후드',
            price: 58900,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202109/c600f8b2a43a282d298690aad07966b2.jpg',
        },
        {
            id: 55,
            name: '캐시미어 반팔 니트',
            price: 45800,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202109/bb8e71972de5645a04464d974dc0b25c.jpg',
        },
        {
            id: 56,
            name: '베베셔츠 + 나시 세트',
            price: 33000,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202109/471428c710eccee679e01e8a7034933c.jpg',
        },
        {
            id: 57,
            name: '빅사이즈 와이드 골지 니트',
            price: 36500,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202109/5a2f9e3dccfac03b189c7b0f78281740.gif',
        },
        {
            id: 58,
            name: '스퀘어 크롭 티',
            price: 26000,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202109/82839562162f53587396e9c89085a10f.png',
        },
        {
            id: 59,
            name: '비커밍 니트 조끼',
            price: 29000,
            discounted: null,
            category: ['top'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202108/d7d939fbf5ef6ba2b3856f3697e9d6a8.jpg',
        },
        {
            id: 60,
            name: '꽃보라 유니크 패턴 원피스',
            price: 69000,
            discounted: 0.5,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202204/3938073a6490c4f67e72cb9ee4cee749.gif',
        },
        {
            id: 61,
            name: '도티도티 셔링주름 도트 원피스',
            price: 49800,
            discounted: 0.3,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202204/93e4a6ca118f9e4e6e363664c2f7829a.gif',
        },
        {
            id: 62,
            name: '카라 스프라이트 트임 원피스',
            price: 24900,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202108/266d8a6805c1ac92bc16cff6d007776f.jpg',
        },
        {
            id: 63,
            name: '라떼 롱 원피스',
            price: 27000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202107/af5473efbf98f6bc7bb91b676d4e7ff4.jpg',
        },
        {
            id: 64,
            name: '미꽃 민소매 원피스',
            price: 54000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202107/c0bef39d9fafdaad3319f55c35f6947b.png',
        },
        {
            id: 65,
            name: '압도적인 여신핏 세이렌 원피스',
            price: 59000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202106/641a58c71ffea3928d1c46fd290e658f.gif',
        },
        {
            id: 66,
            name: '마리 플라워 원피스',
            price: 79000,
            discounted: 0.37,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202206/6ef30f88271b868c83c6e322f1191fc3.png',
        },
        {
            id: 67,
            name: '쿨 데이지 롱 원피스',
            price: 69000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202106/f2c3e584fa7451c83bec945bb45a548a.gif',
        },
        {
            id: 68,
            name: '블루 데이지 원피스',
            price: 70900,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202106/566684e5809c8055b70fd1c6cfd4795b.jpg',
        },
        {
            id: 69,
            name: '마가레뜨 플라워 맥시 원피스',
            price: 72000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202106/25bb0843c6bedac0101ec0a33aa9cb27.png',
        },
        {
            id: 70,
            name: '네이프리본 스판 원피스',
            price: 55000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202106/998ba5562ae84861226a6e575de283b4.jpg',
        },
        {
            id: 71,
            name: '에이드 컬러체크 플레어 롱원피스',
            price: 64000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202107/2cb072dd4b4aa96d183d62f254733c3b.webp',
        },
        {
            id: 72,
            name: '오드리 핀턱 카라 린넨 원피스',
            price: 42000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202106/518dbcaf11d95a769c99f5534178d3ee.webp',
        },
        {
            id: 73,
            name: '꽃더하기꽃 미니원피스',
            price: 58000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202106/4189c4b4852b2ee924722018a11e6906.webp',
        },
        {
            id: 74,
            name: '여신강림 반팔 레이스 원피스',
            price: 64000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202105/b72c439b0ff5281d4592e6287f471a1c.png',
        },
        {
            id: 75,
            name: '로코 점프수트 여성 숏 점프수트',
            price: 92000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202105/0fefd76f88734164516b36aa42915bbb.gif',
        },
        {
            id: 76,
            name: '올리비아 스퀘어 린넨 원피스',
            price: 36000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202105/e9b57ce23c7e4a97f07a6f1176cf5c30.gif',
        },
        {
            id: 77,
            name: '쥬르 캐쥬얼 배색 홀원피스 반팔원피스 루즈핏 XL',
            price: 16000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202105/8b1a48260de7a52f8b3ef4c642a65b0b.webp',
        },
        {
            id: 78,
            name: '도티도티 셔링주름 도트 원피스',
            price: 49800,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202104/5bab414acd7d0ccfc6b41d1cbbcf830b.webp',
        },
        {
            id: 79,
            name: '가르니에 플라워 미니 원피스',
            price: 89000,
            discounted: 0.33,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202206/13a4c6dace644db170227f7c02531e56.gif',
        },
        {
            id: 80,
            name: '샤이닝 미니원피스 데이트 하객룩',
            price: 42000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202104/48a9bdf39cffc396731d83cb8931b42c.webp',
        },
        {
            id: 81,
            name: '반전뒤태! 등트임 네츄럴 롱 원피스 허리밴딩라인',
            price: 44000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202104/46b1e50b0d8fe8cc60ed7cb38ed474aa.webp',
        },
        {
            id: 82,
            name: '하이드레지아 핀턱 롱 원피스',
            price: 89000,
            discounted: 0.33,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202204/cc817f98cbcbab7780d6b8658143890c.png',
        },
        {
            id: 83,
            name: '벨루아 트위드 미니 원피스 완벽하객룩',
            price: 108000,
            discounted: null,
            category: ['dress'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202104/8bcf5678c3f424a5c092c6a723103e55.webp',
        },
        {
            id: 84,
            name: '심플 이지 밴딩체크팬츠',
            price: 32000,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202201/5b4a72f8f820a12c582b6062c3ccd103.png',
        },
        {
            id: 85,
            name: '노르딕 체크 밴딩 팬츠',
            price: 36000,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202112/78511269ab53dfdeda3e03c0c88fb385.png',
        },
        {
            id: 86,
            name: '레더 숏 팬츠',
            price: 29800,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202110/852c89590b06add44aa0287bd70e6da1.png',
        },
        {
            id: 87,
            name: '블랙생지데님팬츠 난스판/이염NO',
            price: 42900,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202109/6cbf7e4f3f1300324e12945d979df1c0.webp',
        },
        {
            id: 88,
            name: '헤이즐 와이드 핀턱 뒷밴딩 슬랙스',
            price: 43500,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202109/4eda4730243cffb22a76dd55e70d0328.jpg',
        },
        {
            id: 89,
            name: 'H라인 쫀쫀 슬릿 스커트',
            price: 39900,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202108/91d591e797573c325b39d75cc599d146.jpg',
        },
        {
            id: 90,
            name: '핀턱 팬츠 정장 투피스 세트',
            price: 58000,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202108/5896525a4b837841057642dd28832870.jpg',
        },
        {
            id: 91,
            name: '카고 트레이닝 하프팬츠 (S~5XL)',
            price: 20800,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202107/5b827619a9b340019b5103b645e2aa24.webp',
        },
        {
            id: 92,
            name: '스티키 데님 오버롤 팬츠',
            price: 0,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202107/f89330228f94d1ae5a7bfd0149b235f4.gif',
        },
        {
            id: 93,
            name: '[1+1] 트레이닝하프팬츠 S~5XL',
            price: 14900,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202107/c98dd2d2cbbc7e269f2bc4395b2e27b8.gif',
        },
        {
            id: 94,
            name: '사선단추 데님 팬츠',
            price: 37900,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202106/f8bbbebf5398a93e5020f04d01a82981.gif',
        },
        {
            id: 95,
            name: '고방 체크 앞트임 롱 스커트',
            price: 49000,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202105/0d5b834195bbeccda89381c92306a4ce.png',
        },
        {
            id: 96,
            name: '데미지 데님 연청일자팬츠',
            price: 58000,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202105/12f37cd181efb5de8480b668c241b5be.png',
        },
        {
            id: 97,
            name: '이터널럽 이지 스커트 세트',
            price: 49800,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202105/263017e2ea9db604ae3b65070d316c08.jpg',
        },
        {
            id: 98,
            name: '쿼드하이 버튼 팬츠 구제 워싱 데님 반바지',
            price: 25000,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202105/d72c79ce02be14a9d8469fd0b67f73b4.png',
        },
        {
            id: 99,
            name: '베이글 체크핀턱팬츠',
            price: 49000,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202105/d3360e485da0d9694a794a51a6a04c33.gif',
        },
        {
            id: 100,
            name: '마들렌 체크 롱 스커트',
            price: 19800,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202104/7cbdc9a3b53956f85f93e19ed9a66436.webp',
        },
        {
            id: 101,
            name: '오레오 맨투맨 세트. 반바지 셋업구성',
            price: 29500,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202104/cec7f3bf128254597bc1f67111508168.webp',
        },
        {
            id: 102,
            name: '차르르 플레어 랩 스커트',
            price: 47000,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202104/43ae1acb3d8ba6ba4aaf83c434baa49c.gif',
        },
        {
            id: 103,
            name: 'MADE. 마스 귀걸이',
            price: 22000,
            discounted: null,
            category: ['accessory'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202112/819fe64cb56b3c4c9ac17a28201adfc5.png',
        },
        {
            id: 104,
            name: 'MADE. 티.어.드.롭 귀걸이',
            price: 22000,
            discounted: null,
            category: ['accessory'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202112/89821ad5047e1539c356edb781e0823c.png',
        },
        {
            id: 105,
            name: '천연가죽 니트 사계절 워커 (블랙 250)',
            price: 49800,
            discounted: 0.34,
            category: ['accessory'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202204/b1eaedd146ffe751e290b7a032c15378.png',
        },
        {
            id: 106,
            name: '칠하트 실핀 세트',
            price: 9800,
            discounted: null,
            category: ['accessory'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202108/397eed6e0bba98c8598514033514df0c.jpg',
        },
        {
            id: 107,
            name: '',
            price: 0,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path: '',
        },
        {
            id: 108,
            name: '',
            price: 0,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path: '',
        },
        {
            id: 109,
            name: '',
            price: 0,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path: '',
        },
        {
            id: 110,
            name: '',
            price: 0,
            discounted: null,
            category: ['bottom'],
            sold_out: false,
            image_path: '',
        },
    ],
});

export const mans_data = selector({
    key: 'mans_data',
    get: ({ get }) => {
        const all_item = get(dataState);
        return all_item.filter((a) => a.category.includes('man'));
    },
});

export const outer_data = selector({
    key: 'outer_data',
    get: ({ get }) => {
        const all_item = get(dataState);
        return all_item.filter((a) => a.category.includes('outer'));
    },
});

export const top_data = selector({
    key: 'top_data',
    get: ({ get }) => {
        const all_item = get(dataState);
        return all_item.filter((a) => a.category.includes('top'));
    },
});

export const dress_data = selector({
    key: 'dress_data',
    get: ({ get }) => {
        const all_item = get(dataState);
        return all_item.filter((a) => a.category.includes('dress'));
    },
});

export const bottom_data = selector({
    key: 'bottom_data',
    get: ({ get }) => {
        const all_item = get(dataState);
        return all_item.filter((a) => a.category.includes('bottom'));
    },
});

export const accessory_data = selector({
    key: 'accessory_data',
    get: ({ get }) => {
        const all_item = get(dataState);
        return all_item.filter((a) => a.category.includes('accessory'));
    },
});
