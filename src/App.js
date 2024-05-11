import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookList from "./components/BookList";
import AddReviewPage from "./pages/AddReviewPage";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <div className="App">
        {" "}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/books" element={<BookList />} />
          <Route exact path="/about" element={<About/>} />
          <Route path="/add-review" element={<AddReviewPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;