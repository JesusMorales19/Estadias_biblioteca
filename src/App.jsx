import { useState } from "react";
import Header from "./Pages/Admin/Header.jsx";
import { BrowserRouter as Router } from "react-router-dom";
<script src="https://cdn.tailwindcss.com"></script>

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-gray-50">
          <Header />
        </div>
      </Router>
    </>
  );
}

export default App;