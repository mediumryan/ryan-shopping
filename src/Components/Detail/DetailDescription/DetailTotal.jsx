import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { detailItemCount } from '../../../data/detail';

const Total = styled(motion.div)`
    display: flex;
    justify-content: end;
    letter-spacing: -0.5px;
    margin-top: 2rem;
    transform-origin: left top;
    user-select: none;
    span.detail_total {
        letter-spacing: 1px;
        font-weight: 700;
        color: var(--accent-200);
    }
`;

export default function DetailTotal({ discountedPrice }) {
    const itemCount = useRecoilValue(detailItemCount);

    return (
        <Total
            className="detail_item"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.3,
            }}
        >
            <span className="detail_total">
                Total : {(discountedPrice * itemCount).toLocaleString()}
                KRW ({itemCount}개)
            </span>
        </Total>
    );
}
