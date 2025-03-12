import './App.css'
import logo from "./assets/zylo-logo.png"
import {ApartmentList} from './components/ApartmentList.jsx'
function App() {
  return (
    <>
    <div className="app">    
    <div className='navbar'>   
      <img id ="logo" src={logo}/>
      <nav>
        <div className='sidebar'> 
          <a href="#">Home</a>
          <a href="#">About Us</a>
        </div>
      </nav>
    </div>  
        <div className="displayApartment">
          <ApartmentList/>
       </div>
      <footer> <a href=" https://github.com/Leinyem/Proyect-React---Apartments"> Zylo - Apartament Management </a> 
      </footer>
    </div>
    </>
  );
} 
export default App
