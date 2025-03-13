import {useState} from 'react';
import './App.css'
import {ApartmentList} from './components/ApartmentList.jsx'
import NotFound from './components/NotFound.jsx';
import Footer  from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage.jsx';
import apartmentListData from './assets/listings.json';
function App() {
  const [apartmentsState, setApartmentsState] = useState(apartmentListData);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/apartmentDetails" element={<ApartmentList apartmentsArray={apartmentsState} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;