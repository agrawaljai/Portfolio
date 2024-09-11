const header = {
  homepage: 'https://agrawaljai.github.io/Portfolio/',
  title: '{{jai agrawal}}',
}

const about = {
  name: 'Jai Agrawal',
  role: 'Full Stack Developer / Computer Science Engineer',
  description:
    'Computer Science student at NIT Surat with a strong passion for software development and web technologies having hands-on experience with a wide range of tools and frameworks, I enjoy building efficient, responsive, and secure applications. Eager to connect, collaborate, and apply my knowledge to real-world challenges, I am always looking for opportunities to learn, grow, and contribute to the tech community.',
  resume: 'https://drive.google.com/file/d/1edDi1SHpjIXz-TyQwB0-ykVgppi9uTUP/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/jai-agrawal-601584253/',
    github: 'https://github.com/agrawaljai',
  },
}

const projects = [
  {
    name: 'Bookstore Website',
    description:
    'PageTurner is a responsive bookstore website that offers seamless browsing with detailed book listings, including title, price, and ISBN, along with an option to upload book cover images. It features secure user authentication through Google Sign-In and includes an order tracker for efficient management, delivering a smooth and modern user experience with fluid transitions',
    stack: ['NodeJS', 'Firebase', 'ReactJS'],
    sourceCode: 'https://github.com/agrawaljai/PageTurner',
    livePreview: 'https://pageturner-46efa.web.app/',
  },
  {
    name: 'Full-Featured Blogging Platform',
    description:
    'Blogifyer is a full-featured blogging platform offering secure user authentication with role-based access control, encrypted passwords, and file uploads up to 5 MB for profile and cover images. It features optimized performance for faster load times and a fully responsive, mobile-friendly design to enhance user engagement',
    stack: ['NodeJS', 'ExpressJS', 'EJS', 'Bootstrap', 'MongoDB', 'JWT'],
    sourceCode: 'https://github.com/agrawaljai/Bloging-Website',
    livePreview: 'https://bloging-website-rmwq.onrender.com/',
  },
  {
    name: 'Short-URL',
    description:
    'This short URL service website offers secure authentication and authorization, utilizing JWT tokens for cookie management. It provides a seamless and optimized experience with a stunning UI, ensuring fast performance and efficient functionality for users.',
    stack: ['NodeJS', 'MongoDB', 'JWT', 'Bootstrap', 'ExpressJS'],
    sourceCode: 'https://github.com/agrawaljai/shortURL',
    livePreview: 'https://shorturl-y67w.onrender.com/',
  },
]

const skills = [
  'HTML5',
  'CSS',
  'JavaScript',
  'SQL',
  'Python',
  'C/C++',
  'ReactJS',
  'MongoDB',
  'NodeJS',
  'ExpressJS',
  'Git',
  'Firebase',
]

const contact = {
  email: 'agrawaljai399@mail.com',
}

export { header, about, projects, skills, contact }
