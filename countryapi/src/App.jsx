import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/Details/:name" element={<Details/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
