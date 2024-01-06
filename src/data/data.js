import { atom, selector } from 'recoil';

export const data = atom({
    key: 'product_data',
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
            category: ['man'],
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
            category: ['man'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/fa41d34119eb055fe485d1253aad33c6.png',
        },
        {
            id: 6,
            name: '반전 배색 와이드 트레이싱 팬츠',
            price: 48400,
            discounted: null,
            category: ['man'],
            sold_out: false,
            image_path:
                'https://m.darles.co.kr/web/product/medium/202203/7d88ca8211023733a0ae9c56aabbd0ab.png',
        },
        {
            id: 7,
            name: '절개라인 와이드 밴딩 팬츠',
            price: 42500,
            discounted: null,
            category: ['man'],
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
            category: ['man'],
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
    ],
});

export const mans_data = selector({
    key: 'mans_data',
    get: ({ get }) => {
        const all_item = get(data);
        return all_item.filter((a) => a.category.includes('man'));
    },
});

export const outer_data = selector({
    key: 'outer_data',
    get: ({ get }) => {
        const all_item = get(data);
        return all_item.filter((a) => a.category.includes('outer'));
    },
});

export const top_data = selector({
    key: 'top_data',
    get: ({ get }) => {
        const all_item = get(data);
        return all_item.filter((a) => a.category.includes('top'));
    },
});
