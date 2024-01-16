import { styled } from 'styled-components';

const SubDetailImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    img {
        margin: 2.5rem 0;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            width: 350px;
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 0 2rem;
        align-items: center;
    }
`;

export default function Images() {
    const detailImages = [
        {
            id: 0,
            alt: 'detail_image1',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/ab65c326969330e9719a88b70f2436c4.jpg',
        },
        {
            id: 1,
            alt: 'detail_image2',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/430926fa749c598fe6e3e347d861922a.jpg',
        },
        {
            id: 2,
            alt: 'detail_image3',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/a25b412c43d00888716d57ff6e24f402.jpg',
        },
        {
            id: 3,
            alt: 'detail_image4',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/67881a14c8f99604efe4c1b4b4b06c46.jpg',
        },
        {
            id: 4,
            alt: 'detail_image5',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/283f24d41f0baa172f514fcb808c35cc.jpg',
        },
        {
            id: 5,
            alt: 'detail_image6',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/d22bfcf2b2cd363cdc3d3131b5666909.jpg',
        },
        {
            id: 6,
            alt: 'detail_image7',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/dd469a18aca3f09f915772b890ad0954.jpg',
        },
        {
            id: 7,
            alt: 'detail_image8',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/a4d53cdbc03c4eadddb19626fb99fcf9.jpg',
        },
        {
            id: 8,
            alt: 'detail_image9',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/8fcf57f059ead5c335b0f6506f342609.jpg',
        },
        {
            id: 9,
            alt: 'detail_image10',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/8d8beed0bd38c18e4a617a44566990a5.jpg',
        },
        {
            id: 10,
            alt: 'detail_image11',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/9e6b79e4d6599186e858335957974287.jpg',
        },
        {
            id: 11,
            alt: 'detail_image12',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/f65e158409268bf16697b05f2984776b.jpg',
        },
        {
            id: 12,
            alt: 'detail_image13',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/52fecef2e5767907673086e388a785f5.jpg',
        },
        {
            id: 13,
            alt: 'detail_image14',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/e68e0b664209ed40324be26bc6f4b775.jpg',
        },
        {
            id: 14,
            alt: 'detail_image15',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/afcc5dc2510a9a2610df4bdb2b7be3a0.jpg',
        },
        {
            id: 15,
            alt: 'detail_image16',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/c0f5e76bd8e8a3aa24e17a4f2901c611.jpg',
        },
        {
            id: 16,
            alt: 'detail_image17',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/cba62a660013b12f8feaf0f7cd616d50.jpg',
        },
        {
            id: 17,
            alt: 'detail_image18',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/7430452b7313828b5aa567674671c23f.jpg',
        },
        {
            id: 18,
            alt: 'detail_image19',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/dcf4d5d861b22cf6db1203c6bf206f31.jpg',
        },
        {
            id: 19,
            alt: 'detail_image20',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/9f3d981573b03d66b9be97fca766d339.jpg',
        },
        {
            id: 20,
            alt: 'detail_image21',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/87acee85fe60ad25e7d5094d3f105288.jpg',
        },
        {
            id: 21,
            alt: 'detail_image22',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/4407180724f67f01787f047387a92e4a.jpg',
        },
    ];

    return (
        <SubDetailImagesWrapper>
            {detailImages.map((item) => {
                return (
                    <img key={item.id} src={item.image_path} alt={item.alt} />
                );
            })}
        </SubDetailImagesWrapper>
    );
}
