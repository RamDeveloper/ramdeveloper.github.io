## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Themes](#themes-art)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Folder Structure](#folder-structure-open_file_folder)
- [Usage](#usage-joystick)
- [Hosting](#hosting-globe_with_meridians)
- [SEO](#seo-spider)
- [Packages Used](#packages-used-package)
- [APIs Used](#apis-used-world_map)
- [Fonts and Images](#fonts-and-images-performing_arts)
- [Upcoming Features](#upcoming-features-construction)
- [Contributors](#contributors-man_technologistwoman_technologist)

<br /><br />

# Sections :bookmark:

- HOME
- ABOUT
- RESUME
  - EDUCATION
  - SKILLS
  - EXPERIENCE
  - PROJECTS
  - Achievements <br />
- SERVICES
  - TESTIMONIALS <br />
- BLOG
- CONTACTS

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

## Also check [this](https://reactjs.org/docs/create-a-new-react-app.html) out if you are new to react.

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

<br />

# Getting Started :dart:

### Fork and Clone the repo

#### To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```

### Install packages from the root directory

```

npm install
``

### Start the development server

```
npm start
```

<br />

# Folder Structure :open_file_folder:

```bash
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── _redirects
│   ├── favicon.ico
│   ├── favicon.png
│   ├── favicon512.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── assets
│   │   ├── fonts
│   │   │   └── Bestermind
│   │   │       └── BestermindRegular.ttf
│   │   ├── pdf
│   │   │   └── resume.pdf
│   │   └── svg
│   │       ├── about
│   │       ├── contacts
│   │       ├── education
│   │       ├── experience
│   │       ├── projects
│   │       ├── skills
│   │       ├── social
│   │       └── testimonials
│   ├── components
│   │   ├── About
│   │   │   ├── About.css
│   │   │   └── About.js
│   │   ├── Achievements
│   │   │   ├── Achievements.css
│   │   │   └── Achievements.js
│   │   │   └── AchievementCard.js
│   │   ├── BackToTop
│   │   │   ├── BackToTop.css
│   │   │   └── BackToTop.js
│   │   ├── Blog
│   │   │   ├── Blog.css
│   │   │   ├── Blog.js
│   │   │   └── SingleBlog
│   │   │       ├── SingleBlog.css
│   │   │       └── SingleBlog.js
│   │   ├── Contacts
│   │   │   ├── Contacts.css
│   │   │   └── Contacts.js
│   │   ├── Education
│   │   │   ├── Education.css
│   │   │   ├── Education.js
│   │   │   └── EducationCard.js
│   │   ├── Experience
│   │   │   ├── Experience.css
│   │   │   ├── Experience.js
│   │   │   └── ExperienceCard.js
│   │   ├── Footer
│   │   │   ├── Footer.css
│   │   │   └── Footer.js
│   │   ├── Landing
│   │   │   ├── Landing.css
│   │   │   └── Landing.js
│   │   ├── Navbar
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.js
│   │   ├── Projects
│   │   │   ├── Projects.css
│   │   │   ├── Projects.js
│   │   │   └── SingleProject
│   │   │       ├── SingleProject.css
│   │   │       └── SingleProject.js
│   │   ├── Services
│   │   │   ├── Services.css
│   │   │   ├── Services.js
│   │   │   └── SingleService
│   │   │       ├── SingleService.css
│   │   │       └── SingleService.js
│   │   ├── Skills
│   │   │   ├── Skills.css
│   │   │   └── Skills.js
│   │   ├── Testimonials
│   │   │   ├── Testimonials.css
│   │   │   └── Testimonials.js
│   │   └── index.js
│   ├── contexts
│   │   └── ThemeContext.js
│   ├── data
│   │   ├── aboutData.js
│   │   ├── achievementData.js
│   │   ├── blogData.js
│   │   ├── contactsData.js
│   │   ├── educationData.js
│   │   ├── experienceData.js
│   │   ├── headerData.js
│   │   ├── projectsData.js
│   │   ├── servicesData.js
│   │   ├── skillsData.js
│   │   ├── socialsData.js
│   │   ├── testimonialsData.js
│   │   └── themeData.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Blog
│   │   │   ├── BlogPage.css
│   │   │   └── BlogPage.js
│   │   ├── Main
│   │   │   └── Main.js
│   │   ├── Project
│   │   │   ├── ProjectPage.css
│   │   │   └── ProjectPage.js
│   │   └── index.js
│   ├── reportWebVitals.js
│   ├── theme
│   │   ├── images.js
│   │   └── theme.js
│   └── utils
│       ├── ScrollToTop.js
│       └── skillsImage.js
└── yarn.lock
```

# Hosting :globe_with_meridians:

## Netlify

|                Site                 |                                                     Docs                                                     |                          Demo                          |
| :---------------------------------: | :----------------------------------------------------------------------------------------------------------: | :----------------------------------------------------: |
| [Netlify](https://www.netlify.com/) | [3 ways to deploy React apps to Netlify](https://blog.logrocket.com/3-ways-to-deploy-react-apps-to-netlify/) | [Youtube](https://www.youtube.com/watch?v=sGBdp9r2GSg) |

## Firebase

|                         Site                         |                                                           Docs                                                           |                          Demo                          |
| :--------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------: |
| [Firebase](https://firebase.google.com/docs/hosting) | [Deploy a React App with Firebase](https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425) | [Youtube](https://www.youtube.com/watch?v=1wZw7RvXPRU) |

## Heroku

|               Site                |                                                                    Docs                                                                     |                          Demo                          |
| :-------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------: |
| [Heroku](https://www.heroku.com/) | [Deploying React App on Heroku from GitHub](https://medium.com/make-it-heady/deploying-create-react-app-on-heroku-from-github-49447561f670) | [Youtube](https://www.youtube.com/watch?v=dn4mmfbletg) |

## Github Pages

|                   Site                    |                                                     Docs                                                      |                  Demo                   |
| :---------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-------------------------------------: |
| [GitHub Pages](https://pages.github.com/) | [Deploying React App on GitHub Pages from GitHub](https://create-react-app.dev/docs/deployment/#github-pages) | [Youtube](https://youtu.be/F8s4Ng-re0E) |

<br />

# SEO :spider:

### Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.

# Packages Used :package:

|  Client Side Packages  |
| :--------------------: |
|   @material-ui/core    |
|   @material-ui/icons   |
|         axios          |
|   react-fast-marquee   |
|      react-helmet      |
|      react-icons       |
|      react-reveal      |
|    react-router-dom    |
| react-router-hash-link |
|      react-slick       |
|     slick-carousel     |
|       validator        |

<br />

# APIs Used :world_map:

- [SheetDB](https://sheetdb.io/)
