// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DocumentCheckPage from "./pages/DocumentCheckPage";
import SectionOnePage from "./pages/SectionOnePage";
import SectionTwoPage from "./pages/SectionTwoPage";
import SectionThreePage from "./pages/SectionThreePage";
import SectionFourPage from "./pages/SectionFourPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/document-check" element={<DocumentCheckPage />} />
        <Route path="/section-one" element={<SectionOnePage />} />
        <Route path="/section-two" element={<SectionTwoPage />} />
        <Route path="/section-three" element={<SectionThreePage />} />
        <Route path="/section-four" element={<SectionFourPage />} />
      </Routes>
    </Router>
  );
}

export default App;

