import './App.css';
import Hero from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from './Pages/ListPage';
import Layout from './Components/Layout';
import SinglePage from './Pages/SinglePage';
import Login from './Pages/Login';
import ProfilePage from './Pages/ProfilePage';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/list" element={<ListPage />} />
                    <Route path="/:id" element={<SinglePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                
            </Routes>
        </Router>
    );
}

export default App;
