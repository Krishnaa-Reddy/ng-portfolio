import { Blog1Component } from "../app/about/blog1/blog1.component";
import { Blog2Component } from "../app/about/blog2/blog2.component";

export const EMAIL = 'kundhurukrishnareddy@gmail.com';

export const navItems = [
    { name: "Home", link: "home" },
    { name: "Experience", link: "experience" },
    { name: "Projects", link: "projects" },
    { name: "About", link: "about" },
  ];

  export const features = [
    {
      title: 'Dynamic Spotlight',
      description:
        'Experience a responsive spotlight that follows your cursor.',
      details:
        "Our spotlight component uses Angular's powerful rendering engine to create a smooth, performant effect that responds to user interaction in real-time.",
      showDetails: false,
    },
    {
      title: 'Animated Content',
      description: 'Enjoy smooth animations as content loads and interacts.',
      details:
        "We leverage Angular's animation system to create fluid transitions and engaging user experiences that bring your content to life.",
      showDetails: false,
    },
    {
      title: 'Responsive Design',
      description: 'Seamlessly adapts to any screen size or device.',
      details:
        "Using a combination of Angular's flexibility and modern CSS techniques, our components look great on everything from mobile phones to large desktop displays.",
      showDetails: false,
    },
    {
      title: 'Interactive Elements',
      description: 'Engage with the content through interactive UI components.',
      details:
        "We create rich, interactive experiences using Angular's powerful templating and event binding systems, allowing for deeply engaging user interfaces.",
      showDetails: false,
    },
  ];
  
  export const gridItems: GridItem[] = [
    {
      id: 1,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
      cols: 2,
      rows: 2,
      component: Blog1Component
    },
    {
      id: 2,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "/gradient.png",
      spareImg: "",
      cols: 1,
      rows: 2,
      component: Blog2Component
    },
  ];
  
  export const projects : Project[] = [
    {
      id: 1,
      title: "MRV: Maturity Ruleset Visualization tool",
      des: "Visualizes set of microservices and their latest successful jenkins build information. Each stage's information in a build in a well organized tabular view. With a well designed UI/UX.",
      img: "/p1.svg",
      iconLists: [
        { title: "Angular", path: "/angular.svg" },
        { title: "TypeScript", path: "/ts.svg" },
        { title: "RxJS", path: "/rxjs.svg" },
        { title: "Java", path: "/java.svg" },
        { title: "Spring Boot", path: "/spring-boot.svg" },
        { title: "PostgreSQL", path: "/pg.svg" },
        { title: "Jenkins", path: "/jenkins.svg" },
        { title: "SonarQube", path: "/sonarqube.svg" },
      ],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 2,
      title: "DODA: DevOps Data Analytics dashboard",
      des: "Built with a modern tech stack including Angular, Angular Material, and RxJS for a responsive and dynamic user interface. Leveraging the power of Elasticsearch for data management and a Django backend framework, DODA ensures robust performance. Daily, up-to-date pipeline deliveries are managed and triggered through Spinnaker.",
      img: "/p2.svg",
      iconLists: [
        { title: "Angular", path: "/angular.svg" },
        { title: "TypeScript", path: "/ts.svg" },
        { title: "RxJS", path: "/rxjs.svg" },
        { title: "Elastic Search", path: "/elasticsearch.svg" },
        { title: "Python", path: "/python.svg" },
        { title: "Django", path: "/django.svg" },
      ],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "NM IDP - Internal Developer Portal",
      des: "Used Backstage by Spotify, a plugin-based, cloud-native React software solution, backed by PostgreSQL for the database.",
      img: "/p3.svg",
      iconLists: [
        { title: "React", path: "/re.svg" },
        { title: "TypeScript", path: "/ts.svg" },
        { title: "Express", path: "/express.svg" },
        { title: "Backstage", path: "/backstage.svg" },
        { title: "Material UI", path: "/mui.svg" },
      ],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      des: "This is built using Angular 18 with signal-based reactivity, Tailwind CSS, and the NGX UI component library, which leverages Three.js for its animations.",
      img: "/p4.svg",
      iconLists: [
        { title: "Angular", path: "/angular.svg" },
        { title: "RxJS", path: "/rxjs.svg" },
        { title: "TypeScript", path: "/ts.svg" },
        { title: "NGX UI", path: "/ngxui.png" },
        { title: "Three.js", path: "/three.svg" },
      ],
      link: "https://github.com/adrianhajdin/iphone",
    },
  ];

  // export const companies : Company[] = [
  //   {
  //     id: 0,
  //     name: "cloudinary",
  //     img: "/cloud.svg",
  //     nameImg: "/cloudName.svg",
  //   },
  //   {
  //     id: 2,
  //     name: "appwrite",
  //     img: "/app.svg",
  //     nameImg: "/appName.svg",
  //   },
  //   {
  //     id: 3,
  //     name: "HOSTINGER",
  //     img: "/host.svg",
  //     nameImg: "/hostName.svg",
  //   },
  //   {
  //     id: 4,
  //     name: "stream",
  //     img: "/s.svg",
  //     nameImg: "/streamName.svg",
  //   },
  //   {
  //     id: 5,
  //     name: "docker.",
  //     img: "/dock.svg",
  //     nameImg: "/dockerName.svg",
  //   },
  // ];

  export const techs : Tech[] = [
    {
      id: 0,
      name: "Angular",
      img: "/angular.svg",
      nameImg: "/angularName.svg",
      type: "frontend"
    },
    {
      id: 1,
      name: "React",
      img: "/re.svg",
      nameImg: "/reactName.svg",
      type: "frontend"
    },
    {
      id: 2,
      name: "Java",
      img: "/java.svg",
      nameImg: "/javaName.svg",
      type: "backend"
    },
    {
      id: 3,
      name: "Spring Boot",
      img: "/spring-boot.svg",
      nameImg: "/springName.svg",
      type: "backend"
    },
    {
      id: 4,
      name: "Django",
      img: "/django.svg",
      nameImg: "/djangoName.svg",
      type: "backend"
    },
    {
      id: 6,
      name: "Node",
      img: "/nodejs.svg",
      nameImg: "/nodeName.svg",
      type: "backend"
    },
    {
      id: 8,
      name: "PostgreSQL",
      img: "/pg.svg",
      nameImg: "/pgName.svg",
      type: "backend"
    },
    {
      id: 7,
      name: "Three.js",
      img: "/three.svg",
      nameImg: "/threeName.svg",
      type: "frontend"
    },
    {
      id: 9,
      name: "TypeScript",
      img: "/ts.svg",
      nameImg: "/tsName.svg",
      type: "frontend" // Can be used in both, but more commonly associated with frontend
    },
    {
      id: 10,
      name: "RxJS",
      img: "/rxjs.svg",
      nameImg: "/rxName.svg",
      type: "frontend"
    },
    {
      id: 11,
      name: "Tailwind CSS",
      img: "/tailwind.svg",
      nameImg: "/tail.svg",
      type: "frontend"
    },
    {
      id: 12,
      name: "Claude AI",
      img: "/claude-ai.svg",
      nameImg: "/claudeName.svg",
      type: "others"
    },
    {
      id: 13,
      name: "Google Gemini",
      img: "/google-gemini.svg",
      nameImg: "/geminiName.svg",
      type: "others"
    },
    {
      id: 14,
      name: "ChatGPT",
      img: "/chatgpt.svg",
      nameImg: "/chatgptName.svg",
      type: "others"
    },
    {
      id: 16,
      name: "Deepseek",
      img: "/deepseek.svg",
      nameImg: "/deepseekName.svg",
      type: "others"
    },

  ];
  export const workExperience = [
    {
      id: 1,
      title: "Project Engineer - Wipro Ltd.",
      desc: "Working on 3 different cross-platform projects built with Spring Boot & Angular, Python Django & Angular and Spotify's Backstage respectively. ",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 2,
      title: "Java Full Stack Developer",
      desc: "Started my web development journey with Spring Boot & Angular, and worked on a few projects.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },

  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];