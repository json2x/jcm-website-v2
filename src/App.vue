<script setup>
// import GLightbox from 'glightbox';
// import 'waypoints/lib/noframework.waypoints'
// import Isotope from 'isotope-layout'
// import Swiper from 'swiper';
// import PureCounter from '@srexi/purecounterjs'

import AOS from 'aos'
import PureCounter from '@srexi/purecounterjs'
// import { Waypoint } from "vue-waypoint";
import 'waypoints/lib/noframework.waypoints.js'
import { Typed } from "@duskmoon/vue3-typed-js";
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'


import SocialLinks from './components/SocialLinks.vue';

const profileName = "Jayson Millan"
const rolesList = ref(["Web applications developer", "Business automation developer", "DevOps enthusiast"])
const options = {
  strings: rolesList.value,
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000
}

const links = ref([
  {id: '#hero', label: 'Home', icon: 'bx bx-home'},
  {id: '#about', label: 'About', icon: 'bx bx-user'},
  {id: '#resume', label: 'Resume', icon: 'bx bx-file-blank'},
  // {id: '#portfolio', label: 'Portfolio', icon: 'bx bx-book-content'},
  {id: '#services', label: 'Services', icon: 'bx bx-server'},
  {id: '#contact', label: 'Contact', icon: 'bx bx-envelope'},
])

const aboutInfo1 = [
  {label: 'Age', info: '35'},
  {label: 'Language', info: 'Filipino, English'},
  {label: 'Degree', info: 'BS Computer Engineering'},
  {label: 'University', info: 'Ateneo de Davao University'}
]
const aboutInfo2 = [
  {label: 'City', info: 'Davao City, Philippines'},
  {label: 'Website', info: 'https://jaysonmillan.com'},
  {label: 'Email', info: 'jcmitconsulting@gmail.com'},
  {label: 'Availability', info: 'Freelance, Side hustles'}
]

const funfacts = ref([
  {
    icon: "fa-solid fa-basketball",
    label: "Basketball fan"
  },
  {
    icon: "fa-solid fa-person-biking",
    label: "Bike ride"
  },
  {
    icon: "fa-solid fa-volleyball",
    label: "Volleyball player"
  },
  {
    icon: "fa-solid fa-computer",
    label: "Plays DOTA"
  },
  {
    icon: "fa-solid fa-mug-hot",
    label: "Loves coffee"
  },
  {
    icon: "fa-solid fa-paw",
    label: "Owns 2 dogs"
  },
  {
    icon: "fa-solid fa-people-roof",
    label: "Family man"
  },
  {
    icon: "fa-solid fa-dragon",
    label: "Year of the dragon"
  }
])

const skills = ref([
  {name: 'HTML', level: 100},
  {name: 'JavaScript', level: 95},
  {name: 'Python', level: 95},
  {name: 'FastAPI', level: 90},
  {name: 'Quasar', level: 90},
  {name: 'Django', level: 80},
  {name: 'Flask', level: 80},
  {name: 'VueJS', level: 90},
  {name: 'JQuery', level: 85},
  {name: 'Node JS', level: 80},
  {name: 'CSS', level: 80},
  {name: 'Express JS', level: 80},  
  {name: 'Git', level: 80},
  {name: 'Docker', level: 80},
  {name: 'MySQL', level: 80},
  {name: 'MariaDB', level: 80},
  {name: 'Oracle', level: 80},
  {name: 'MS SQL', level: 80},
  {name: 'MongoDB', level: 80},
  {name: 'Apache Web Server', level: 80},
  {name: 'MS Excel', level: 80},
  {name: 'Office VBA', level: 80},
  {name: 'MS Azure Services', level: 80},
  {name: 'Linux SysAd', level: 80},
  {name: 'Bash', level: 75},
  {name: 'ChatGPT & Other LLMs', level: 80},
  {name: 'Machine Learning', level: 70},
])

const sortedSkills = computed(() => {
  return [...skills.value].sort((a,b) => b.level - a.level)
})

const skills1stHalf = computed(() => {
  const items = []
  const halfLen = Math.ceil(sortedSkills.value.length / 2)

  for (let i = 0; i < halfLen; i++) {
    items.push(sortedSkills.value[i])
  }
  return items
})

const skills2ndHalf = computed(() => {
  const items = []
  const halfLen = Math.floor(sortedSkills.value.length / 2)
  const secondHalfStartIndex = halfLen + (sortedSkills.value.length % 2);

  for (let i = secondHalfStartIndex; i < sortedSkills.value.length; i++) {
    items.push(sortedSkills.value[i])
  }
  return items
})

const professionalExperiences = ref(
  [
    {
      id: 1,
      companyName: 'Smart Communications, Inc.',
      logo: "https://media.licdn.com/dms/image/D560BAQFYpHSi5LD2kw/company-logo_100_100/0/1685941974255?e=1694044800&v=beta&t=vYL6lu5b2lrg4ydvdDJNyCjIea0FWLJNasS7MvBWsoo",
      totalTenure: '10yrs 7 mos',
      roles: [
        {
          index: 0,
          name: 'NOC Engineer',
          dateRange: 'Jul 2011 - Jun 2016',
          tenure: '5 yrs',
          accomplishments: [
            'Developed dashboards which are used in monitoring various Project’s Progress and Issues',
            'Developed tools such as Network Activity Scheduler, Activity Score Card, Data logging systems, & etc',
            'Developed UNIX shell scripts that check network elements parameter configuration/definitions',
            'Audit BSS/NSS configuration changes (BTS, NodeB, BSC, RNC, MSS/MSC) on NOKIA-DX200, ERICSSON-APG43, HUAWEI-M2000 platforms',
            'Manage consolidation and scheduling of nationwide network activity requests',
            'Performs configuration and functionality testing of network elements'
          ]
        },
        {
          index: 1,
          name: 'Fault Analytics Supervisor',
          dateRange: 'Jun 2016 - Oct 2019',
          tenure: '3 yrs 5 mos',
          accomplishments: [
            'Developed various data visualization dashboards using Tableau',
            'Developed Site Database System (with Google Map Integration)',
            'Developed Reports Repository Portal',
            'Developed various Excel templates with macro applications',
            'Manage Fault Management Trouble tickets',
            'Analyze and Trend Network KPIs',
            'Root-Cause-Analysis of recurring and common network faults and outages',
            'Cascade and discuss KPI and RCA findings with regional groups'
          ]
        },
        {
          index: 2,
          name: 'OSS Virtualization and Infra Specialist',
          dateRange: 'Oct 2019 - Dec 2020',
          tenure: '1 yr 3 mos',
          accomplishments: [
            'Developed Network Inventory Data Validation and Correction Scripts',
            'Manage Network Orchestration for VNFs and SDNs'
          ]
        },
        {
          index: 3,
          name: 'DevOps Supervisor',
          dateRange: 'Jan 2021 - Jan 2022',
          tenure: '1 yr 1 mo',
          accomplishments: [
            'Design, Develop and Manage network automation tools',
            'Developed Network Activity Logger application',
            'Developed Network Asset Inventory Database application',
            'Developed various Report Automations'
          ]
        },
      ]
    },
    {
      id: 1,
      companyName: 'inriver',
      logo: "https://media.licdn.com/dms/image/C4E0BAQG7pZy36AS-yA/company-logo_100_100/0/1624427866782?e=1694649600&v=beta&t=pf6megst9Sf0RlWPMSnDIk_NfafQSVNKZP0Ijxwga9A",
      totalTenure: 'Jan 2022 - Preset',
      roles: [
        {
          index: 0,
          name: 'R&D Technical Analyst',
          dateRange: 'Jan 2022 - Present',
          tenure: 'Present',
          accomplishments: [
            'Developed entity history application',
            'Developed Image validation service API using OpenCV',
            'Developed inriver instance model displayer',
            'Developed Profanity filter service API',
            'Developed new CVL editor for inriver CVL data',
            'Developed template builder for Amazon A+ Content',
            'Developed application that integrates ChatGPT to inriver PIM',
            'Developed POC integrations for various third-party systems to inriver',
            'Deployed apps/services to Azure functions and web apps using code deployment and, containerize apps',
            'Deployed private azure container repository'
          ]
        },
      ]
    }
  ]
)

const professionalExperiencesWithSortedRoles = computed(() => {
  return professionalExperiences.value.map((work) => {
    work.roles.sort((a, b) => b.index - a.index)
    return work
  })
})

const services = ref([
  {
    id: 0,
    icon: 'bx bxs-business',
    colorClass: 'icon-box iconbox-blue',
    name: "Business Automation",
    description: "Streamlining operations and workflows by leveraging technology to automate repetitive tasks, optimize efficiency, and enhance productivity"
  },
  {
    id: 1,
    icon: 'bx bxl-dev-to',
    colorClass: 'icon-box iconbox-red',
    name: "Web App Development",
    description: "Creating dynamic and interactive web applications using programming languages, frameworks, and technologies to deliver user-friendly and engaging online experiences"
  },
  {
    id: 2,
    icon: 'bx bx-analyse',
    colorClass: 'icon-box iconbox-yellow',
    name: "Data Analytics",
    description: "Extracting valuable insights from large datasets through advanced statistical analysis, data modeling, and visualization techniques, enabling informed decision-making and driving business growth"
  },
])

const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

const navbarlinks = ref(null)
const navbarlinksActive = () => {
  let position = window.scrollY + 200
  navbarlinks.value.forEach((navbarlink) => {
    if (!navbarlink.hash) return
    let section = select(navbarlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
      navbarlink.classList.add('active')
    } else {
      navbarlink.classList.remove('active')
    }
  })
}

onMounted(() => {
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)


  /**
   * Animation on scroll
   */
   window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function() {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  new PureCounter();
})

onBeforeUnmount(() => {

})
</script>

<template>
  <!-- ======= Mobile nav toggle button ======= -->
  <!-- <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> -->
  <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>
  <!-- ======= Header ======= -->
  <header id="header" class="d-flex flex-column justify-content-center">
    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a v-if="index === 0" ref="navbarlinks" :href="link.id" class="nav-link scrollto active"
            ><i :class="link.icon"></i> <span>{{ link.label }}</span></a
          >
          <a v-else ref="navbarlinks" :href="link.id" class="nav-link scrollto"
            ><i :class="link.icon"></i> <span>{{ link.label }}</span></a
          >
        </li>
      </ul>
    </nav>
    <!-- .nav-menu -->
  </header>
  <!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>{{ profileName }}</h1>
      <p>
        I'm a
        <Typed :options="options" style="display: inline-block; ">
          <span class="typing"></span>
        </Typed>
      </p>
      <SocialLinks />
    </div>
  </section>
  <!-- End Hero -->

  <main id="main">
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
          <p>
            Leverage my proficiencies in various tech stacks to contribute to a dynamic organization where I can apply my skills and expertise to develop innovative solutions and drive business success.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="./assets/img/me-profile-img.jpeg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Web Applications &amp; Business Automations Developer.</h3>
            <p class="fst-italic">
              Unlocking Efficiency, Empowering Growth: Your Partner in Web Apps & Business Automations for Streamlined Success.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li v-for="(about, index) in aboutInfo1" :key="index">
                    <i class="bi bi-chevron-right"></i> <strong>{{ about.label }}:</strong>
                    <span>{{ about.info }}</span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li v-for="(about, index) in aboutInfo2" :key="index">
                    <i class="bi bi-chevron-right"></i> <strong>{{ about.label }}:</strong>
                    <span>{{ about.info }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Efficiency unlocked. Growth empowered. I specialize in Web Applications & Business Automations, leveraging cutting-edge technologies to streamline operations. From customized web apps to seamless integrations, I can automate workflows, optimize processes, and deliver success-driven solutions for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->

    <!-- ======= Facts Section ======= -->
    <section id="facts" class="facts">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Fun Facts</h2>
          <p>
            Here are some entertaining facts about me that might pique your interest and showcase my diverse capabilities, knowledge, and personality.
          </p>
        </div>

        <div class="row">
          <div v-for="(fact, index) in funfacts" :key="index" class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box">
              <i :class="fact.icon"></i>
              <p>{{ fact.label }}</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <!-- End Facts Section -->

    <!-- ======= Skills Section ======= -->
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Skills</h2>
          <p>
            I possess a broad range of proficiencies in programming languages and software development tools. With expertise in diverse frameworks and databases, I have demonstrated adaptability and competence in various programming environments. My experience showcases a versatile skill set capable of delivering quality results in different software development applications.
          </p>
        </div>

        <div class="row skills-content">
          <div class="col-lg-6">
            <div v-for="(skill, index) in skills1stHalf" :key="index" class="progress">
              <span class="skill">{{ skill.name }} <i class="val">{{ skill.level }}%</i></span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :aria-valuenow="skill.level"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div v-for="(skill, index) in skills2ndHalf" :key="index" class="progress">
              <span class="skill">{{ skill.name }} <i class="val">{{ skill.level }}%</i></span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :aria-valuenow="skill.level"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Skills Section -->

    <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Resume</h2>
          <p>
            Throughout my career, I have gained valuable professional experience in business automations, data analytics, and web application development. These experiences have honed my skills and expertise in these areas, enabling me to deliver efficient solutions and drive technological advancements. Below are the highlights of my journey. 
          </p>
        </div>

        <div class="row">
          <div v-for="work in professionalExperiencesWithSortedRoles" :key="work.id" class="col-lg-6">
            <!-- <h3 class="resume-title">Professional Experience</h3> -->
            <div class="row mb-3">
              <div class="col-auto">
                <img :src="work.logo" alt="logo">
              </div>
              <div class="col">
                <h3 class="resume-title mb-1">
                  {{ work.companyName }}
                </h3>
                <p class="company-tenure">{{ work.totalTenure }}</p>
              </div>
            </div>

            <div v-for="role in work.roles" :key="role.index"  class="resume-item">
              <h4>{{ role.name }}</h4>
              <h5>{{ role.dateRange }}</h5>
              <p><em>{{ role.tenure }} </em></p>
              <ul>
                <li v-for="(accomp, ix) in role.accomplishments" :key="ix">
                  {{ accomp }}
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
    <!-- End Resume Section -->

    <!-- ======= Portfolio Section ======= -->
    <!-- <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
            quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
            impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row">
          <div
            class="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="./assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a
                    href="./assets/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="App 1"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    class="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="./assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a
                    href="./assets/img/portfolio/portfolio-2.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="Web 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    class="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="./assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a
                    href="./assets/img/portfolio/portfolio-3.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="App 2"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    class="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="./assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a
                    href="./assets/img/portfolio/portfolio-4.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="Card 2"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    class="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="./assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a
                    href="./assets/img/portfolio/portfolio-5.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="Web 2"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    class="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="./assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a
                    href="./assets/img/portfolio/portfolio-6.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="App 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    class="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="./assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a
                    href="./assets/img/portfolio/portfolio-7.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="Card 1"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    class="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="./assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a
                    href="./assets/img/portfolio/portfolio-8.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="Card 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    class="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="./assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a
                    href="./assets/img/portfolio/portfolio-9.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="Web 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    class="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- End Portfolio Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Services</h2>
          <p>
            Whether you need assistance with business automation, web application development, data analytics, or scripting, I can provide tailored solutions to meet your unique needs. With a focus on your goals, I'll leverage on advanced technologies to optimize processes, drive growth, and boost efficiency. Let me help you unlock the full potential of your business with my expertise and dedication. Together, we'll achieve your objectives and propel your success forward.
          </p>
        </div>

        <div class="row">
          <div
            v-for="service in services"
            :key="service.id"
            class="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div :class="service.colorClass">
              <div class="icon">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    stroke-width="0"
                    fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  ></path>
                </svg>
                <i :class="service.icon"></i>
              </div>
              <h4><a href="">{{ service.name }}</a></h4>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Section -->

    <!-- ======= Testimonials Section ======= -->
    <!-- <section id="testimonials" class="testimonials section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Testimonials</h2>
        </div>

        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper"> -->
            <!-- <div class="swiper-slide">
              <div class="testimonial-item">
                <img
                  src="./assets/img/testimonials/testimonials-1.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
                  rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen
                  aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div> -->
            <!-- End testimonial item -->

            <!-- <div class="swiper-slide">
              <div class="testimonial-item">
                <img
                  src="./assets/img/testimonials/testimonials-2.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid
                  cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure
                  amet legam anim culpa.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div> -->
            <!-- End testimonial item -->

            <!-- <div class="swiper-slide">
              <div class="testimonial-item">
                <img
                  src="./assets/img/testimonials/testimonials-3.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem
                  veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis
                  sint minim.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div> -->
            <!-- End testimonial item -->

            <!-- <div class="swiper-slide">
              <div class="testimonial-item">
                <img
                  src="./assets/img/testimonials/testimonials-4.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim
                  fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore
                  quem dolore labore illum veniam.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div> -->
            <!-- End testimonial item -->

            <!-- <div class="swiper-slide">
              <div class="testimonial-item">
                <img
                  src="./assets/img/testimonials/testimonials-5.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor
                  noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam
                  esse veniam culpa fore nisi cillum quid.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div> -->
            <!-- End testimonial item -->
          <!-- </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section> -->
    <!-- End Testimonials Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div class="row mt-1">
          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Davao City, Philippines, 8000</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>jcmitconsulting@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-skype"></i>
                <h4>Message:</h4>
                <p>live:jaysonmillan</p>
              </div>
            </div>
          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Section -->
  </main>
  <!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container">
      <h3>{{ profileName }}</h3>
      <p>
        Heroes are made by the paths they choose, not the powers they are graced with.
      </p>
      <SocialLinks />
      <div class="copyright">
        &copy; Copyright <strong><span>MyResume</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: [license-url] -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->

  <!-- <div id="preloader"></div> -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
</template>

<style scoped>
.company-tenure{
  font-size: 14px;
  background: #f7f8f9;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 0px;
}
</style>
