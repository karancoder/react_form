import React from "react";
import "./FormContainer.css";
import TabSelector from "./TabSelector";
import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./Form";

const FormContainer = () => {
    return (
        <div className="form-container">
            <TabSelector />
            <Routes>
                <Route path="/fan" element={<Form formFor="Fan" />} />
                <Route path="/talent" element={<Form formFor="Talent" />} />
                <Route path="*" element={<Navigate to="/fan" replace />} />
            </Routes>
        </div>
    );
};

export default FormContainer;
