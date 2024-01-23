// import icons
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useSetRecoilState } from 'recoil';
import { cartState } from '../../data/cart';

export default function CartItem({ item, index }) {
    const setCart = useSetRecoilState(cartState);

    // handle cart item count
    const minusCnt = (item, index) => {
        if (item.count >= 1) {
            setCart((prev) => {
                const newCart = [...prev];
                newCart[index] = {
                    ...newCart[index],
                    count: newCart[index].count - 1,
                };
                return newCart;
            });
        }
        return;
    };

    const plusCnt = (index) => {
        setCart((prev) => {
            const newCart = [...prev];
            newCart[index] = {
                ...newCart[index],
                count: newCart[index].count + 1,
            };
            return newCart;
        });
    };

    // handle item checkbox state
    const toggleItemCheck = (index) => {
        setCart((prev) => {
            const newCart = [...prev];
            newCart[index] = {
                ...newCart[index],
                checked: !newCart[index].checked,
            };
            return newCart;
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
            <td style={{ userSelect: 'none' }}>
                {item.name} [{item.color}]
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
