import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import 'react-modal-video/scss/modal-video.scss';
import "./assets/vendor/switcher/switcher.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import './assets/css/style.css';

//layout
import Header from "./components/Header";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import ComingSoon from "./pages/ComingSoon";
import Construction from "./pages/Construction";
import Error404 from "./pages/Error404";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Services from "./pages/Services";
import ServicesDetail from "./pages/ServicesDetail";
import BlogGrid from "./pages/BlogGrid";
import LargLeftSidebar from "./pages/LargLeftSidebar";
import ListLeftSidebar from "./pages/ListLeftSidebar";
import BlogDetail from "./pages/BlogDetail";
import ContectUs from "./pages/ContectUs";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <div className="page-wraper">
          <Routes>
            <Route path="/under-construct" element={<Construction />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/team" element={<Team />} />
              <Route path="/error-404" element={<Error404 />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio-details" element={<PortfolioDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services-details" element={<ServicesDetail />} />
              <Route path="/blog-grid" element={<BlogGrid />} />
              <Route path="/blog-large-left-sidebar" element={<LargLeftSidebar />} />
              <Route path="/blog-list-left-sidebar" element={<ListLeftSidebar />} />
              <Route path="/blog-details" element={<BlogDetail />} />
              <Route path="/contact-us" element={<ContectUs />} />
            </Route>
            
          </Routes>                    
        </div>
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <>
    <Header />
      <Outlet />
      <Footer />
    </>
  )
}


export default App;
