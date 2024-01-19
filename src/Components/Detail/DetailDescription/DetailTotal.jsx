import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { detailItemCount } from '../../../data/detail';

const Total = styled(motion.div)`
    display: flex;
    justify-content: end;
    letter-spacing: -0.5px;
    margin-top: 2rem;
    transform-origin: left center;
    user-select: none;
`;

export default function DetailTotal({ discountedPrice }) {
    const itemCount = useRecoilValue(detailItemCount);

    return (
        <Total
            className="detail_item"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.75,
            }}
        >
            <span className="detail_total">
                Total : {(discountedPrice * itemCount).toLocaleString()}
                KRW ({itemCount}개)
            </span>
        </Total>
    );
}
