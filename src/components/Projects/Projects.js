import React from "react";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  StackTitle,
  TitleHeader,
} from "./ProjectsStyles";
import {
  ProjectSection,
  SectionTitle
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <ProjectSection nopadding id="projects">
    <Roll left>
      <SectionTitle main>Projects</SectionTitle>
    </Roll>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <Slide left>
            <BlogCard key={id}>
              <TitleContent>
              <HeaderThree title>
              <Img src={image} />
              <TitleHeader>
                {title}
              </TitleHeader>
                </HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <br />
                <TagList>
                <StackTitle>Stack: &nbsp; &nbsp;</StackTitle>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag} &nbsp;</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Visit</ExternalLinks>
              </UtilityList>
            </BlogCard>
          </Slide>
        )
      )}
    </GridContainer>
  </ProjectSection>
);

export default Projects;
