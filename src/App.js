import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Exchanges from './Components/Exchanges';
import Coins from './Components/Coins';
import CoinDetails from './Components/CoinDetails';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
