import blog1 from '../../../public/image/blog4.jpeg';
import blog2 from '../../../public/image/blog2.jpeg';
import blog3 from '../../../public/image/blog3.jpeg';
import blog4 from '../../../public/image/blog1.jpeg';
import { blogts } from './types';

export const blogdetails: blogts[] = [
    {
      "id": 1,
      "blogimg": blog1,
      "blogtitle": "Crafting My Portfolio",
      "innerpara": "How I crafted my personal portfolio from scratch, using Next.js and Tailwind CSS.",
      "innerlang": ["React", "Frontend", "Personal Project"],
      "para": `In this blog post, I take you through the journey of building my personal portfolio website. I started by selecting Next.js as the framework for its versatility and server-side rendering capabilities. Tailwind CSS was chosen for its flexibility and ease of customization. I also integrated TypeScript to ensure a robust, type-safe environment. The most rewarding part of this project was seeing everything come together, from the design to the performance optimization techniques I employed. The site is now live and serves as a showcase of my skills, experience, and the projects I've worked on.
      
      From selecting the right fonts to implementing responsive layouts and ensuring accessibility, every detail was carefully considered to create a smooth user experience. I also implemented continuous integration and deployed the site to Vercel for seamless updates.
      
      This portfolio is a testament to my growth as a developer, and it continues to evolve as I learn new technologies and refine my skills.`
    },
    {
      "id": 2,
      "blogimg": blog2,
      "blogtitle": "Real-Time Chat with Laravel Echo",
      "innerpara": "Real-time applications are crucial in today’s web development landscape. Here’s how I implemented Laravel Echo for my real-time chat feature.",
      "innerlang": ["Laravel", "Backend", "Real-Time"],
      "para": `In this blog post, I dive into how I implemented real-time communication in my personal portfolio by using Laravel Echo and Pusher. Real-time applications provide a dynamic experience for users, and I wanted to bring this to my chat system. Laravel Echo, combined with Pusher, allowed me to broadcast events in real-time and update the UI instantaneously without refreshing the page.
      
      I explain the steps I took to integrate Echo into the project, starting with setting up the Laravel backend to handle broadcasting, followed by configuring the frontend to listen for events. I also discuss how I ensured notifications were sent to users immediately after they received a new message. This feature adds an interactive element to my portfolio, demonstrating my ability to work with cutting-edge technologies.
      
      Real-time features, like the one I’ve built here, are becoming more and more popular in modern web applications, and learning how to implement them has been an exciting journey.`
    },
    {
      "id": 3,
      "blogimg": blog3,
      "blogtitle": "Mastering Full-Stack Development",
      "innerpara": "A look into my approach to full-stack development, and how I built a robust backend and a seamless frontend.",
      "innerlang": ["Full-Stack", "JavaScript", "Backend"],
      "para": `As a full-stack developer, I understand the importance of creating a seamless connection between the frontend and backend. In this post, I walk through the process of developing both sides of an application and how I bring them together to form a cohesive product. I’ve worked with various technologies like Node.js, Laravel, and React to build scalable applications, ensuring they meet both the technical requirements and the user needs.
      
      One of the highlights of my experience was using RESTful APIs to allow my frontend (React) to communicate with the backend (Laravel). This enables a decoupled, maintainable codebase. I also cover topics like authentication, session management, and best practices for deploying full-stack applications.
      
      Whether building a small web app or a large-scale system, understanding both sides of development has allowed me to work efficiently and tackle challenges head-on. Full-stack development offers immense flexibility and opens doors to creating end-to-end solutions.`
    },
    {
      "id": 4,
      "blogimg": blog4,
      "blogtitle": "Optimizing Web Performance for Speed",
      "innerpara": "Web performance is key to a great user experience. Here’s how I optimized my portfolio for faster load times and smoother interaction.",
      "innerlang": ["Frontend", "Performance", "Optimization"],
      "para": `Website performance is critical for retaining users, especially when it comes to mobile-first design. In this post, I share the techniques I used to optimize my portfolio website for speed. I started by analyzing my site with tools like Google Lighthouse and WebPageTest to identify bottlenecks and performance issues.
      
      One of the first things I did was implement lazy loading for images and videos, ensuring that they’re only loaded when necessary. I also used image optimization techniques to reduce file sizes without compromising quality. Another major improvement came from utilizing Next.js’s built-in features like automatic static optimization and server-side rendering, which drastically reduced page load times.
      
      I also minimized CSS and JavaScript files, leveraging tools like PurgeCSS to remove unused styles and Babel to optimize my JavaScript for smaller file sizes. These performance improvements not only made my portfolio faster but also contributed to a better user experience across devices.`
    }
  ]
  
