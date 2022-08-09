import React from "react";
import "./TermsAndConditionsCheckmark.css";

const TermsAndConditionsCheckmark = () => {
    return (
        <div className="terms-and-conditions-checkmark">
            <input type="checkbox" required />{" "}
            <span className="terms-and-conditions-checkmark-text">
                I agree to the{" "}
                <a href="#" className="terms-conditions-link">
                    Terms and Conditions
                </a>
            </span>
        </div>
    );
};

export default TermsAndConditionsCheckmark;
