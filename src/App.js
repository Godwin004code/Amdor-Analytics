
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/Global/ScrollToTop"
import Learn from './components/Learn/Learn';
import Signup from './components/Auth/Signup';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import PostDetails from './components/Blog/PostDetails';
import Course from './components/courses/Course';
import CourseDetails from './components/courses/CourseDetails';
import Login from './components/Auth/Login';

function App() {
  return (
   <BrowserRouter>
   <ScrollToTop />
   <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/learn" element={<Learn />} />
    <Route path="/about" element={<About />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/signin' element={<Login />} />
    <Route path="/courses" element={<Course />} />
    <Route path="/courses/:title" element={<CourseDetails />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:title" element={<PostDetails />} />
    <Route path="/contact" element={<Contact />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
