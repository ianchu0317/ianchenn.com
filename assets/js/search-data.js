// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "My all time featured projects :)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-ordenar-pila-merge-two-sorted-stacks",
        
          title: "Ordenar pila ⛁ (merge two sorted stacks)",
        
        description: "Ejercicio de ordenar dos pilas ordenas en una sola",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/order-stack/";
          
        },
      },{id: "post-homelab-network-speed-test",
        
          title: "Homelab network speed test",
        
        description: "solving networking speed problem in my homelab",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/homelab-speed-test/";
          
        },
      },{id: "post-time-to-upgrade-my-homelab",
        
          title: "Time to upgrade my homelab",
        
        description: "It&#39;s time to make my homelab network faster",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/upgrading-homelab/";
          
        },
      },{id: "projects-todolist",
          title: 'ToDoList',
          description: "To Do List web app with user authentication - full stack project - unique list for every user - todo.ianchenn.com",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ToDoList/";
            },},{id: "projects-fobium",
          title: 'Fobium',
          description: "web anonymous forum about phobias - full stack project - www.fobium.com",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fobium/";
            },},{id: "projects-homelab",
          title: 'Homelab',
          description: "Homelab for hosting my own services and projects - mini server rack",
          section: "Projects",handler: () => {
              window.location.href = "/projects/homelab/";
            },},{id: "projects-led-api",
          title: 'Led API',
          description: "LED control through web app using API - Raspberry PI + Arduino",
          section: "Projects",handler: () => {
              window.location.href = "/projects/led-api/";
            },},{id: "projects-math-blog",
          title: 'Math Blog',
          description: "An academic blog about Math along with theory and exercises solutions - written with LaTeX and hosted with GitHub Pages",
          section: "Projects",handler: () => {
              window.location.href = "/projects/math_blog/";
            },},{id: "projects-micro-lift",
          title: 'Micro Lift',
          description: "An elevator simulation made with Raspberry PI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/micro-lift/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%65%6E%69%61%6E%33%31%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ianchu0317", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ianchenn", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
