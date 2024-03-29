import { Fragment } from "react";

export function SkillsComponent({ skills }) {
  return (
    <Fragment>
      <div
        id="skills"
        className="flex flex-col items-center justify-center w-screen skills"
      >
        <div className="banner">Skills</div>
        <div className="flex flex-wrap items-center justify-center w-10/12 mx-5 my-5 md:w-3/4 lg:w-3/4 xl:w-3/4 ">
          {skills &&
            skills.map((skill) => (
              <div
                key={skill.name}
                className="px-3 py-2 mx-2 my-2 bg-fuchsia-800 rounded-xl w-fit"
              >
                {skill.name}
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
}
