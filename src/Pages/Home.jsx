import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
// import state data
import { mans_data, outer_data, top_data } from '../data/data';
// import components
import Dots from '../Components/Home/Dots';
import { Link } from 'react-router-dom';

const HomeOuter = styled.div`
    position: relative;
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
    position: relative;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    img {
        width: 25%;
        height: 50%;
        border: 2px solid aliceblue;
        border-radius: 4px;
    }
`;

const SectionsTitle = styled(Link)`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);
    color: #fff;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    font-style: italic;
    text-decoration: none;
    transition: 300ms background-color;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }
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

            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
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
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setCurrentPage(3);
                } else {
                    // 현재 3페이지
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
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setCurrentPage(1);
                } else {
                    // 현재 3페이지
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
    const man = useRecoilValue(mans_data);
    const outer = useRecoilValue(outer_data);
    const top = useRecoilValue(top_data);

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
                    <SectionsTitle to="/mans">남성의류</SectionsTitle>
                </Sections>
                <Divider className="divider"></Divider>
                <Sections className="section2">
                    {outer.slice(0, 8).map((outer_item) => {
                        return (
                            <img
                                key={outer_item.id}
                                src={outer_item.image_path}
                                alt={outer_item.name}
                            />
                        );
                    })}
                    <SectionsTitle to="/outer">아우터</SectionsTitle>
                </Sections>
                <Divider className="divider"></Divider>
                <Sections className="section3">
                    {top.slice(0, 8).map((top_item) => {
                        return (
                            <img
                                key={top_item.id}
                                src={top_item.image_path}
                                alt={top_item.name}
                            />
                        );
                    })}
                    <SectionsTitle to="/top">탑</SectionsTitle>
                </Sections>
            </HomeInner>
        </HomeOuter>
    );
}
