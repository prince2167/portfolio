import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Blog, Home, Project } from "./pages/index";
import { Navbar } from "./components/index";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
