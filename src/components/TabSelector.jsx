import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./TabSelector.css";

const TabSelector = () => {
    const location = useLocation();
    return (
        <div className="tab-selector-form">
            <Link
                to="fan"
                className={`tab-selector-option ${
                    location.pathname.includes("fan") && "option-selected"
                }`}
            >
                FAN SIGNUP
            </Link>
            <Link
                to="talent"
                className={`tab-selector-option ${
                    location.pathname.includes("talent") && "option-selected"
                }`}
            >
                TALENT SIGNUP
            </Link>
        </div>
    );
};

export default TabSelector;
