import { styled } from 'styled-components';

const DetailCommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    img {
        margin: 1rem 0;
    }
`;

export default function Comment() {
    const commentItems = [
        {
            id: 0,
            alt: 'comment1',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20210906/7fb3500ef9d5803217f459f515d29aad.png',
        },
        {
            id: 1,
            alt: 'comment2',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220322/6232d8a3195d0375ea7f8acbbc033f2d.jpg',
        },
        {
            id: 2,
            alt: 'comment3',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220323/f48377bba71af69ac82f483ba420bc71.jpg',
        },
        {
            id: 3,
            alt: 'comment4',
            image_path:
                'https://darles.co.kr/web/upload/NNEditor/20220323/23e2770b30795ed4f0dfaecf566ba97e.jpg',
        },
    ];

    return (
        <DetailCommentWrapper>
            {commentItems.map((item) => {
                return (
                    <img key={item.id} src={item.image_path} alt={item.alt} />
                );
            })}
        </DetailCommentWrapper>
    );
}
