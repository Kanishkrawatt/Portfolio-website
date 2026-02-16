import React from "react";
import {
  ExperienceContainer,
  ExperienceHeader,
  ExperienceSubheader,
  TimelineWrapper,
  TimelineLine,
  TimelineItem,
  TimelineCircle,
  TimelineYear,
  TimelineMonth,
  TimelineCard,
  CompanyLogo,
  CardTopSection,
  CardHeader,
  Position,
  Company,
  JobDetails,
  Duration,
  Location,
  Description,
  SkillsContainer,
  SkillTag,
} from "./ExperienceComponents";

import ScrollAnimation from "../ScollAnimation/ScrollAnimation";

function Experience({ data = [] }) {
  // Use data from Firebase props, fallback to empty array if not provided
  const experiencesData = data;

  // Sort experiences by date (most recent first)
  const experiences = experiencesData.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return b.month - a.month;
  });

  // Get month name from month number
  const getMonthName = (monthNumber) => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return months[monthNumber - 1];
  };

  // Calculate spacing between items based on time difference
  const getSpacing = (index) => {
    if (index === experiences.length - 1) return 4;
    const current = experiences[index];
    const next = experiences[index + 1];
    const yearDiff = current.year - next.year;
    const monthDiff = current.month - next.month;
    const totalMonths = yearDiff * 12 + monthDiff;
    // Base spacing of 4rem + 0.5rem per month difference (capped at 12rem max)
    return Math.min(4 + totalMonths * 0.5, 12);
  };

  const ScrollElements = experiences.map((_, index) => `Experience-${index}`);
  ScrollElements.push("ExperienceHeader");

  ScrollAnimation(ScrollElements);

  return (
    <section id="Experience">
      <ExperienceContainer>
        <ExperienceHeader id="ExperienceHeader">
          Work Experience
        </ExperienceHeader>
        <ExperienceSubheader>My Professional Journey</ExperienceSubheader>

        <TimelineWrapper>
          <TimelineLine />

          {experiences.map((exp, index) => {            
            return (
              <React.Fragment key={index}>
                <TimelineItem
                  id={`Experience-${index}`}
                  isLeft={index % 2 === 0}
                  spacing={getSpacing(index)}
                >
                  <TimelineCircle>
                    <TimelineYear>{exp.year}</TimelineYear>
                    <TimelineMonth>{getMonthName(exp.month)}</TimelineMonth>
                  </TimelineCircle>

                  <TimelineCard isLeft={index % 2 === 0}>
                    <CardTopSection>
                    <CompanyLogo 
                      src={`/experience/${exp.logo}`} 
                      alt={exp.company}
                      padding={ exp.padding }
                    />
                    
                    <JobDetails>
                      <Duration>{exp.duration}</Duration>
                      <Location>{exp.location}</Location>
                    </JobDetails>

                    <CardHeader>
                      <Position>{exp.position}</Position>
                      <Company>{exp.company}</Company>
                    </CardHeader>
                    </CardTopSection>

                    <Description>{exp.description}</Description>

                    <SkillsContainer>
                      {exp.skills.map((skill, skillIndex) => (
                        <SkillTag key={skillIndex}>{skill}</SkillTag>
                      ))}
                    </SkillsContainer>
                  </TimelineCard>
                </TimelineItem>
              </React.Fragment>
            );
          })}
        </TimelineWrapper>
      </ExperienceContainer>
    </section>
  );
}

export default Experience;
