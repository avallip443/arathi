import MailIcon from '@mui/icons-material/Mail';

export const ExperienceInfo = [
  {
    title: "Software Developer Intern",
    company: "🏘️ Aisha Home Serivces",
    length: "Apr 2024 - Present",
    location: "Toronto, CA",
  },
  {
    title: "Web Developer",
    company: "💸 Tamils in Finance",
    length: "Mar 2024 - Present",
    location: "Toronto, CA",
  },
  {
    title: "Ambassador",
    company: "👩 BoostHER TMU",
    length: "Mar 2024 - Present",
    location: "Toronto, CA",
  },
  {
    title: "Groundstation GUI Developer",
    company: "🚀 MetRocketry",
    length: "Jan 2024 - Present",
    location: "Toronto, CA",
  },
  {
    title: "Teaching Assistant",
    company: "🎓 Kumon Inc",
    length: "Jul 2022 - Present",
    location: "Toronto, CA",
  },
];

export const ProjectInfo = [
  {
    title: "Instagram Clone",
    githubURL: "",
    previewURL: "",
    tools: "React, Firebase, ChakraUI",
    description:
      "Replica of Instagram, featuring user authentication, post-creation, real-time user interactions, and profile customization",
  },
  {
    title: "SoccerSphere",
    githubURL: "",
    previewURL: "",
    tools: "React, Spring Boot, Postgres, Python",
    description: "",
  },
  {
    title: "Pokemon Twitter Bot",
    githubURL: "",
    previewURL: "",
    tools: "Python",
    description: "",
  },
];

export const SocialsInfo = [
  {
    title: 'GitHub',
    url: 'https://github.com/avallip443',
    imageSrc: '/github-icon.svg',
    altText: 'GitHub Icon',
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/avallip/",
    imageSrc: "/linkedin-icon.svg",
    altText: "Linkedin Icon",
  },
  {
    title: "Email",
    url: "mailto:avallipuranathan@gmail.com",
    customIcon: (
      <MailIcon
        sx={{
          color: "white",
          height: { xs: 25, md: 34 },
          width: { xs: 25, md: 34 },
        }}
      />
    ),
  },
]
