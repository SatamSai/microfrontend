import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";
// const Header = React.lazy(() => import('home/Header'))
import Header from "home/Header"
import Footer from "home/Footer";
import PdpContent from "./PdpContent";

// lazy loading
// const App = () => {
//   const [showHeader, setShowHeader] = useState(false)
//   return (
//     <div className="text-3xl mx-auto max-w-6xl">
//       {showHeader &&
//         <Suspense fallback={<div>Loading...</div>}>
//           <Header />
//         </Suspense>
//       }
//       <button className="text-3xl p-5" onClick={() => setShowHeader(!showHeader)}>{showHeader ? "Hide" : "Show"} header</button>
//       <div className="my-10">
//         Pdp Page Content
//       </div>
//       <Footer />
//     </div>
//   );
// }
const App = () => {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          {/* Wrap your Route inside the Routes component */}
          <Routes>
            <Route path="/product/:id" element={<PdpContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

    // <div className="text-3xl mx-auto max-w-6xl">
    //   <Header />
    //   <div className="my-10">
    //     <PdpContent />
    //   </div>
    //   <Footer />
    // </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
