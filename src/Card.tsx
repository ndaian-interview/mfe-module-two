import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div
      style={cardStyle}
      onClick={onClick}
      onMouseEnter={(e) => {
        const card = e.currentTarget;
        card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        card.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget;
        card.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        card.style.transform = "translateY(0)";
      }}
    >
      {imageUrl && <img src={imageUrl} alt={title} style={imageStyle} />}
      <div style={contentStyle}>
        <h4 style={titleStyle}>{title}</h4>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "white",
  borderRadius: "8px",
  border: "1px solid #e0e0e0",
  overflow: "hidden",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

const contentStyle: React.CSSProperties = {
  padding: "15px",
};

const titleStyle: React.CSSProperties = {
  color: "#282c34",
  marginBottom: "8px",
  fontSize: "18px",
  fontWeight: "600",
};

const descriptionStyle: React.CSSProperties = {
  color: "#666",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
};

export default Card;
