import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Card from "./Card";

const DefaultPage: React.FC = () => (
  <p style={paragraphStyle}>This is the Module Two component. It exports a Card component and other utilities.</p>
);

const ViewCardsPage: React.FC = () => <p style={actionStyle}>Showing cards list… (remote handling placeholder)</p>;

const AddCardPage: React.FC = () => <p style={actionStyle}>Add card flow… (remote handling placeholder)</p>;

const App: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Module Two</h2>

      <Routes>
        <Route index element={<DefaultPage />} />
        <Route path="view-cards" element={<ViewCardsPage />} />
        <Route path="add-card" element={<AddCardPage />} />
        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>

      <div style={demoStyle}>
        <h3>Demo Components:</h3>
        <div style={cardsContainerStyle}>
          <Card title="Card 1" description="This is the first card from Module Two" />
          <Card title="Card 2" description="This is the second card from Module Two" />
        </div>
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  padding: "20px",
  backgroundColor: "#f0e8f4",
  borderRadius: "8px",
  border: "2px solid #9b59b6",
};

const headingStyle: React.CSSProperties = {
  color: "#282c34",
  marginBottom: "10px",
};

const paragraphStyle: React.CSSProperties = {
  color: "#555",
  marginBottom: "15px",
  lineHeight: "1.6",
};

const actionStyle: React.CSSProperties = {
  color: "#1f2937",
  marginBottom: "15px",
  padding: "10px 12px",
  backgroundColor: "#eef2ff",
  borderRadius: "6px",
  border: "1px solid #d9d6ff",
};

const demoStyle: React.CSSProperties = {
  marginTop: "15px",
  padding: "15px",
  backgroundColor: "white",
  borderRadius: "4px",
};

const cardsContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "15px",
  marginTop: "10px",
};

export default App;
