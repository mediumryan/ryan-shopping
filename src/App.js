import { styled } from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
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
import NotFound from './Pages/NotFound';
import Detail from './Pages/Detail';
import Cart from './Pages/Cart';
// import state data
import { isMenuModal } from './data/atom';
import { useEffect } from 'react';

const MainWrapper = styled.main`
    position: relative;
    height: 100%;
`;

function App() {
    const [isModal, setIsModal] = useRecoilState(isMenuModal);
    const { pathname } = useLocation();

    useEffect(() => {
        if (isModal) {
            setIsModal(false);
        }
    }, [pathname]);

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
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </MainWrapper>
    );
}

export default App;
