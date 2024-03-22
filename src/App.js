import "./App.css";
import Header from "./Components/Header.jsx";
import Cardbox from "./Components/Cardbox.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <div className="wrapping">
        <Header />
        <Cardbox />
        <Footer />
      </div>
    </div>
  );
}

export default App;
