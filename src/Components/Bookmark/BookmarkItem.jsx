import React from 'react';
import { useSetRecoilState } from 'recoil';
import { bookmarkState } from '../../data/bookmark';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function BookmarkItem({ item, index }) {
    const setBookmark = useSetRecoilState(bookmarkState);

    // handle cart item count
    const minusCnt = (item, index) => {
        if (item.count >= 1) {
            setBookmark((prev) => {
                const newBookmark = [...prev];
                newBookmark[index] = {
                    ...newBookmark[index],
                    count: newBookmark[index].count - 1,
                };
                return newBookmark;
            });
        }
        return;
    };

    const plusCnt = (index) => {
        setBookmark((prev) => {
            const newBookmark = [...prev];
            newBookmark[index] = {
                ...newBookmark[index],
                count: newBookmark[index].count + 1,
            };
            return newBookmark;
        });
    };

    // handle item checkbox state
    const toggleItemCheck = (index) => {
        setBookmark((prev) => {
            const newBookmark = [...prev];
            newBookmark[index] = {
                ...newBookmark[index],
                checked: !newBookmark[index].checked,
            };
            return newBookmark;
        });
    };

    return (
        <tr>
            <td>
                <input
                    type="checkbox"
                    name="checkItem"
                    id="checkItem"
                    checked={item.checked}
                    onChange={() => {
                        toggleItemCheck(index);
                    }}
                />
            </td>
            <td>
                <img
                    className="cartImage"
                    src={item.image_path}
                    alt={item.name}
                />
            </td>
            <td
                style={{
                    userSelect: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <span>{item.name} </span>
                <span style={{ color: '#b3d4b3', marginTop: '0.15rem' }}>
                    [{item.color}] [{item.size}]
                </span>
            </td>
            <td style={{ userSelect: 'none' }}>
                {item.price.toLocaleString()}KRW
            </td>
            <td>
                <form>
                    <div className="cartCount">
                        <FaAngleLeft onClick={() => minusCnt(item, index)} />
                        <div className="countValue">{item.count}</div>
                        <FaAngleRight onClick={() => plusCnt(index)} />
                    </div>
                </form>
            </td>
            <td style={{ userSelect: 'none' }}>Free</td>
            <td style={{ userSelect: 'none' }}>
                {(item.price * item.count).toLocaleString()}
                KRW
            </td>
        </tr>
    );
}
