import React from "react";
import Card from "./Card";

const App: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Module Two</h2>
      <p style={paragraphStyle}>This is the Module Two component. It exports a Card component and other utilities.</p>
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
