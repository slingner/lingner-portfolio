import React from "react";
import {
  PageWrapper,
  ContentWrapper,
  PageHeader,
  SubHeader,
  Image,
} from "./Work.style";

import { GithubButton, LinkWrap } from "../Footer/Footer";

function Work() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <PageHeader> Folkul </PageHeader>
        <SubHeader>A Thought-Sharing Social Network</SubHeader>
        <p>
          A full-stack application giving you the opportunity to explore coffee
          beans that are responsibly sourced from crops around the world.{" "}
        </p>

        <p>
          Stack includes React.js, CSS, Node.js, Express.js, PostgreSQL, Enzyme,
          Mocha, Chai.
        </p>
        <a
          href="https://filter-app.now.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            // src={filter screenshot here}
            alt="filter screenshot"
            id="filter"
          />
        </a>
        <LinkWrap
          href="https://github.com/slingner/filter-client"
          rel="noreferrer noopener"
          target="_blank"
        >
          <GithubButton />
        </LinkWrap>
        <a
          href="https://filter-app.now.sh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Link to Scott Lingner coffee bean FILTER App Project"
        >
          {" "}
          Live Link <i className="fas fa-globe-americas"></i>
        </a>
      </ContentWrapper>

      <ContentWrapper>
        <PageHeader> Filter </PageHeader>
        <SubHeader>A Coffee Bean Exploration Application</SubHeader>
        <p>
          A full-stack application giving you the opportunity to explore coffee
          beans that are responsibly sourced from crops around the world.{" "}
        </p>

        <p>
          Stack includes React.js, CSS, Node.js, Express.js, PostgreSQL, Enzyme,
          Mocha, Chai.
        </p>
        <a
          href="https://filter-app.now.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            // src={filter screenshot here}
            alt="filter screenshot"
            id="filter"
          />
        </a>
        <a
          href="https://github.com/slingner/filter-client"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Scott Lingner Github Repo of his Filter App Project"
        >
          Github Repo <i className="fab fa-github"></i>
        </a>
        <a
          href="https://filter-app.now.sh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Link to Scott Lingner coffee bean FILTER App Project"
        >
          {" "}
          Live Link <i className="fas fa-globe-americas"></i>
        </a>
      </ContentWrapper>
      <br />
      <ContentWrapper>
        <PageHeader>French Moi</PageHeader>
        <SubHeader>Learn French with Spaced-repetition</SubHeader>
        <p></p>
        <p>
          Front-end: React.js, CSS, media queries Server: PostgreSQL
          Hosting/SaaS: Heroku Development Environment: Zeit Now Testing:
          Cypress, Mocha, Chai
        </p>
        <a
          href="https://slingner.github.io/QuizAppShiannScott/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/quizapp1.png"
            alt="quizapp screenshot"
            id="quizapp"
          />
        </a>
        <a
          href="https://github.com/slingner/QuizAppShiannScott"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Scott Lingner Github Repo of his Quiz Trivia App Project"
        >
          Github Repo <i className="fab fa-github"></i>
        </a>
        <a
          href="https://slingner.github.io/QuizAppShiannScott/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Link to Scott Lingner Quiz Trivia App Project"
        >
          {" "}
          Live Link <i className="fas fa-globe-americas"></i>
        </a>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default Work;
