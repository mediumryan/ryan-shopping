import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
// import css
import './CSS/index.css';
// import components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Mans from './Pages/Mans';
import Outer from './Pages/Outer';
import Top from './Pages/Top';

const MainWrapper = styled.main``;

function App() {
    return (
        <MainWrapper>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mans" element={<Mans />} />
                <Route path="/outer" element={<Outer />} />
                <Route path="/top" element={<Top />} />
            </Routes>
            <Footer />
        </MainWrapper>
    );
}

export default App;
