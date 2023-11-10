import AboutData from "../data/about.json";
import TeamData from "../data/team.json";
import { useState } from "react";
import Modal from "react-modal";

const About = () => {
    let techObj = {}
    techObj.JavaScript = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" title="JavaScript" alt="JavaScript"/>
    techObj.TypeScript = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" title="TypeScript" alt="TypeScript"/>
    techObj.HTML5 = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" title="HTML5" alt="HTML5"/>
    techObj.CSS3 = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" title="CSS3" alt="CSS3"/>
    techObj.Angular = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" title="Angular" alt="Angular"/>
    techObj.React = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React" alt="React"/>
    techObj.ExpressJS = <svg className="techIcon" viewBox="0 0 128 128"> <title>Express</title> <g fill="white"><path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path></g></svg>
    techObj.NodeJS = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" title="NodeJS" alt="NodeJS"/>
    techObj.GitHub = <svg className="techIcon" viewBox="0 0 128 128"> <title>GitHub</title> <g fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g></svg>
    techObj.Python = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" title="Python" alt="Python"/>
    techObj.Django = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" title="Django" alt="Django"/>
    techObj.jQuery = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg" title="jQuery" alt="jQuery"/>
    techObj.PostgreSQL = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" title="PostgreSQL" alt="PostgreSQL"/>
    techObj.MongoDB = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" title="MongoDB" alt="MongoDB"/>
    techObj.Firebase = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" title="Google Firebase" alt="Google Firebase"/>
    techObj.Photoshop = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" title="Adobe Photoshop" alt="Adobe Photoshop"/>
    techObj.VSCode = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" title="VSCode" alt="VSCode"/>
    techObj.TailwindCSS = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" title="Tailwind CSS" alt="Tailwind CSS"/>
    techObj.NestJS = <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" title="NestJS" alt="NestJS"/>
  const [modalIsOpen, setIsOpen] = useState(false);
  const [portfolioUrl, setPortfolioUrl] = useState("");
  let subtitle;

  Modal.setAppElement(document.getElementById("container"));

  function openModal(newPortfolioUrl) {
    setPortfolioUrl(newPortfolioUrl);
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const memberGrid = TeamData.map((member) => (
    <div className="memberContainer">
      <div class="max-w-sm mt-5 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            onClick={() => openModal(member.portfolio)}
            class="rounded-t-lg"
            src={member.headshot}
            alt={member.name}
          />
        </a>
        <div class="p-5">
          <h5 class="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h5>

          <h1 className="memberTitle mb-2">{member.title}</h1>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {member.bio}
          </p>
          <div className="bioLinks">
            <a target="_blank" rel="noreferrer" href={member.github}>
              <img
                className="icons"
                src="/images/githubLogoMini.png"
                alt="GitHub Link"
              ></img>
            </a>
            <a target="_blank" rel="noreferrer" href={member.portfolio}>
              <img
                className="icons"
                src="/images/webLogo.png"
                alt="Portfolio Link"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div>{(() => true)()}</div>
      <div className="about">
      <h1 className="projTitle">ABOUT US</h1>
      <p className="bio">{AboutData.bio}</p>
      </div>
      <div className="about">
        <h1 className="projTitle">MEET THE TEAM</h1>
        <div className="container" id="container">
          {memberGrid}
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Member Portfolio"
          >
            <iframe
              className="iframe"
              src={portfolioUrl}
              title="Member Portfolio"
            ></iframe>
          </Modal>
        </div>
      </div>
      <div className="about">
      <h1 className="projTitle">OUR TECH STACK</h1>
      <div className="aboutTech">
        {Object.keys(techObj).map((techItem) => (techObj[techItem] && <p className="techText">{techObj[techItem]}{techItem}</p>))}
      </div>
      </div>
      <br />
    </div>
  );
};

export default About;
