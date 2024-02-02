import { styled } from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
// import css
import './CSS/index.css';
// import components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MenuModal from './Components/Header/MenuModal';
// import pages
import Home from './Pages/Home';
import Mans from './Pages/Mans';
import Outer from './Pages/Outer';
import Top from './Pages/Top';
import Dress from './Pages/Dress';
import Bottom from './Pages/Bottom';
import Accessory from './Pages/Accessory';
import Detail from './Pages/Detail';
import Cart from './Pages/Cart';
import Search from './Pages/Search';
import Bookmark from './Pages/Bookmark';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import NotFound from './Pages/NotFound';
// import state data
import { isMenuModal } from './data/atom';
// import icons
import { FaArrowUp } from 'react-icons/fa';

const MainWrapper = styled.main`
    position: relative;
    height: 100%;
`;

const GoTop = styled(FaArrowUp)`
    position: fixed;
    bottom: 5%;
    right: 2.5%;
    color: var(--accent-100);
    border: 3px solid var(--accent-100);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 0.35rem;
    transition: 300ms transform;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    &:hover {
        transform: scale(1.05);
    }
`;

function App() {
    const [isModal, setIsModal] = useRecoilState(isMenuModal);
    const { pathname } = useLocation();

    useEffect(() => {
        if (isModal) {
            setIsModal(false);
        }
    }, [pathname]);

    // handle GoTop
    const pageToTop = () => {
        window.scroll(0, 0);
    };

    return (
        <MainWrapper>
            <Header />
            {isModal && <MenuModal />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mans" element={<Mans />} />
                <Route path="/outer" element={<Outer />} />
                <Route path="/top" element={<Top />} />
                <Route path="/dress" element={<Dress />} />
                <Route path="/bottom" element={<Bottom />} />
                <Route path="/accessory" element={<Accessory />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/search/:query" element={<Search />} />
                <Route path="/bookmark" element={<Bookmark />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <GoTop onClick={pageToTop}>Go</GoTop>
        </MainWrapper>
    );
}

export default App;
