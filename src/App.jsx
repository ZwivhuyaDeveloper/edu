import './App.css'
import Navbar from "./layout/navbar.jsx";
import Footer from "./layout/Footer.jsx";
import KeyBenefits from "./components/KeyBenefits.jsx";
import EduTrackPricing from "./components/pricing.jsx";
import HeroSection from "./components/Hero-Section.jsx";
import ContactSection from "./components/contact us.jsx";
import NavMenu from "./layout/navmenu.jsx";


function App() {
    return (
        <>
        <div className='min-h-screen w-full '>
            <NavMenu/>
            <HeroSection />
        </div>
        </>
    );
}

export default App;
