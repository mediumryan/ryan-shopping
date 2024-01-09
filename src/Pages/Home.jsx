import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
// import state data
import {
    accessory_data,
    bottom_data,
    dress_data,
    mans_data,
    outer_data,
    top_data,
} from '../data/data';

const HomeOuter = styled.div`
    position: relative;
`;

const HomeInner = styled.div`
    height: 100vh;
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
    // data
    const man = useRecoilValue(mans_data);
    const outer = useRecoilValue(outer_data);
    const top = useRecoilValue(top_data);
    const dress = useRecoilValue(dress_data);
    const bottom = useRecoilValue(bottom_data);
    const accessory = useRecoilValue(accessory_data);

    return (
        <HomeOuter>
            <HomeInner>
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
                <Sections className="section4">
                    {dress.slice(0, 8).map((dress_item) => {
                        return (
                            <img
                                key={dress_item.id}
                                src={dress_item.image_path}
                                alt={dress_item.name}
                            />
                        );
                    })}
                    <SectionsTitle to="/dress">드레스</SectionsTitle>
                </Sections>
                <Sections className="section5">
                    {bottom.slice(0, 8).map((bottom_item) => {
                        return (
                            <img
                                key={bottom_item.id}
                                src={bottom_item.image_path}
                                alt={bottom_item.name}
                            />
                        );
                    })}
                    <SectionsTitle to="/bottom">바텀</SectionsTitle>
                </Sections>
                <Sections className="section6">
                    {accessory.slice(0, 8).map((accessory_item) => {
                        return (
                            <img
                                key={accessory_item.id}
                                src={accessory_item.image_path}
                                alt={accessory_item.name}
                            />
                        );
                    })}
                    <SectionsTitle to="/accessory">악세사리</SectionsTitle>
                </Sections>
            </HomeInner>
        </HomeOuter>
    );
}
