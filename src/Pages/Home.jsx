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
    padding-top: 5rem;
    padding-bottom: 2rem;
`;

const HomeInner = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem;
    /* hide scrollbar */
    &::-webkit-scrollbar {
        display: none;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`;

const Sections = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    img {
        width: 50%;
        border: 2px solid aliceblue;
        border-radius: 4px;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        height: 50vh;
        width: 45%;
        margin: 5px;
        border-radius: 5px;
        overflow: hidden;
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
    font-size: 3rem;
    font-style: italic;
    font-weight: 700;
    text-decoration: none;
    transition: 300ms background-color;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        height: 50vh;
        font-size: 36px;
        padding: 0 2rem;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
    }
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
                    {man.slice(0, 4).map((mans_item) => {
                        return (
                            <img
                                key={mans_item.id}
                                src={mans_item.image_path}
                                alt={mans_item.name}
                            />
                        );
                    })}
                    <SectionsTitle to="/mans">Mans</SectionsTitle>
                </Sections>
                <Sections className="section2">
                    {outer.slice(0, 4).map((outer_item) => {
                        return (
                            <img
                                key={outer_item.id}
                                src={outer_item.image_path}
                                alt={outer_item.name}
                            />
                        );
                    })}
                    <SectionsTitle to="/outer">Outer</SectionsTitle>
                </Sections>
                <Sections className="section3">
                    {top.slice(0, 4).map((top_item) => {
                        return (
                            <img
                                key={top_item.id}
                                src={top_item.image_path}
                                alt={top_item.name}
                            />
                        );
                    })}
                    <SectionsTitle to="/top">Top</SectionsTitle>
                </Sections>
                <Sections className="section4">
                    {dress.slice(0, 4).map((dress_item) => {
                        return (
                            <img
                                key={dress_item.id}
                                src={dress_item.image_path}
                                alt={dress_item.name}
                            />
                        );
                    })}
                    <SectionsTitle to="/dress">Dress</SectionsTitle>
                </Sections>
                <Sections className="section5">
                    {bottom.slice(0, 4).map((bottom_item) => {
                        return (
                            <img
                                key={bottom_item.id}
                                src={bottom_item.image_path}
                                alt={bottom_item.name}
                            />
                        );
                    })}
                    <SectionsTitle to="/bottom">Bottom</SectionsTitle>
                </Sections>
                <Sections className="section6">
                    {accessory.slice(0, 4).map((accessory_item) => {
                        return (
                            <img
                                key={accessory_item.id}
                                src={accessory_item.image_path}
                                alt={accessory_item.name}
                            />
                        );
                    })}
                    <SectionsTitle to="/accessory">Accessory</SectionsTitle>
                </Sections>
            </HomeInner>
        </HomeOuter>
    );
}