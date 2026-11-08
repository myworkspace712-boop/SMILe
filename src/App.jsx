import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import { ThemeProvider } from "./Components/ThemeContext";
import Innofulfill from "./Pages/Products/Innofulfill";

import PalletIt from "./Pages/Products/PalletIt";
import International from "./Pages/Products/International";


// import Solutions from "./Pages/D2C";
import D2C from "./Pages/Solutions/D2C";
import PersonalCourier from "./Pages/Solutions/PersonalCourier";
import PersonalEBookings from "./Pages/PersonalEBookings";
import B2BEnterprise from "./Pages/Solutions/B2BEnterprise";

import OurBrandStory from "./Pages/AboutUs/OurBrandStory";
import OurJourney from "./Pages/AboutUs/OurJourney";
import PeoplePurposeCulture from "./Pages/AboutUs/PeoplePurposeCulture";
import MediaFeatures from "./Pages/AboutUs/MediaFeatures";
import OtherDisclosures from "./Pages/AboutUs/OtherDisclosures";

import VendorOB from "./Pages/GrowWithUs/VendorOB";
import ChannelPart from "./Pages/GrowWithUs/ChannelPart";

import Careers from "./Pages/Careers";
import ContactUs from "./Pages/ContactUs";

import EBookings from "./Pages/EBookings";

import Footer from "./Components/Footer";
// import BlogPosts from "./Pages/BlogPosts";
// import Hero from "./Components/Hero";
// import Services   from "./Components/Services";
// import Products   from "./Components/Products";
// import Industries from "./Components/Industries";
// import Stories    from "./Components/Stories";
// import News       from "./Components/News";
// import CTABanner  from "./Components/CTABanner";

/* ── Page placeholders — fill these when pages are built ── */
// function HomePage() {
//   return (
//     <>

// <Hero />

//     </>
//   );
// }

// function ProductsPage() { return null; }
// function InnnodelPage() { return null; }
// function InnofulfillPage() { return null; }
function ColdversePage() { return null; }
// function PalletItPage() { return null; }
// function InternationalPage() { return null; }
function CargoDhamPage() { return null; }
function PinifiedPage() { return null; }

// function SolutionsPage() { return null; }
// function D2CPage() { return null; }
// function PersonalCourierPage() { return null; }
// function B2BEnterprisePage() { return null; }

// function AboutPage() { return null; }
// function BrandStoryPage() { return null; }
// function OurJourneyPage() { return null; }
// function PeoplePurposePage() { return null; }
// function MediaFeaturesPage() { return null; }
// function OtherDisclosuresPage() { return null; }

// function GrowPage() { return null; }
// function VendorPage() { return null; }
// function ChannelPartnersPage() { return null; }

// function CareersPage() { return null; }
// function ContactPage() { return null; }

{/* <Navbar /> */ }
export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Blogs */}
            {/* <Route path="/blogs/:slug" element={<BlogPost />} /> */}

            {/* Products */}
            {/* <Route path="/products" element={<ProductsPage />} /> */}
            {/* <Route path="/products/innodel" element={<InnnodelPage />} /> */}
            <Route path="/innofulfill" element={<Innofulfill />} />
            <Route path="/products/coldverse" element={<ColdversePage />} />
            <Route path="/palletit" element={<PalletIt />} />
            <Route path="/international" element={<International />} />
            <Route path="/products/cargodham" element={<CargoDhamPage />} />
            <Route path="/products/pinified" element={<PinifiedPage />} />


            {/* Solutions */}
            {/* <Route path="/solutions" /> */}
            <Route path="/d2c" element={<D2C />} />
            <Route path="/personal-courier" element={<PersonalCourier />} />
            <Route path="/b2b-enterprise" element={<B2BEnterprise />} />


            {/* About */}
            {/* <Route path="/aboutus" element={<AboutPage />} /> */}
            <Route path="/our-brand-story" element={<OurBrandStory />} />
            <Route path="/our-journey" element={<OurJourney />} />
            <Route path="/people-purpose-culture" element={<PeoplePurposeCulture />} />
            <Route path="/media-features" element={<MediaFeatures />} />
            <Route path="/other-disclosures" element={<OtherDisclosures />} />

            {/* Grow With Us */}
            {/* <Route path="/grow" element={<GrowPage />} /> */}
            <Route path="/vendor-on-boarding" element={<VendorOB />} />
            <Route path="/channel-partners" element={<ChannelPart />} />

            {/* Top-level */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactUs />} />

            <Route path='/ebookings' element={<EBookings />} />

            <Route path='/personal-ebookings' element={<PersonalEBookings />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}