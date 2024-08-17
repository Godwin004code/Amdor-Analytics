
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/Global/ScrollToTop"
import Learn from './components/Learn/Learn';

function App() {
  return (
   <BrowserRouter>
   <ScrollToTop />
   <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/learn" element={<Learn />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
