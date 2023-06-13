// import { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import Homepage from "./Pages/Homepage";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import products from "./assets/data/products";

import { UserAuthContextProvider } from "./Components/UserAuthContext";
// import "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ("@fortawesome/free-regular-svg-icons");
// import "@fortawesome/react-fontawesome@latest";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


import CryptoO from "./Pages/CryptoO";

// const AddToCart = (item) => {
//   const [cart, setCart] = useState([]);
//   setCart([...cart, item]);
//   toast.success("Product Added Succesfully");
// };

function NotFound() {
  return (
    <div className="notfound bg-dark d-flex vh-100 justify-content-center align-items-center">
      <h1 className="fw-bold h1 fs-1 text-white">Opps, Page not Found!</h1>
    </div>
  );
}

function App() {
  return (
    <div className="Apps">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={3000}
        // hideProgressBar={false}
        // newestOnTop={false}
        closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        pauseOnHover={false}
      />
      <BrowserRouter>
        <UserAuthContextProvider>
          <Routes>
            {/* <Route path="/" Component={Homepage} exact /> */}
            {/* <Route path="/" Component={PrintbaseSolutions} exact /> */}
            {/* <Route path="/" Component={HomDecor} exact /> */}
            {/* <Route path="/" Component={CV} exact /> */}
            {/* <Route path="/" Component={Jobite} exact /> */}
            <Route path="/" Component={CryptoO} exact />
            {/* <Route path="/" Component={Dashboard} exact /> */}
            <Route path="/a" Component={NotFound} />
            {/* <Route path="/productDetail/:id" Component={ProductDetails} /> */}
            <Route Component={NotFound} />
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
