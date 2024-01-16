import { styled } from 'styled-components';

const SubDetailInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    img {
        margin: 2.5rem 0;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            width: 350px;
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        align-items: center;
    }
`;

export default function Info() {
    const infoItems = [
        {
            id: 0,
            alt: 'info1',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/c8cda9051dec15a9e7568c1b425279cd.jpg',
        },
        {
            id: 1,
            alt: 'info2',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220323/8a4b73a371fda154ed01a2fb4fba57cc.jpg',
        },
        {
            id: 2,
            alt: 'info3',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220323/a4a05be3a150ac1efcb351515f064a9f.jpg',
        },
        {
            id: 3,
            alt: 'info4',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220323/eba7b8916ae1c79d4a5a6fd2562ca07f.jpg',
        },
        {
            id: 4,
            alt: 'info5',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220323/02524bca43c3e7b2a25ca735ef72c530.jpg',
        },
    ];

    return (
        <SubDetailInfoWrapper>
            {infoItems.map((item) => {
                return (
                    <img key={item.id} src={item.image_path} alt={item.alt} />
                );
            })}
        </SubDetailInfoWrapper>
    );
}
