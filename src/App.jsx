import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Maze from "./pages/maze";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TreeVisualizer from "./pages/TreeVisualizer";
import Todo from "./pages/Todo";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maze" element={<Maze />} />
        <Route path="/tree-visualizer" element={<TreeVisualizer />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
