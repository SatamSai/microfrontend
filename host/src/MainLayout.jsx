import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";
// const Header = React.lazy(() => import('home/Header'))
import Header from "home/Header"
import Footer from "home/Footer";
import PdpContent from "pdp/PdpContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

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
export default function MainLayout() {
    return (
        <Router>
            <div className="text-3xl mx-auto max-w-6xl">
                <Header />
                <div className="my-10">
                    {/* Wrap your Route inside the Routes component */}
                    <Routes>
                        <Route exact path="/" element={<HomeContent />} />
                        <Route path="/product/:id" element={<PdpContent />} />
                        <Route path="/cart" element={<CartContent />} />
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
