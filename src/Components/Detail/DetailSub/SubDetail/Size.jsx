import { styled } from 'styled-components';
import size from './../../../../Image/DetailSub/detail_size_graph.png';
import detail1 from './../../../../Image/DetailSub/detail_detail_graph.png';
import detail2 from './../../../../Image/DetailSub/detail_sub_detail_graph.png';

const SubDetailSizeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;

    * {
        margin-bottom: 2rem;
    }
    & > p {
        font-weight: 700;
    }
    .size_graph1 {
        width: 75%;
        height: 300px;
    }
    .size_graph2 {
        width: 75%;
        height: 500px;
    }
    .size_graph3 {
        width: 75%;
        height: 300px;
    }
`;

export default function Size() {
    return (
        <SubDetailSizeWrapper>
            <p>사이즈 정보</p>
            <img
                src="https://img.cafe24.com/csdstatic/edibotFit/img/size_image/img_style1_tshirt.png"
                alt="item_size_image"
                width="400"
            />
            <img className="size_graph1" src={size} alt="detail_size_graph" />
            <img
                className="size_graph2"
                src={detail1}
                alt="detail description"
            />
            <img
                className="size_graph3"
                src={detail2}
                alt="detail description2"
            />
        </SubDetailSizeWrapper>
    );
}
