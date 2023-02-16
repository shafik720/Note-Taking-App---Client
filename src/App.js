import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import SideHeader from './Pages/SideHeader/SideHeader';
import ContentBox from './Pages/ContentBox/ContentBox';

function App() {
  return (
    <div className="main-div">
      <Header></Header>
      <SideHeader></SideHeader>
      <ContentBox></ContentBox>
    </div>
  );
}

export default App;
