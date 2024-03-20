import "./App.css";
import Header from "./Components/Header.jsx";
import Card from "./Components/Card.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  let a = [1, 2, 3, 4]
  return (
    <div className="App">
      <div className="wrapping">
        <Header />
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default App;
