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
    <div className="item">
      <div class="max-w-sm bg-white border-solid border-2 border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            onClick={() => openModal(project.live)}
            class="rounded-t-lg border-solid border-2 border-gray-400"
            src={project.image}
            alt={project.name}
          />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.name}
            </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
    </div>
  ));

  return (
    <div className="about">
      <h1 className="projTitle">PROJECTS</h1>
      <div className="projectsCardsContainer">
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
