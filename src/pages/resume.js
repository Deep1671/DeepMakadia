import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
//import "react-pdf/dist/esm/Page/TextLayer.css";

// Set up PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  // Update width on resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div style={{ padding: 20, backgroundColor: "#0B1120", minHeight: "100vh", color: "#fff" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "1rem" }}>My Resume</h1>

      {/* Scrollable container */}
      <div
        style={{
          maxHeight: "80vh",
          overflowY: "scroll",
          backgroundColor: "#fff",
          padding: "1rem",
          borderRadius: "10px",
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        <Document
          file="/Deep_Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div>Loading PDF...</div>}
          error={<div>Failed to load PDF file.</div>}
        >
          {Array.from(new Array(numPages), (_, i) => (
            <Page key={i} pageNumber={i + 1} width={width > 700 ? 600 : 300} />
          ))}
        </Document>
      </div>

      {/* Download button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a href="/Deep_Resume.pdf" download target="_blank" rel="noopener noreferrer">
          <button style={{ padding: "10px 20px", fontSize: "1rem", cursor: "pointer" }}>
            Download Resume (PDF)
          </button>
        </a>
      </div>
    </div>
  );
}
