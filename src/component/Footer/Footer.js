import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(13, 29, 58, 0.8)",
        backdropFilter: "blur(10px)",
        color: "#fff",
        zIndex: 1000,
      }}
    >
      {/* Copyright */}
      <div
        style={{
          padding: "3px",
          display: "flex",
          alignItems: "center",
          justifyContent: "Center",
        }}
      >
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Asif Ansari All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
