import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStory from "./components/addStory.js";
import HomePage from "./components/homePage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add_story" element={<AddStory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
