import React from "react";
import SkillComp from "../../components/SkillComp";

const Skill = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-dark h-screen text-white gap-2">
        <SkillComp image="/images/github.png" title="HTML/HTML5" />
        <SkillComp image="/images/github.png" title="CSS/CSS3" />
        <SkillComp image="/images/github.png" title="JavaScript" />
        <SkillComp image="/images/github.png" title="ReactJs" />
        <SkillComp image="/images/github.png" title="NextJs" />
        <SkillComp image="/images/github.png" title="Git" />
        <SkillComp image="/images/github.png" title="Github" />
        <SkillComp image="/images/github.png" title="Tailwind" />
      </div>
    </>
  );
};

export default Skill;
