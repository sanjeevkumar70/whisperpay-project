import FeaturesSection from "../../components/Features/FeaturesSection";
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
        
            {/* Hero Section */}
            <section className="hero-section" data-aos="fade-up">
                <div className="hero-content" >
                    <h1>Let Your Earnings Whisper</h1>
                    <p>
                        Welcome to WhisperPay, a smart, silent reward system designed for consistent payouts without
                        noise, hype, or guesswork.
                        Join a powerful internal engine that automates reward cycles and builds your earnings passively - all
                        in the background
                    </p>
                    <button className="hero-btn">Get Started</button>
                </div>
            </section>

            {/* Features Section */}
            <FeaturesSection />
            <MissionSection />
            <MLMTree member={data} />

            {/* About Section */}
            <section className="home-about" data-aos="fade-right">
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>
                        We are committed to building a strong community through
                        <strong> ethical network marketing</strong>. Our platform empowers individuals
                        to learn, earn, and grow together — paving the way to a brighter future.
                    </p>
                    <button className="learn-btn">Learn More</button>
                </div>
                <div className="about-image" data-aos="zoom-in">
                    <img src="https://source.unsplash.com/400x300/?teamwork,business" alt="About" />
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section" data-aos="fade-up">
                <h2>Start Your Journey Today</h2>
                <p>
                    Become a part of our thriving community and take the first step towards
                    financial independence.
                </p>
                <button className="cta-btn">Join Now</button>
            </section>
        </>
    );
}
