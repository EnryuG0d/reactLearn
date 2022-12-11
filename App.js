import './App.css';
import SideBar from "./components/sideBar";
import Header from './components/header';
import Content from './components/Content';
import Footer from './components/footer';

const App = () =>{
  return (
    <div className="bodyGrid_container">
     <Header/>
     <SideBar/>
     <Content/>
     <Footer/>
    </div >
  )
}

export default App;
