import { useEffect } from 'react';
import { styled } from 'styled-components';
// import icons
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { detailItemCount } from '../../../data/detail';

const Count = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    .detail_count {
        color: grey;
        font-size: 0.75rem;
    }
    & > form {
        display: flex;
        align-items: center;
        label {
            color: #000;
            margin-right: 0.5rem;
            font-size: 0.85rem;
        }
        div.count_wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 75px;
            height: 25px;
            border: 1px solid #ddd;
            & > svg {
                flex-basis: 25%;
                border: none;
                color: #b3d4b3;
                cursor: pointer;
                transition: 300ms color;
                &:hover {
                    color: green;
                }
            }
            div.count_value {
                flex-basis: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: grey;
                font-size: 0.9rem;
                user-select: none;
                width: 15px;
                text-align: center;
                border-left: 1px solid #ddd;
                border-right: 1px solid #ddd;
            }
        }
    }
`;

export default function DetailCount({ item }) {
    const [itemCount, setItemCount] = useRecoilState(detailItemCount);

    // handle item count
    const minusCnt = (e) => {
        e.preventDefault();
        if (itemCount >= 1) {
            setItemCount((prev) => {
                return --prev;
            });
        }
        return;
    };

    const plusCnt = (e) => {
        e.preventDefault();
        setItemCount((prev) => {
            return ++prev;
        });
    };

    // reset itemCount when reloading detail page
    useEffect(() => {
        setItemCount(0);
    }, [item]);

    return (
        <Count className="detail_item">
            <div className="detail_count">최소주문수량 1개 이상</div>
            <form>
                <label>개수</label>
                <div className="count_wrapper">
                    <FaAngleLeft onClick={minusCnt} />
                    <div className="count_value">{itemCount}</div>
                    <FaAngleRight onClick={plusCnt} />
                </div>
            </form>
        </Count>
    );
}
