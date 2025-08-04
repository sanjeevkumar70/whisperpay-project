import React from "react";
import "./HowToGetStarted.scss";
import { FaUserPlus, FaUser, FaExchangeAlt, FaDollarSign } from "react-icons/fa";

const steps = [
    {
        id: 1,
        title: "Sign Up",
        description:
            "Create an account and choose your business plan to get started with Whisper.",
        icon: <FaUserPlus />,
    },
    {
        id: 2,
        title: "Set Up Your Profile",
        description:
            "Complete your profile, customize your platform, and configure settings for a seamless experience.",
        icon: <FaUser />,
    },
    {
        id: 3,
        title: "Invite Referrals",
        description:
            "Use the referral system to grow your downline and expand your network marketing business.",
        icon: <FaExchangeAlt />,
    },
    {
        id: 4,
        title: "Start Earning",
        description:
            "Track commissions, manage earnings, and withdraw funds easily through various secure payment options.",
        icon: <FaDollarSign />,
    },
];

export default function HowToGetStarted() {
    return (
        <section className="how-to-get-started">
            <div className="container">
                <h2 data-aos="fade-up">How To Get Starts</h2>
                <p className="subtitle" data-aos="fade-up">
                    Quick and Easy Steps to Launch Your Marketing Business with Whisper
                </p>

                <div className="steps-container" data-aos="fade-up">
                    {steps.map((step) => (
                        <div key={step.id} className="step-box" data-aos="zoom-in">
                            <div className="icon-container">
                                <div className="step-number">{step.id}</div>
                                <div className="step-icon">{step.icon}</div>
                            </div>
                            <div className="step-text">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
