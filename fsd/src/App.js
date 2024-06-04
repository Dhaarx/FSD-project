import './App.css';
import '../src/screens_css/home.css'
import {Outlet} from 'react-router-dom';
import Footer from './footfolder/footer';
import Navbar from './navfolder/navbar';


function App() {
  return (
    <>
    <div className='app'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    
    </>
    
  );
}

export default App;
