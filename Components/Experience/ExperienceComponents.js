import styled from "styled-components";

export const ExperienceContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  width: 100%;
  background-color: #afb4ff;
  padding: 5rem 0 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3rem 0 5rem 0;
  }
`;

export const ExperienceHeader = styled.h1`
  font-family: "Rum Raisin", sans-serif;
  font-size: 3rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ExperienceSubheader = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  color: #636e72;
  margin-bottom: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

export const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 2rem 0;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  top: 200px;
  bottom: 240px;
  background: #9c9efe;
  border-radius: 2px;

  @media (max-width: 768px) {
    left: 30px;
    top: 70px;
    bottom: 70px;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${(props) => props.spacing || 4}rem;
  display: flex;
  justify-content: ${(props) => (props.isLeft ? "flex-start" : "flex-end")};
  align-items: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 80px;
    margin-bottom: 4rem;
  }
`;

export const TimelineCircle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  border: 5px solid #afb4ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  gap: 0.1rem;

  @media (max-width: 768px) {
    left: 30px;
    width: 70px;
    height: 70px;
  }
`;

export const TimelineYear = styled.span`
  font-family: "Rum Raisin", sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const TimelineMonth = styled.span`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.65rem;
  }
`;

export const TimelineCard = styled.div`
  width: 45%;
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  background-color: rgb(156, 158, 254);
  margin-left: ${(props) => (props.isLeft ? "0" : "calc(55% + 1rem)")};
  margin-right: ${(props) => (props.isLeft ? "calc(55% + 1rem)" : "0")};

  @media (max-width: 768px) {
    width: calc(100% - 80px);
    margin-left: 0;
    margin-right: 0;
  }
`;

export const CompanyLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: contain;
  margin-bottom: 1rem;
  border: 3px solid #f0f0f0;
  background: white;
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.padding && `box-sizing: border-box;`}
`;

export const CardTopSection = styled.div`
  background: rgb(177, 225, 255);
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  padding: 1.5rem;
  border-radius: 1rem 1rem 0 0;
  position: relative;
`;

export const CardHeader = styled.div`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;

export const Position = styled.h3`
  font-family: "Rum Raisin", sans-serif;
  font-size: 1.4rem;
  color: #2d3436;
  margin: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Company = styled.h4`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  color: #4a4a4a;
  margin: 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const JobDetails = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-end;
  /* background: rgba(255, 255, 255, 0.2); */
  padding: 0.75rem;
  border-radius: 0.75rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    position: static;
    align-items: flex-start;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
`;

export const Duration = styled.span`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #2d3436;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Location = styled.span`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 0.8rem;
  color: #2d3436;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Description = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #3a3a3a;
  margin-bottom: 1rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: left;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SkillTag = styled.span`
  padding: 0.4rem 0.8rem;
  background: rgb(175, 180, 255);
  border-radius: 1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
`;
