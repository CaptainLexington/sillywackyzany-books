// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-event-calendar",
          title: "Event Calendar",
          description: "Upcoming events for SillyWackyZany Books",
          section: "Navigation",
          handler: () => {
            window.location.href = "/calendar/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-blind-date-with-a-book-club",
          title: "Blind Date with a Book Club",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/book-club/";
          },
        },{id: "nav-book-catering-for-your-event",
          title: "Book Catering for Your Event",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/catering/";
          },
        },{id: "nav-ethically-sourced-book-cover-art-pieces",
          title: "Ethically-Sourced Book Cover Art Pieces",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/book-art/";
          },
        },{id: "post-what-39-s-so-special-about-books-anyway",
        
          title: "What&#39;s So Special About Books, Anyway?",
        
        description: "not a lot, but also everything",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/are-books-special/";
          
        },
      },{id: "post-how-to-read-sixteen-books",
        
          title: "How to Read Sixteen Books",
        
        description: "like, at the same time",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/how-to-read-16-books/";
          
        },
      },{id: "post-why-mass-market-paperbacks",
        
          title: "Why Mass Market Paperbacks?",
        
        description: "why not just books generally?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/why-mass-markets/";
          
        },
      },{id: "news-a-new-website",
          title: 'A new website!',
          description: "",
          section: "News",},{id: "news-a-new-blog-and-new-shows-on-the-calendar",
          title: 'A new blog, and new shows on the calendar!',
          description: "",
          section: "News",},{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/silly.wacky.zany.books", "_blank");
        },
      },{
        id: 'social-ebay',
        title: 'Ebay',
        section: 'Socials',
        handler: () => {
          window.open("https://www.ebay.com/usr/sillywackyzanybooks", "_blank");
        },
      },{
        id: 'social-whatnot',
        title: 'Whatnot',
        section: 'Socials',
        handler: () => {
          window.open("https://www.whatnot.com/user/sillywackyzanybooks", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%6C%65@%73%69%6C%6C%79%77%61%63%6B%79%7A%61%6E%79%62%6F%6F%6B%73.%63%6F%6D", "_blank");
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
