import {useState} from 'react';
import './App.css'
import {ApartmentList} from './components/ApartmentList.jsx'
import NotFound from './components/NotFound.jsx';
import Footer  from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import {Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage.jsx';
import apartmentListData from './assets/listings.json';
import CreateNewApartment from './components/CreateNewApartment.jsx';
import ApartmentDetail from './components/ApartmentDetail.jsx';


function App() {

  const [apartmentsState, setApartmentsState] = useState(apartmentListData.results);
   
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ApartmentList apartmentsArray={apartmentsState} setApartmentsArray={setApartmentsState}/>}/>
        <Route path="/apartmentDetail/:apartmentId" element={<ApartmentDetail />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/form" element={<CreateNewApartment setApartmentsState={setApartmentsState} apartmentsState={apartmentsState}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;