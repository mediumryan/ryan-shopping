import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
// import css
import './CSS/index.css';
// import components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import pages
import Home from './Pages/Home';
import Mans from './Pages/Mans';
import Outer from './Pages/Outer';
import Top from './Pages/Top';
import Dress from './Pages/Dress';
import Bottom from './Pages/Bottom';
import Accessory from './Pages/Accessory';
import NotFound from './Pages/NotFound';
import MenuModal from './Components/Header/MenuModal';

const MainWrapper = styled.main`
    position: relative;
    height: 100%;
`;

function App() {
    return (
        <MainWrapper>
            <Header />
            <MenuModal />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mans" element={<Mans />} />
                <Route path="/outer" element={<Outer />} />
                <Route path="/top" element={<Top />} />
                <Route path="/dress" element={<Dress />} />
                <Route path="/bottom" element={<Bottom />} />
                <Route path="/accessory" element={<Accessory />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </MainWrapper>
    );
}

export default App;
