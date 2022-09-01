import { Fragment } from 'react'
import { AiFillGithub as GitHub, AiOutlineLinkedin as LinkedIn, AiOutlineMail as Mail } from 'react-icons/ai'

const IntroComponent = ({ name, designation, socialNetworks, classes }) => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center w-screen h-screen space-y-2 text-white bg-black">
        <div className="flex flex-col items-center justify-center space-y-2 intro-text">
          <div className="flex flex-row items-center justify-center ">
            <div className="text-2xl md:text-4xl lg:text-5xl">Hello, I'm</div>
            <div className="text-3xl intro-name-highlighter md:text-5xl lg:text-6xl">
              {name}.
            </div>
          </div>
          <div className="text-xl md:text-3xl lg:text-4xl">
            I'm a {designation}.
          </div>
          <div className="flex flex-row items-center justify-center space-x-2 text-3xl text-white">
            <div>
              <a
                href={socialNetworks.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
            </div>
            <div>
              <a href={socialNetworks.gitHub} target="_blank" rel="noreferrer">
                <GitHub />
              </a>
            </div>
            <div>
              <a href={`mailto: ${socialNetworks.mail}`}>
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default IntroComponent
