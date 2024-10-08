import MailIcon from "@mui/icons-material/Mail";

export const ExperienceInfo = [
  {
    title: "Software Developer Intern",
    company: "🏘️ Home Services Inc.",
    length: "Apr 2024 - Jul 2024",
    location: "Toronto, CA",
    image: "experience/home-services.jpeg",
  },
  {
    title: "Web Developer",
    company: "💸 Tamils in Finance",
    length: "Mar 2024 - Present",
    location: "Toronto, CA",
    image: "experience/tamils-in-finance.jpeg",
  },
  {
    title: "Ambassador",
    company: "👩 BoostHER TMU",
    length: "Mar 2024 - Present",
    location: "Toronto, CA",
    image: "experience/boosther.jpeg",
  },
  {
    title: "Groundstation GUI Developer",
    company: "🚀 MetRocketry",
    length: "Jan 2024 - Present",
    location: "Toronto, CA",
    image: "experience/metrocketry.jpeg",
  },
  {
    title: "Teaching Assistant",
    company: "🎓 Kumon Inc",
    length: "Jul 2022 - Present",
    location: "Toronto, CA",
    image: "experience/kumon.jpeg",
  },
];

export const ProjectInfo = [
  {
    title: "📱 Instagram Clone",
    githubURL: "https://github.com/avallip443/instagram-clone",
    previewURL: "https://instagram-clone-four-topaz.vercel.app/auth",
    tools: "React, Firebase, ChakraUI",
    description:
      "Instagram replica with user authentication and real-time post-creation and interactions.",
  },
  {
    title: "⚽ SoccerSphere [Ongoing]",
    githubURL: "https://github.com/avallip443/player-stats-data-scraping",
    previewURL: "",
    tools: "React, Spring, PostgreSQL, Python",
    description:
      "Developing a web app for analyzing LaLiga match statistics with real-time data updates.",
  },
  {
    title: "⚔️ WarriorQuest",
    githubURL: "https://github.com/avallip443/WarriorQuest",
    previewURL: "https://avallip.itch.io/warriorquest",
    tools: "Python, Pygame",
    description:
      "A 2D turn-based RPG game where you battle against powerful enemies to become the ultimate warrior.",
  },
  {
    title: "🏋️ Workit [Ongoing]",
    githubURL: "https://github.com/avallip443/workit",
    previewURL: "",
    tools: "React Native, TypeScript, PostgreSQL",
    description:
      "A mobile app for creating and managing interval training workouts.",
  },
  {
    title: "🤖 Pokemon Twitter Bot",
    githubURL: "https://github.com/avallip443/pokemon-twitter-bot",
    previewURL: "https://x.com/PokemonDaily4",
    tools: "Python, Pandas, TweepyAPI",
    description:
      "An automated Twitter bot that posts random daily Pokémon images and descriptions.",
  },
  {
    title: "💵 Expense Tracker",
    githubURL: "https://github.com/avallip443/expense-tracker",
    previewURL: "https://expense-tracker-app-sage.vercel.app/",
    tools: "MongoDB, ExpressJS, ReactJS, NodeJS",
    description:
      "A tracker for logging, categorizing, and visualizing daily expenses.",
  },
];

export const SocialsInfo = [
  {
    title: "GitHub",
    url: "https://github.com/avallip443",
    imageSrc: "/icons/github-icon.svg",
    altText: "GitHub Icon",
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/avallip/",
    imageSrc: "/icons/linkedin-icon.svg",
    altText: "Linkedin Icon",
  },
  {
    title: "Email",
    url: "mailto:avallipuranathan@gmail.com",
    customIcon: (
      <MailIcon
        sx={{
          height: { xs: 30, md: 34 },
          width: { xs: 30, md: 34 },
        }}
      />
    ),
  },
];
