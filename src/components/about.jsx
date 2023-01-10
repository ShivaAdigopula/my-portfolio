import { Button } from "@mui/material";
import { Fragment } from "react";
import { AiOutlineDownload } from "react-icons/ai";

export function AboutComponent({ picture, about, resume }) {
  return (
    <Fragment>
      <div
        className="flex flex-col items-center content-center justify-center w-screen h-screen mx-auto space-y-4 text-white about"
        id="about"
      >
        <div>
          <div className="mb-10 banner">About Me</div>
        </div>

        <div className="flex flex-col items-center justify-center w-4/5 gap-5 lg:gap-10 xl:gap-10 lg:w-2/3 xl:w-2/3 md:flex-row lg:flex-row xl:flex-row">
          <img
            className="block rounded-full h-36 md:h-44 lg:h-44 xl:h-44"
            src={picture}
            alt={"profile"}
          />

          <div className="flex flex-col items-center justify-center ">
            <div className="w-5/6 text-base md:w-full lg:w-full xl:w-full xs:text-xs">{about}</div>
          </div>
        </div>
        <div className="my-5">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            <Button
              className="download-resume"
              variant="contained"
              startIcon={<AiOutlineDownload />}
            >
              Resume
            </Button>
          </a>
        </div>
      </div>
    </Fragment>
  );
}
