import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Login } from "./pages/Login";
import { CreatePost } from "./pages/create-post/CreatePost";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="*" element={<> PAGE NOT FOUND! </>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
