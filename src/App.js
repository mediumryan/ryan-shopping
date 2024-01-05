import './CSS/index.css';
import faker from 'faker';

function App() {
    // 상품 데이터를 담을 배열 생성
    const products = [];

    // 50개의 가상 상품 데이터 생성
    for (let i = 0; i < 50; i++) {
        const categoryList = [
            'BAG',
            'LEATHER',
            'OUTER',
            'TOP',
            'BOTTOM',
            'ACC',
        ];
        const product = {
            id: i + 1,
            name: faker.commerce.productName(),
            price: faker.random.number({ min: 10000, max: 100000 }),
            category: faker.random.arrayElement(categoryList),
        };
        products.push(product);
    }

    console.log(JSON.stringify(products, null, 2)); // 생성된 JSON 데이터를 확인합니다.

    return <div>hi</div>;
}

export default App;
