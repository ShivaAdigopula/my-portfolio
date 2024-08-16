import { Fragment } from "react";
import { LightSpeed } from "react-reveal";

function ExperienceComponent({ experience = {} }) {
  const { role, company, location, from, to, logo } = experience;
  return (
    <Fragment>
      <div className="flex items-center content-center justify-center pl-5 my-5 min-w-fit lg:w-[144px]">
        <LightSpeed left>
          <div className="flex flex-row">
            <div className="p-2 w-[80px] flex justify-center">
              <img src={logo}  alt="logo"/>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center p-2">
                <div>
                  <div className="mx-5 text-sm font-bold sm:text-3xl lg:text-3xl xl:text-3xl">
                    {role}
                  </div>
                  <div>
                    <span className="ml-5 text-sm md:text-lg lg:text-lg xl:text-lg ">{`${company} , `}</span>
                    <span className="text-sm md:text-lg lg:text-lg xl:text-lg">{location}</span>
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
