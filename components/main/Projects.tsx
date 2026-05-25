import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-300 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col justify-center items-top  md:flex-row gap-10 px-4 md:px-10">
        <ProjectCard
          href="https://drive.google.com/file/d/1hNX-6fFhv_xXkzABZCPv6EsGh4mx00QI/view?usp=sharing"
          src="/meubleEA_login.jpg"
          title="Full Stack Web App"
          description="A full stack web application for a furniture company to manage sales contracts, customer payments, expenses, and billing operations in one system.
The platform also generates delivery and invoice documents in French and Arabic."
        />
        <ProjectCard
          href="https://sass-landing-page-example.vercel.app/"
          src="/sass.png"
          title="SasS Landing Page"
          description="A modern SaaS landing page to present software services, pricing plans, and product features to potential customers."
        />
        <ProjectCard
          src="/e_commerce.webp"
          title="E-commerce Website"
          description="An e-commerce web application that allows customers to browse products, place orders, and manage online payments securely.
The platform includes an admin dashboard for product management, order tracking, and customer management."
        />
      </div>
    </div>
  );
};

export default Projects;