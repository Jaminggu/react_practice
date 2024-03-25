import './App.css';
import './App_mediaQuary.css';
import Header from './Components/Header';
import Middle from './Components/Middle';
import Bottom from './Components/Bottom';

function App() {
  return (
    <div className="App">
      <div className="wrapping">
        <Header />
        <Middle />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
