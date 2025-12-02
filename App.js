import logo from './logo.svg';
import './App.css';
import NavbarComponent from './MARKAI/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeComponenet } from './MARKAI/Home';
import { ExportiseComponent } from './MARKAI/Expertise';
import { ContactComponent } from './MARKAI/Contact';
import { FooterComponent } from './MARKAI/Footer';



function App() {
  return (
    <div className="App">
    
    <NavbarComponent></NavbarComponent>
    <HomeComponenet></HomeComponenet>
    <ExportiseComponent></ExportiseComponent>
    <ContactComponent>

    </ContactComponent>
      <FooterComponent></FooterComponent>

    </div>
  );
}


export default App;
