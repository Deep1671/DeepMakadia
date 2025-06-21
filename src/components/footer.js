import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Deep Makadia. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
