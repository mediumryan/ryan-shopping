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
    transition-duration: 1000ms;
    transition: background-color 0.5s;
`;

const Dots = ({ currentPage }) => {
    return (
        <DotsOuter>
            <DitsInner>
                {[1, 2, 3].map((item, index) => {
                    return (
                        <Dot
                            key={index}
                            style={{
                                backgroundColor:
                                    currentPage === item
                                        ? '#fff'
                                        : 'transparent',
                            }}
                        />
                    );
                })}
            </DitsInner>
        </DotsOuter>
    );
};

export default Dots;
