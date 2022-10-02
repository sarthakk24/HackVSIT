import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreateShow from './components/CreateShow';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="createshow" element={<CreateShow />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
