import { useState } from "react";
import ProjectsData from "../data/projects.json";
import Modal from "react-modal";

const Projects = () => {
  // Create state to hold projects
  const [modalIsOpen, setIsOpen] = useState(false);
  const [projectUrl, setProjectUrl] = useState("");
  let subtitle;

  Modal.setAppElement(document.getElementById("container"));

  function openModal(newProjectUrl) {
    setProjectUrl(newProjectUrl);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Define function to return JSX needed upon data retrieval

  const projectGrid = ProjectsData.map((project) => (
    <div className="projectCard">
      <div className="bg-white rounded-xl">
        <img
          onClick={() => openModal(project.live)}
          className="projectPics"
          src={project.image}
          alt={project.name}
        />
        <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {project.description}
        </p>
        <div className="bioLinks">
          <a target="_blank" rel="noreferrer" href={project.git}>
            <img
              className="icons"
              src="/images/githubLogoMini.png"
              alt="GitHub Link"
            ></img>
          </a>
          <a target="_blank" rel="noreferrer" href={project.live}>
            <img
              className="icons"
              src="/images/webLogo.png"
              alt="Live Site Link"
            ></img>
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="about">
      <h1 className="projTitle">PROJECTS</h1>
      <div className="memContainer">
        {projectGrid}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Project Demo"
        >
          <iframe className="iframe" src={projectUrl} title="Project"></iframe>
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
