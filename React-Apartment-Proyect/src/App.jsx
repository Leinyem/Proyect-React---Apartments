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
import EditPage from './components/EditPage.jsx';


function App() {

  const [apartmentsState, setApartmentsState] = useState(apartmentListData.results);
   console.log("apartment state:",apartmentsState.length)
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ApartmentList apartmentsArray={apartmentsState} setApartmentsArray={setApartmentsState}/>}/>
        <Route path="/ApartmentDetail/:apartmentId" element={<ApartmentDetail apartmentsState={apartmentsState} />} /> //Important to ADD the States here too not just the element
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/form" element={<CreateNewApartment setApartmentsState={setApartmentsState} apartmentsState={apartmentsState}/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/editPage/:apartmentId" element={<EditPage setApartmentsState={setApartmentsState} apartmentsState={apartmentsState} />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;