import { Fragment } from "react";
import { LightSpeed } from "react-reveal";

function ExperienceComponent({ experience = {} }) {
  const { role, company, location, from, to, logo } = experience;
  return (
    <Fragment>
      <div className="flex items-center content-center justify-center pl-5 my-5 ">
        <LightSpeed left>
          <div className="flex flex-row">
            <div className="p-2 w-[80px] flex justify-center">
              <img src={logo}  alt="logo"/>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center p-2">
                <div>
                  <div className="mx-5 text-xl font-bold md:text-3xl">
                    {role}
                  </div>
                  <div>
                    <span className="mx-5 text-lg">{company}</span>
                    <span className="text-lg">{location}</span>
                  </div>
                  <div className="pl-5 lg:my-[-10px] xl:my-[-10px]">
                    <span className="text-sm">{from}</span>{" "}
                    <span className="align-text-top">-</span>{" "}
                    <span className="text-sm">{to}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LightSpeed>
      </div>
    </Fragment>
  );
}

export default ExperienceComponent;
