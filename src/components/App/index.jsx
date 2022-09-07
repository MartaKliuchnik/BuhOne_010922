import NavBar from "../NavBar";
import '../../style.sass'
import Services from "../Services";
import AboutUs from "../AboutUs";
import Contacts from "../Contacts";
import Footer from "../Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Services />
      <AboutUs />
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;
