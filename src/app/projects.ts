import contextMWM from "@/assets/masterweb/context.png";
import DNAMWM from "@/assets/masterweb/AND.png";
import CMWM from "@/assets/masterweb/C.png";
import SR from "@/assets/masterweb/SR.png";
import DS from "@/assets/masterweb/DS.png";
import SE from "@/assets/masterweb/SE.png";
import L from "@/assets/masterweb/landing.png";
import WP from "@/assets/masterweb/WP.png";
import cover from "@/assets/masterweb/MasterCover.png";
import BNA from "@/assets/masterweb/BNA.png";

import Pcover from "@/assets/prodigy/cover.png";
import Pdefining from "@/assets/prodigy/defining.png";
import Pconcept from "@/assets/prodigy/concepting.png";
import Pcontext from "@/assets/prodigy/context.png";
import PFB from "@/assets/prodigy/FB.png";
import PDS from "@/assets/prodigy/ds.png";
import PHome from "@/assets/prodigy/home.png";
import PDev from "@/assets/prodigy/dev.png";
import PUI from "@/assets/prodigy/uiux.png";
import PABOUT from "@/assets/prodigy/aboutus.png";
import PBNA from "@/assets/prodigy/BNA.png";

import Ncover from "@/assets/nlc/cover.png";
import Ncontext from "@/assets/nlc/context.png";
import NTalk from "@/assets/nlc/talk.png";
import NAwards from "@/assets/nlc/awards.png";
import awardsBG from "@/assets/nlc/awardsbg.png";
import NDesign from "@/assets/nlc/design.png";
import NSocial from "@/assets/nlc/social.png";
import NRevise from "@/assets/nlc/revise.png";
import NPrint from "@/assets/nlc/print.png";
import NUI from "@/assets/nlc/ui.png";

export const projects = [
  {
    cover: cover,
    slug: "masterweb",
    color: "#095055",
    name: "MasterWeb",
    description: `
        I redesigned the Masterweb website to increase traffic, modernize the user experience, and create a stronger brand identity. I worked closely with the Masterweb team to understand their goals and conducted user research to improve the overall user experience.
        
        I focused on creating a personalized experience for users, optimized the navigation, and implemented a contemporary visual design that would appeal to users while also incorporating elements of the brand's existing style. Overall, the redesign was a success and has helped to establish a stronger brand identity for Masterweb.`,
    roles: [
      "UI/UX Design",
      "Product Management",
      "User Research",
      "Wireframing",
      "Design Systems",
      "Design QA",
    ],
    team: ["Frontend Developer", "CTO", "CEO"],
    completed: "2023",
    sections: [
      {
        type: "context",
        context: `MasterWeb Solutions is a technology services company that specializes in providing expert development services for businesses. They offer a range of services, including Design, WordPress, Security, and CMS/LSS, and believe that businesses need an experienced partner to take advantage of all that technology has to offer. Their team of talented and experienced engineers are highly trained in the latest technologies and industry methods, and they operate with transparency and trust as their core values. They build lasting partnerships with their clients and help them take the next step in their digital journey.`,
        image: contextMWM,
      },
      {
        type: "problem",
        title: "The Problem",
        description: `
                The problem with the MasterWeb Solutions website was that it had an outdated look and feel, and the user experience was not optimized for modern browsing habits. This led to a high bounce rate, meaning users were leaving the site shortly after arriving. Additionally, the website's navigation was cluttered and not intuitive, making it difficult for users to find the information they needed. As a result, MasterWeb Solutions was not effectively communicating their expertise and value to potential clients, and the website was not driving the traffic and engagement it needed to succeed in today's digital landscape.`,
      },
      {
        type: "definition",
        title: "Defining the Process",
        description: `To redesign the MasterWeb Solutions website, I worked closely with the CTO, CEO, and development team to define a streamlined process for the project. We broke the project down into four key phases, Within each phase, we had important steps to ensure we stayed on track and met key milestones and deliverable dates.

        Given the tight timeline to MVP, I used an agile, sprint-based process to iterate on and validate potential solutions early and often. The Concepting phase involved a series of week-long sprints to work through different features and ideas. This approach allowed us to quickly refine our designs and make necessary adjustments, ensuring we delivered a high-quality product that met the client's expectations.`,
        steps: [
          {
            title: "Discovery",
            substeps: [
              "Client meetings",
              "Workflow Evaluations",
              "Whiteboarding",
              "Data Gathering",
            ],
          },
          {
            title: "Analysis",
            substeps: [
              "Data Synthesis",
              "Defining Goals",
              "Prioritization Scope",
              "Business Flow",
            ],
          },
          {
            title: "Concepting",
            substeps: [
              "Wireframing",
              "Atomic Design Dev",
              "Client Feedback",
              "High Fidelity Iteration",
            ],
          },
          {
            title: "Outcome",
            substeps: [
              "Final High Fidelity Designs",
              "Dev & Usability Feedback",
              "Style Guidelines",
              "Post Recommendations",
            ],
          },
        ],
      },
      {
        type: "image",
        title: "Discovery and Analysis",
        content: `
        During the discovery phase, I met with the MasterWeb team to understand their goals and objectives. We conducted workflow evaluations and used whiteboarding sessions to identify key areas for improvement. We also gathered data by analyzing website analytics and conducting user research.
        
        In the analysis phase, I synthesized the data we collected to gain a better understanding of the website's current state. We defined clear goals for the project and prioritized the scope of work. Finally, we mapped out the business flow to ensure the website would meet the needs of both the client and their users.`,
        image: DNAMWM,
        position: "bottom",
        withDivision: false,
      },
      {
        type: "image",
        title: "Concepting",
        content: `
        During the concepting phase, I created wireframes to establish the basic layout and structure of the website. We used atomic design principles to develop the website's components and ensure consistency throughout the site.
        
        We gathered client feedback at regular intervals to ensure that the design was aligning with their vision. Finally, I worked on high-fidelity iterations to add the finishing touches and bring the design to life.`,
        image: CMWM,
        position: "bottom",
        withDivision: true,
      },
      {
        type: "image",
        title: "Sprint Retros",
        content: `
        After each week-long sprint, I held retro meetings with MastwerWeb stakeholders to reflect on achievements from the previous sprint and identify areas for improvement. We jotted down points on cards in Figma, then collaboratively categorized and discussed our thoughts.
        
        Retros were especially important because I was working remotely with MastwerWeb teams in Colombia, and I wanted to make sure everyone had the opportunity to share their perspective.`,
        image: SR,
        position: "top",
        inline: true,
        withDivision: false,
      },
      {
        type: "image",
        title: "Design Solution",
        content: `
        The redesigned MasterWeb website addressed the problems we identified during the discovery and analysis phases. By implementing a more modern and user-friendly design, we were able to increase traffic to the site. The new layout made it easier for users to navigate the site and find the information they needed.
        
        The new design reflects the brand's personality and values, creating a more engaging experience for users.
        
        By working closely with the MasterWeb team and using a collaborative approach, we were able to successfully achieve their goals and deliver a website that meets the needs of both the client and their users..`,
        image: DS,
        position: "top",
        withDivision: true,
      },

      {
        type: "image",
        title: "Services Template",
        content: `
        As the first step in the design process, I created a template for the services provided by MasterWeb. The template established a consistent visual style and structure for the site's services pages. This approach ensured that each service was presented in a clear and concise manner, making it easy for users to understand the offerings and how they fit into the overall picture.`,
        image: SE,
        position: "top",
        withDivision: true,
        secondTitle: `Visual Flow and Personality`,
        inline: true,
        secondContent: `
        The “cogs” are placed thinking about the functionality and brand consistency, design where created so that information is accessibly and visually appealing.`,
      },
      {
        type: "image",
        title: "Landing",
        content: `
        For the landing page, I created a visually compelling design that effectively communicated MasterWeb's value proposition to users. The landing page featured a clear call-to-action, enticing graphics, and concise copy to encourage users to explore the site further. The design was optimized for conversion, ensuring that users were more likely to take action and engage with the brand. Overall, the landing page design was an effective tool for driving traffic and generating leads for MasterWeb.`,
        image: L,
        position: "top",
        withDivision: true,
        inline: true,
        secondTitle: `Flip Cards`,
        secondContent: `
        Flip cards were used on the MasterWeb site to create an interactive way for users to engage with the content and improve overall engagement with the site.`,
      },
      {
        type: "image",
        title: "Wordpress",
        content: `
        For the WordPress services page, I created a design solution that effectively communicated a lot of information in a clear and concise manner. The page featured a modular design, with each module focusing on a specific aspect of the WordPress services offered by MasterWeb. The use of icons, illustrations, and concise copy made it easy for users to understand the benefits of each service, while the modular design ensured that the information was presented in a visually appealing and organized way. Overall, the WordPress services page design was an effective solution for communicating a lot of information in a user-friendly way.`,
        image: WP,
        inline: true,
        position: "top",
        withDivision: true,
        secondTitle: `Efficient Design`,
        secondContent: `
        I wanted to make sure we used depth, motion, and animation, to provide and efficient and intuitive way for users to navigate.`,
      },
      {
        type: "image",
        title: "Before and After",

        content: `
        The redesign of MasterWeb Solutions' website resulted in a significant increase in website traffic and user engagement. By updating the design to be more modern and user-friendly, we were able to provide a better user experience overall. Our focus on creating clear and concise messaging helped communicate the brand's core values and services more effectively. Through our collaborative efforts with the MasterWeb team, we were able to create a more visually appealing website that reflects the brand's personality and expertise. The before and after comparison shows the success of the project in achieving its goals and improving the overall effectiveness of the website.`,
        image: BNA,
        position: "bottom",
      },
      {
        type: "success",
        title: "Success and Evolution",
        content: `
        The redesigns for MasterWeb's website were successful in achieving their goals of increasing traffic, modernizing the site, and providing a more engaging user experience. The updated design showcased MasterWeb's services and expertise in a more clear and visually appealing way, resulting in a significant increase in traffic and engagement on the site.
        
        The redesigned WordPress services page provided a more comprehensive overview of their services and made it easier for users to find the information they needed. The responsive design ensured that the site was accessible and user-friendly on any device, further improving the user experience.
        
        By using a lean UX approach and collaborating closely with the development team, we were able to deliver the redesigns within a tight timeline, while still meeting the client's goals and expectations. Overall, the successful redesigns resulted in a more modern, engaging, and effective online presence for MasterWeb Solutions.`,
      },
    ],
  },
  {
    cover: Pcover,
    slug: "prodigy",
    color: "#1387F2",
    name: "Prodigy Tech",
    description: `
    I had the pleasure of designing the new responsive website for Prodigy Tech, a software development services company. Working closely with the CEO, CTO, and development team, I created an immersive digital experience that showcased Prodigy Tech's expertise.By crafting an intuitive user interface (UI) and optimizing it for various devices, I ensured a seamless and engaging journey for visitors. It was a collaborative effort, resulting in a visually stunning website that reflects Prodigy Tech's brand and values.`,
    roles: [
      "UI/UX Design",
      "Product Management",
      "User Research",
      "Wireframing",
      "Design Systems",
      "Design QA",
    ],
    team: ["Developer Team", "CTO", "CEO"],
    completed: "2023",
    sections: [
      {
        type: "context",
        context: `
        Prodigy Tech is a dynamic company specializing in providing cutting-edge software development services. With a team of talented professionals, they deliver innovative solutions tailored to meet the unique needs of their clients. Prodigy Tech combines technical expertise with a passion for creating exceptional digital experiences. Their commitment to excellence and customer satisfaction has made them a trusted partner for businesses seeking reliable software solutions`,
        image: Pcontext,
      },
      {
        type: "problem",
        title: "The Goal",
        description: `
        The goal of the project was to design a responsive website for Prodigy Tech that showcased their software development services and expertise. By creating an intuitive user interface (UI) and optimizing it for various devices, our aim was to provide visitors with a seamless and engaging digital experience. We wanted to highlight Prodigy Tech's brand identity, instill trust and credibility, and ensure the website reflected their commitment to excellence. Through close collaboration with the client and development team, our goal was to create a visually stunning website that effectively communicated Prodigy Tech's capabilities and established them as a leader in the industry.`,
      },
      {
        type: "definition",
        title: "The Process",
        description: `We embarked on a collaborative journey, defining Prodigy Tech's brand and establishing a cohesive design system. Through concepting, we iterated on low-fi wireframes using Figma, incorporating feedback to ensure a user-centric approach.

        The outcome? Captivating high-fidelity mockups and interactive prototypes, refined through continuous feedback and iterations. Our process resulted in a visually stunning website that showcases Prodigy Tech's expertise and delivers an intuitive digital experience.`,
        steps: [
          {
            title: "Discovery",
            substeps: [
              "Client meetings",
              "Workflow Evaluations",
              "Whiteboarding",
              "Data Gathering",
            ],
          },
          {
            title: "Analysis",
            substeps: [
              "Data Synthesis",
              "Defining Goals",
              "Prioritization Scope",
              "Business Flow",
            ],
          },
          {
            title: "Concepting",
            substeps: [
              "Wireframing",
              "Atomic Design Dev",
              "Client Feedback",
              "High Fidelity Iteration",
            ],
          },
          {
            title: "Outcome",
            substeps: [
              "Final High Fidelity Designs",
              "Dev & Usability Feedback",
              "Style Guidelines",
              "Post Recommendations",
            ],
          },
        ],
      },
      {
        type: "image",
        title: "Defining",
        content: `
        We kicked off the design process by thoroughly understanding Prodigy Tech's brand identity and establishing a clear design system to follow. This involved in-depth discussions with the client to gather insights and align our vision with their goals and values.`,
        image: Pdefining,
        position: "bottom",
        withDivision: false,
      },
      {
        type: "image",
        title: "Concepting",
        content: `
        Armed with a solid foundation, we dived into the concepting phase. Using Figma, we crafted low-fidelity wireframes that laid out the website's structure and functionality. Iterating on these wireframes, we sought feedback from stakeholders and incorporated their valuable input to ensure a user-centric approach.`,
        image: Pconcept,
        position: "bottom",
        withDivision: true,
      },
      {
        type: "image",
        title: "Feedback",
        content: `
        With Figma's collaborative features, we seamlessly handled feedback throughout Prodigy Tech's website design. Clients provided real-time comments and annotations directly on the designs, enabling efficient communication and iterative improvements.
        
        This collaborative approach ensured a website that met the clients' vision and fostered a sense of ownership throughout the process.`,
        image: PFB,
        position: "top",
        inline: true,
        withDivision: false,
      },
      {
        type: "image",
        title: "Design Solution",
        content: `
        Building upon the refined wireframes, we transitioned into creating high-fidelity mockups and interactive prototypes. These visual representations brought the design to life, allowing us to visualize the final product.
        
        Through continuous feedback and iterations, we fine-tuned the details, ensuring the website embodied Prodigy Tech's brand while delivering an intuitive and visually captivating user experience.`,
        image: PDS,
        position: "top",
        withDivision: true,
      },

      {
        type: "image",
        title: "Home Page",
        content: `
        Our goal was clear: design a home page that converts. By strategically placing call-to-action buttons, captivating visuals, and optimizing loading speed, we crafted a persuasive and seamless user experience. Through data-driven refinements and careful analysis, we unlocked the potential for maximum results. Prodigy Tech's conversion-centered home page drives action, instills trust, and delivers measurable success.`,
        image: PHome,
        position: "top",
        withDivision: true,
        inline: true,
      },
      {
        type: "image",
        title: "Software Dev",
        content: `
        Our software development service page captivates and informs, showcasing Prodigy Tech's Process. With concise content, captivating visuals, and intuitive navigation, we highlight their software development services. Prodigy Tech's page delivers an immersive experience that convinces and converts.`,
        image: PDev,
        position: "top",
        withDivision: true,
        inline: true,
        secondTitle: `Flip Cards`,
        secondContent: `
        Flip cards were used on the MasterWeb site to create an interactive way for users to engage with the content and improve overall engagement with the site.`,
      },
      {
        type: "image",
        title: "UI/UX",
        content: `
        Our UX/UI service page is a testament to our passion for crafting remarkable digital experiences. Through captivating visuals and intuitive navigation, we showcase the transformative power of user-centric design.  With compelling case studies and client testimonials, we inspire businesses to create unforgettable interfaces. Prodigy Tech's page sparks imagination and empowers businesses to elevate their digital presence.`,
        image: PUI,
        inline: true,
        position: "top",
        withDivision: true,
        secondTitle: `Efficient Design`,
        secondContent: `
        I wanted to make sure we used depth, motion, and animation, to provide and efficient and intuitive way for users to navigate.`,
      },
      {
        type: "image",
        title: "About Us",
        content: `
        Our About Us page reveals the essence of Prodigy Tech through a captivating narrative. With concise yet engaging content, we share our passion for innovation and commitment to excellence. Dynamic visuals and team photos add authenticity, while industry recognition builds credibility. Aligned values and a customer-centric approach create a strong emotional connection.`,
        image: PABOUT,
        inline: true,
        position: "top",
        withDivision: true,
        secondTitle: `Efficient Design`,
        secondContent: `
        I wanted to make sure we used depth, motion, and animation, to provide and efficient and intuitive way for users to navigate.`,
      },
      {
        type: "image",
        title: "",

        content: ``,
        image: PBNA,
        position: "bottom",
      },
      {
        type: "success",
        title: "Success and Evolution",
        content: `
        Prodigy Tech's website design has been a remarkable tale of triumph and evolution. From inception to the present, we've witnessed their online presence flourish.
        Crafting a visually stunning website, we ensured seamless experiences across devices, maximizing engagement and conversions. Embracing feedback, we refined the user interface, adapting to changing needs.
        The website's success lies in effectively showcasing Prodigy Tech's expertise, Custom Pricing, and Services. It reflects their growth and our commitment to exceptional design and software dev solutions.`,
      },
    ],
  },

  {
    cover: Ncover,
    slug: "nlc",
    color: "#1387F2",
    name: "NLC Designer",
    description: `
    At NLC, I had the privilege of serving as a Graphic Designer and UI Specialist. My role encompassed a wide range of responsibilities, from conceptualizing and designing visually captivating graphics to crafting intuitive user interfaces. I collaborated closely with the creative team and clients to understand their requirements, translate their visions into impactful designs, and deliver exceptional results.
    
    Whether it was creating engaging marketing materials, designing eye-catching branding assets, or crafting seamless user experiences, I embraced the challenge of bringing ideas to life through my expertise in graphic design and UI. With a meticulous eye for detail and a passion for aesthetics, I consistently aimed to exceed expectations and contribute to NLC's creative excellence.`,
    roles: ["UI/UX Design", "Product Management"],
    team: ["Frontend Developer", "CTO"],
    completed: "On-Going",
    sections: [
      {
        type: "context",
        context: `
        As a UI and Graphic Designer at NLC, I've had the opportunity to work with a wide range of clients from all over the world. My experience in both areas has given me a unique perspective on how to create visually stunning designs that are both user-friendly and effective. Working closely with a team has been critical in thriving in a fast-paced environment, as it allows us to bounce ideas off each other and ensure that every design we create is of the highest quality. Whether it's UI/UX design or Social Media Ads, I'm committed to delivering clear, impactful solutions that exceed our clients' expectations.`,
        image: Ncontext,
      },
      {
        type: "definition",
        title: "Workflow",
        bg: awardsBG,
        description: `
        At NLC, our well-defined workflow enabled me to efficiently manage 2-3 design requests daily. Clear communication and collaboration ensured a thorough understanding of project requirements.
        
        I worked diligently, conducting quality assurance checks and seeking feedback. Revisions were addressed promptly, resulting in impeccable final designs. This streamlined process maximized productivity, precision, and client satisfaction.`,
        steps: [
          {
            title: "Talk",
            substeps: ["Receive Task", "Design Brief", "Collaborate"],
          },
          {
            title: "Design",
            substeps: ["Work on Task", "QA Revise", "Upload Files"],
          },
          {
            title: "Revise",
            substeps: ["Work on Revisions", "QA Revise", "Final Designs"],
          },
        ],
      },
      {
        type: "image",
        title: "The Talk",
        content: `

        The Talk phase at NLC was a vital starting point for successful project execution. During this phase, I engaged in open and transparent communication with clients and the creative team. By actively listening and asking pertinent questions, I gained a comprehensive understanding of the task at hand and the client's vision.
        
        Collaborating closely, we exchanged ideas, shared insights, and aligned expectations. This collaborative approach fostered a strong foundation for the design process, ensuring that every project started with a clear direction and a shared understanding of goals.`,
        image: NTalk,
        position: "bottom",
        withDivision: false,
      },
      {
        type: "image",
        title: "Design",
        content: `
        The Design phase at NLC was the heart of bringing ideas to life. Armed with a deep understanding of project requirements, I harnessed my creative skills and expertise to craft captivating designs. With meticulous attention to detail, I transformed concepts into visually stunning assets that aligned with the client's vision and brand identity.
        
        Quality assurance and revision processes ensured that the designs met the highest standards of excellence. This phase showcased my passion for design and allowed me to showcase my creative ingenuity in delivering impactful solutions that surpassed client expectations.`,
        image: NDesign,
        position: "bottom",
        withDivision: false,
      },
      {
        type: "image",
        title: "Revise",
        content: `
        The Revise phase at NLC marked the fine-tuning stage of the design process. Building upon client feedback and collaboration, I diligently worked on revisions, addressing requested changes with precision and creativity. Quality assurance checks were conducted to ensure that the revised designs met the highest standards of quality and effectively conveyed the desired message.
        
        This phase emphasized my commitment to delivering exceptional results by refining designs to perfection. Through iterative revisions and a keen eye for detail, I ensured that the final designs were flawless, exceeding client expectations and creating impactful visual experiences.`,
        image: NRevise,
        position: "bottom",
        // inline: true,
        withDivision: false,
      },

      {
        type: "image",
        title: "Social Media / Ads",
        content: `

        At NLC, I excelled in crafting compelling social media and advertising designs. From eye-catching graphics to engaging display ads, I captured the essence of brands and communicated their messages effectively. With a keen eye for detail and a deep understanding of marketing strategies, I consistently delivered visually striking designs that drove engagement and brand awareness. Each design had a strong visual presence, aligning with clients' objectives and leaving a lasting impact.`,
        image: NSocial,
        position: "bottom",
        withDivision: true,
        inline: true,
      },
      {
        type: "image",
        title: "UX/UI",
        content: `
        At NLC, I excelled in crafting compelling social media and advertising designs. From eye-catching graphics to engaging display ads, I captured the essence of brands and communicated their messages effectively. With a keen eye for detail and a deep understanding of marketing strategies, I consistently delivered visually striking designs that drove engagement and brand awareness. Each design had a strong visual presence, aligning with clients' objectives and leaving a lasting impact.`,
        image: NUI,
        position: "bottom",
        withDivision: true,
        inline: true,
      },
      {
        type: "image",
        title: "Print/Label",
        content: `
        At NLC, I specialized in creating print and label designs that left a lasting impression. From brochures and flyers to product labels, I crafted visually striking designs that captivated audiences. Through meticulous attention to detail and thoughtful use of typography and color, I ensured each design effectively communicated the brand's message. With a passion for print design, I consistently delivered memorable designs that impressed clients and stood out in the market.`,
        image: NPrint,
        inline: true,
        position: "bottom",
        withDivision: true,
      },

      {
        type: "image",
        title: "Awards",
        content: `
        Within a short two-month span at NLC, I earned the distinction of being the Highest Performance Designer not just once, but twice in a row. Through exceptional dedication and a commitment to excellence, I consistently delivered outstanding results that surpassed expectations.
        
        By effectively managing my time, collaborating with the team, and embracing innovative approaches, I continuously pushed the boundaries of my capabilities. This achievement reflects my unwavering drive and ability to consistently perform at the highest level, making a remarkable impact in a short amount of time.`,
        image: NAwards,
        inline: true,
        position: "bottom",
        bg: awardsBG,
        withDivision: true,
      },
    ],
  },
];
