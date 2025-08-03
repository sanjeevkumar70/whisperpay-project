import React from "react";
import "./MLMTree.scss";

const MLMTree = ({ member }) => {
    if (!member) return null;

    return (
        <div className="mlm-container">
            <div className="mlm-tree">
                {/* The current member */}
                <div className="member-card">
                    <div className="member-name">{member.name}</div>
                    <div className="member-level">Level {member.level}</div>
                </div>

                {/* Downline members */}
                {Array.isArray(member.downline) && member.downline.length > 0 && (
                    <div className="downline-wrapper">
                        {/* connecting line */}
                        <div className="connector"></div>
                        <div className="downline">
                            {member.downline.map((child) => (
                                <MLMTree key={child.id} member={child} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MLMTree;
