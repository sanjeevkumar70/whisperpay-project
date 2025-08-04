import CallToAction from "../../components/CallToAction/CallToAction";
import FeaturesSection from "../../components/Features/FeaturesSection";
import HowToGetStarted from "../../components/GetStart/HowToGetStarted";
import InvestSection from "../../components/Invest/InvestSection";
import MissionSection from "../../components/Mission/MissionSection";
import MLMTree from "../../components/MlmTree/MLMTree";
import "./Home.scss";

export default function Home() {
    const data = {
        id: 1,
        name: "Root User",
        level: 1,
        downline: [
            {
                id: 2,
                name: "User A",
                level: 2,
                downline: [
                    { id: 4, name: "User A1", level: 3, downline: [] },
                    { id: 5, name: "User A2", level: 3, downline: [] },
                ],
            },
            {
                id: 3,
                name: "User B",
                level: 2,
                downline: [
                    { id: 6, name: "User B1", level: 3, downline: [] },
                    { id: 6, name: "User B2", level: 3, downline: [] },
                ],
            },
        ],
    };

    return (
        <>
            <section className="hero-section" data-aos="fade-up">
                <div className="hero-content" >
                    <h1>Let Your Earnings at Whisper</h1>
                    <p data-aos="fade-up">
                        Welcome to WhisperPay, a smart, silent reward system designed for consistent payouts without
                        noise, hype, or guesswork.
                        Join a powerful internal engine that automates reward cycles and builds your earnings passively - all
                        in the background
                    </p>
                    <button data-aos="fade-up" className="hero-btn">Get Started</button>
                </div>
            </section>
            <InvestSection/>
            <CallToAction/>
            <HowToGetStarted/>
            <FeaturesSection />
            <MissionSection />
        </>
    );
}
