import React from "react";
import "./MissionSection.scss";

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-tagline">
          Empowering people. Building communities. Creating lasting wealth.
        </p>
        <div className="mission-cards">
          <div className="mission-card">
            <h3>🌱 Empower Individuals</h3>
            <p>
              We believe in unlocking potential by giving every person the tools,
              resources, and support to thrive in our network.
            </p>
          </div>
          <div className="mission-card">
            <h3>🤝 Build Strong Connections</h3>
            <p>
              Our goal is to create a community built on trust, collaboration, 
              and shared success — because growth is stronger together.
            </p>
          </div>
          <div className="mission-card">
            <h3>💡 Drive Meaningful Change</h3>
            <p>
              Beyond profits, we aim to spark innovation, inspire change, 
              and leave a positive impact on lives around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
