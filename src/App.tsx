import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Poster from "./components/poster/Poster";
import Repertoire from "./components/repertoire/Repertoire";
import Rider from "./components/rider/Rider";

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Poster />
      <Gallery />
      <Repertoire />
      <Rider />
      <Form />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
