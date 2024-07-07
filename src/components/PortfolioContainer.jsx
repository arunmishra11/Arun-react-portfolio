import React, { useState } from "react";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import ProjectPage from "./pages/ProjectPage";
import About from "./pages/About";
import { Contact } from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "ProjectPage") {
      return <ProjectPage />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <React.StrictMode>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </main>
      <Footer />
    </React.StrictMode>
  );
}

