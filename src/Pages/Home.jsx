import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Industries from "../Components/Industries";
import Blogs from "../Components/Blogs";
import Stories from "../Components/Stories";
import News from "../Components/News";
import CTABanner from "../Components/CTABanner";
import HumbleBeginnings from "../Components/HumbleBeginnings";


export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <Industries />
            <Stories />
            <Blogs />
            <HumbleBeginnings/>
            <News />
            <CTABanner />
        </div>
    );
}