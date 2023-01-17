import React from "react";
import "./projectList.css";
import Project from "../projects/Project";
import { products } from "../../data";

function ProjectList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create and Inspire. It's Salman...</h1>
        <p className="pl-desc">
          This is a Creative Portfolio that Showcases my Previous Works
        </p>
      </div>
      <div className="pl-list">
        {products.map((product) => {
          return (
            <Project key={product.id} img={product.img} link={product.link} />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
