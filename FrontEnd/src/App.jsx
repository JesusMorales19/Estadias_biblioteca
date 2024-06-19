// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";


//import Bandeja from "./Pages/Admin/Bandeja";


//import PrincipalPage from "./Pages/PrincipalPage";

import Consulta from "./Pages/Admin/consultas.jsx";
//import Dashboard from "./Pages/Admin/HomeAdmin.jsx";
//import Registro from "./Pages/Admin/registros.jsx";
//import HomeAdmin from "./Pages/Admin/HomeAdmin";

function App() {
  return (
    <>
      <Router>

     

        <div className="w-full min-h-screen bg-gray-50">
<<<<<<< HEAD
          <Registro/>
=======
          <Consulta/>

>>>>>>> 6d2021d5ce922b02cc329cae311351e93b204951
        </div>
      </Router>
    </>
  );
}

export default App;