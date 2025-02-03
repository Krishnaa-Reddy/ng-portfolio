import { Blog1Component } from "../app/about/blog1/blog1.component";
import { Blog2Component } from "../app/about/blog2/blog2.component";

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
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 2,
      title: "DODA: DevOps Data Analytics dashboard",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "NM IDP - Internal Developer Portal",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/adrianhajdin/iphone",
    },
  ];

  export const companies : Company[] = [
    {
      id: 0,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];

  export const techs : Tech[] = [
    {
      id: 0,
      name: "Angular",
      img: "/angular.svg",
      nameImg: "/angularName.svg",
    },
    {
      id: 1,
      name: "React",
      img: "/re.svg",
      nameImg: "/reactName.svg",
    },
    {
      id: 2,
      name: "Java",
      img: "/java.svg",
      nameImg: "/javaName.svg",
    },
    {
      id: 3,
      name: "Spring Boot",
      img: "/spring-boot.svg",
      nameImg: "/springName.svg",
    },
    {
      id: 4,
      name: "Django",
      img: "/django.svg",
      nameImg: "/djangoName.svg",
    },
    {
      id: 5,
      name: "Express",
      img: "/express.svg",
      nameImg: "/expressName.svg",
    },
    {
      id: 6,
      name: "Node",
      img: "/nodejs.svg",
      nameImg: "/nodeName.svg",
    },
    {
      id: 8,
      name: "PostgreSQL",
      img: "/pg.svg",
      nameImg: "/pgName.svg",
    }
    // add three js, typescript, rxjs, tailwind css

    ,
    {
      id: 7,
      name: "Three.js",
      img: "/three.svg",
      nameImg: "/threeName.svg",
    },
    {
      id: 9,
      name: "TypeScript",
      img: "/ts.svg",
      nameImg: "/tsName.svg",
    },
    {
      id: 10,
      name: "RxJS",
      img: "/rxjs.svg",
      nameImg: "/rxName.svg",
    },
    {
      id: 11,
      name: "Tailwind CSS",
      img: "/tailwind-css.svg",
      nameImg: "/tailName.svg",
    },
    // add ai tools claude ai, google gemini, chatgpt, github
    {
      id: 12,
      name: "Claude AI",
      img: "/claude-ai.svg",
      nameImg: "/claudeName.svg",
    },
    {
      id: 13,
      name: "Google Gemini",
      img: "/google-gemini.svg",
      nameImg: "/geminiName.svg",
    },
    {
      id: 14,
      name: "ChatGPT",
      img: "/chatgpt.svg",
      nameImg: "/chatgptName.svg",
    },
    {
      id: 15,
      name: "GitHub",
      img: "/github.svg",
      nameImg: "/githubName.svg",
    },
    // add deepseek
    {
      id: 16,
      name: "Deepseek",
      img: "/deepseek.svg",
      nameImg: "/deepseekName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Project Engineer - Wipro Ltd.",
      desc: "Worked on 3 different cross-platform projects built with Spring Boot & Angular, Python Django & Angular and Spotify's Backstage respectively. ",
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