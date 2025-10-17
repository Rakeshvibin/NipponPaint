import logo from './logo.svg';
import './App.css';
 import Header from "./component/Header";
 import Footer from './component/Footer'; 
import FirstPage from './page/FirstPage';
import ProductPage from './page/ProductPage';
import SecondPage from './page/SecondPage';
import ThirdPage from './page/ThirdPage';
import {BrowserRouter,Route,Routes} from "react-router-dom"   


function App() {
  return (
    

<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<FirstPage/>}/>
  <Route path='/product' element={<ProductPage/>}/>
  <Route path='/page2' element={<SecondPage/>}/>
  <Route path='*' element={<h1>Not Available</h1>}/>



   
     

    </Routes>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
