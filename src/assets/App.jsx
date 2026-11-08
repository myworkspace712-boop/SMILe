import Navbar    from "./Components/Navbar";
import Hero      from "./Components/Hero";
import Services  from "./Components/Services";
import Products  from "./Components/Products";
import Industries from "./Components/Industries";
import Stories   from "./Components/Stories";
import News      from "./Components/News";
import CTABanner from "./Components/CTABanner";
import Footer    from "./Components/Footer";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Products />
        <Industries />
        <Stories />
        <News />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}