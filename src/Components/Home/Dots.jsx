import { styled } from 'styled-components';

const DotsOuter = styled.div`
    position: absolute;
    top: 50%;
    right: 100px;
    transform: translateY(-50%);
    z-index: 3;
`;

const DitsInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20px;
    height: 100px;
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border: 1px solid #fff;
    border-radius: 50%;
    background-color: ${(props) =>
        props.currentPage === props.num ? '#fff' : 'transparent'};
    transition-duration: 1000ms;
    transition: background-color 0.5s;
`;

const Dots = ({ currentPage }) => {
    return (
        <DotsOuter>
            <DitsInner>
                <Dot num={1} currentPage={currentPage}></Dot>
                <Dot num={2} currentPage={currentPage}></Dot>
                <Dot num={3} currentPage={currentPage}></Dot>
            </DitsInner>
        </DotsOuter>
    );
};

export default Dots;
