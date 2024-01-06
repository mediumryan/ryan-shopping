import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
// import state data
import { mans } from '../data/mans';
// import components
import Dots from '../Components/Home/Dots';

const HomeOuter = styled.div`
    margin: 0;
    overflow-y: hidden;
`;

const HomeInner = styled.div`
    height: 100vh;
    overflow-y: auto;
    /* hide scrollbar */
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Sections = styled.section`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    img {
        width: 25%;
        height: 50%;
    }
    /* &.section1 {
        background-color: red;
    }
    &.section2 {
        background-color: green;
    }
    &.section3 {
        background-color: blue;
    } */
`;

const Divider = styled.div`
    width: 100%;
    height: 5px;
    background-color: transparent;
`;

export default function Home() {
    const DIVIDER_HEIGHT = 5;
    const outerDivRef = useRef();
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            console.log(outerDivRef.current);

            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log('현재 1페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setCurrentPage(2);
                } else if (
                    scrollTop >= pageHeight &&
                    scrollTop < pageHeight * 2
                ) {
                    //현재 2페이지
                    console.log('현재 2페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setCurrentPage(3);
                } else {
                    // 현재 3페이지
                    console.log('현재 3페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log('현재 1페이지, up');
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                } else if (
                    scrollTop >= pageHeight &&
                    scrollTop < pageHeight * 2
                ) {
                    //현재 2페이지
                    console.log('현재 2페이지, up');
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setCurrentPage(1);
                } else {
                    // 현재 3페이지
                    console.log('현재 3페이지, up');
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setCurrentPage(2);
                }
            }
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener('wheel', wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
        };
    }, []);

    // data
    const man = useRecoilValue(mans);

    return (
        <HomeOuter>
            <HomeInner ref={outerDivRef}>
                <Dots currentPage={currentPage} />
                <Sections className="section1">
                    {man.slice(0, 8).map((mans_item) => {
                        return (
                            <img
                                key={mans_item.id}
                                src={mans_item.image_path}
                                alt={mans_item.name}
                            />
                        );
                    })}
                </Sections>
                <Divider className="divider"></Divider>
                <Sections className="section2">2</Sections>
                <Divider className="divider"></Divider>
                <Sections className="section3">3</Sections>
            </HomeInner>
        </HomeOuter>
    );
}
