import React, { useState } from "react";
import "../Skills/Skills.css";

function Skills() {
  const [skills, setSkills] = useState([
    { name: "HTML", stars: 10 },
    { name: "CSS", stars: 10 },
    { name: "JavaScript", stars: 9 },
    { name: "Firebase", stars: 8.5 },
    { name: "Bootstrap", stars: 10 },
    { name: "Tailwind CSS", stars: 10 },
    { name: "Material UI", stars: 10 },
    { name: "React.js", stars: 9.5 },
    { name: "Node.js", stars: 9.5 },
    { name: "MongoDB", stars: 9 },
  ]);

  const [draggedSkill, setDraggedSkill] = useState(null);

  const onDragStart = (index) => {
    setDraggedSkill(index);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (index) => {
    const newSkills = [...skills];
    const [removedSkill] = newSkills.splice(draggedSkill, 1);
    newSkills.splice(index, 0, removedSkill);
    setSkills(newSkills);
    setDraggedSkill(null);
  };

  return (
    <div className="skill_section">
      <div className="container" id="skill">
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skills"
            draggable
            onDragStart={() => onDragStart(index)}
            onDragOver={onDragOver}
            onDrop={() => onDrop(index)}
          >
            <h3 className="name">{skill.name}</h3>
            <div className="rating">
              {[...Array(10)].map((_, starIndex) => {
                const fullStars = Math.floor(skill.stars);
                const halfStar = skill.stars % 1 !== 0; // check if it needs a half star

                if (starIndex < fullStars) {
                  return <i key={starIndex} className="fa-solid fa-star"></i>;
                } else if (starIndex === fullStars && halfStar) {
                  return <i key={starIndex} className="fa-solid fa-star-half-alt"></i>;
                } else {
                  return <i key={starIndex} className="fa-regular fa-star"></i>;
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
