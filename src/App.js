import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import SideHeader from './Pages/SideHeader/SideHeader';
import ContentBox from './Pages/ContentBox/ContentBox';
import PopupNotepad from './Pages/PopupNotepad/PopupNotepad';


function App() {
  return (
    <div className="main-div">
      <Header></Header>
      <SideHeader></SideHeader>
      <ContentBox></ContentBox>
      <PopupNotepad></PopupNotepad>

    </div>
  );
}

export default App;
