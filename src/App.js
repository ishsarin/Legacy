import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStory from "./components/addStory.js";
import HomePage from "./components/homePage.js";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Info from "./pages/Info.jsx";
function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/add_story" element={<AddStory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
