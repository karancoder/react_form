import React from "react";
import { useState } from "react";
import "./Form.css";
import Input from "./Input";
import TermsAndConditionsCheckmark from "./TermsAndConditionsCheckmark";

const formFieldsInfo = [
    {
        name: "first_name",
        type: "text",
        label: "First Name *",
        placeholder: "First Name",
    },
    {
        name: "last_name",
        type: "text",
        label: "Last Name *",
        placeholder: "Last Name",
    },
    {
        name: "username",
        type: "text",
        label: "Username *",
        placeholder: "Username",
    },
    {
        name: "email",
        type: "email",
        label: "Email *",
        placeholder: "Email",
    },
    {
        name: "password",
        type: "password",
        label: "Password *",
        placeholder: "Password",
    },
];

const Form = ({ formFor }) => {
    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
    });

    function handleChange(event) {
        event.preventDefault();
        setUserData((prevUserData) => {
            return {
                ...prevUserData,
                [event.target.name]: event.target.value,
            };
        });
    }

    return (
        <div className="form-wrapper">
            <div className="form-header">Create Your {formFor} Account</div>
            <form
                action={
                    "http://wren.in:3200/api/sign-up/" + formFor.toLowerCase()
                }
                method="post"
                className="form"
            >
                {formFieldsInfo.map((fieldInfo) => (
                    <Input
                        inputName={fieldInfo.name}
                        inputLabel={fieldInfo.label}
                        inputType={fieldInfo.type}
                        inputValue={userData[fieldInfo.name]}
                        placeholder={fieldInfo.placeholder}
                        handleInputChange={handleChange}
                        key={fieldInfo.name}
                        required
                    />
                ))}
                <TermsAndConditionsCheckmark />
                <button type="submit" className="btn">
                    SIGN UP
                </button>
            </form>
        </div>
    );
};

export default Form;
