const slidesArray = [
  {
    title: 'Exploring System & Environments',
    content: [
      { name: 'Windows', path: 'windows.webp' },
      { name: 'Linux', path: 'linux.webp' },
      { name: 'WSL', path: 'wsl.webp' },
    ],
  },
  {
    title: 'Navigating Command Line Interfaces',
    content: [
      { name: 'PowerShell', path: 'powershell.webp' },
      { name: 'Bash', path: 'bash.webp' },
      { name: 'any CLI --help', path: 'cli.webp' },
    ],
  },
  {
    title: 'Crafting Development Software Tools',
    content: [
      { name: 'Figma', path: 'figma.webp' },
      { name: 'VSCode', path: 'code.webp' },
      { name: 'Postman', path: 'postman.webp' },
    ],
  },
  {
    title: 'Mastering Programming Languages',
    content: [
      { name: 'PHP', path: 'php.webp' },
      { name: 'JavaScript', path: 'js6.webp' },
      { name: 'Python', path: 'python.webp' },
    ],
  },
  {
    title: 'Following World-Wide-Web Standards',
    content: [
      { name: 'HTML5', path: 'html5.webp' },
      { name: 'CSS3', path: 'css3.webp' },
      { name: 'ES6', path: 'es6.webp' },
    ],
  },
  {
    title: 'Embracing the Processing Toolkit',
    content: [
      { name: 'Sass', path: 'sass.webp' },
      { name: 'Vite', path: 'vite.webp' },
      { name: 'TypeScript', path: 'ts2020.webp' },
    ],
  },
  {
    title: 'Designing with CSS and UI Frameworks',
    content: [
      { name: 'Material UI', path: 'mui.webp' },
      { name: 'Vutify', path: 'vuetify.webp' },
      { name: 'Tailwind CSS', path: 'tailwind.webp' },
    ],
  },
  {
    title: 'Visualizing Advanced Graphics Concepts',
    content: [
      { name: 'SVG, Canvas', path: 'favicon.ico' },
      { name: 'WebGL', path: 'webgl.webp' },
      { name: 'Three.js', path: 'threejs.webp' },
    ],
  },
  {
    title: 'Adopting JavaScript Frameworks',
    content: [
      { name: 'Vue.js', path: 'vue.webp' },
      { name: 'Nuxt.js', path: 'nuxt.webp' },
      { name: 'React.js', path: 'react.webp' },
    ],
  },
  {
    title: 'Advancing in Backend Development',
    content: [
      { name: 'Django', path: 'django.webp' },
      { name: 'Node.js', path: 'node.webp' },
      { name: 'Laravel', path: 'laravel.webp' },
    ],
  },
  {
    title: 'Using Package Managers Effectively',
    content: [
      { name: 'PyPI', path: 'pypi.webp' },
      { name: 'NPM', path: 'npm.webp' },
      { name: 'Composer', path: 'composer.webp' },
    ],
  },
  {
    title: 'Connecting with APIs and Networking',
    content: [
      { name: 'JSON', path: 'json.webp' },
      { name: 'REST', path: 'rest.webp' },
      { name: 'GraphQL', path: 'graphql.webp' },
    ],
  },
  {
    title: 'Managing Databases Effectively',
    content: [
      { name: 'MongoDB', path: 'mongodb.webp' },
      { name: 'PostgreSQL', path: 'postgresql.webp' },
      { name: 'Firebase', path: 'firebase.webp' },
    ],
  },
  {
    title: 'Extending Platforms Acquaintance',
    content: [
      { name: 'AWS', path: 'aws.webp' },
      { name: 'GCP', path: 'gcp.webp' },
      { name: 'Azure', path: 'azure.webp' },
    ],
  },
  {
    title: 'Versioning with Version Control Systems',
    content: [
      { name: 'Git', path: 'git.webp' },
      { name: 'GitHub', path: 'github.webp' },
      { name: 'GitLab', path: 'gitlab.webp' },
    ],
  },
];


const arrayToHTML = content => content.map(item => `
  <div class="content" style="margin-top: 2rem; display: flex; flex-direction: column; align-items: center; text-align: center;">
    <div class="image" style="background: url('${item.path}'); background-size: contain; background-position: center; background-repeat: no-repeat; width: 6rem; height: 6rem; margin-bottom: 1rem;"></div>
    <p class="p2" style="margin-bottom: 3rem;">${item.name}</p>
  </div>
`).join('')

const slides = slidesArray.map(item => {
  return {
    title: item.title,
    content: arrayToHTML(item.content)
  }
})

export default slides
