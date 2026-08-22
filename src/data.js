export const profile = {
  name: 'Mohamad Kahirul',
  fullName: 'Mohamad Kahirul Bin Mohammadkan',
  role: 'Junior Software Developer',
  location: 'Lahad Datu, Sabah, Malaysia',
  email: 'mohdkahirul30@gmail.com',
  phone: '011-6081 2294',
  whatsapp: '017-721 0810',
  whatsappLink: 'https://wa.me/60177210810',
  github: 'https://github.com/KerulKn',
  address: 'Kg. Binuang, Jalan Tengah Nipah, 91100 Lahad Datu, Sabah',
  summary:
    "Mathematics undergraduate in Computer Graphics with hands-on experience across full-stack development, database design, IT support, and web development from industry probation. I build user-centred systems, with additional exposure to mobile app development and a habit of chasing problems until they're solved.",
}

export const experience = [
  {
    role: 'Junior Software Developer',
    org: 'Apploqic Technologies PLT',
    period: 'Dec 2025 — Now',
    points: [
      'Contributed to web and mobile applications using React, Laravel, Flutter and MySQL.',
      'Designed and implemented frontend interfaces and backend logic across multiple projects.',
      'Assisted in database design and integration to support system functionality.',
      'Supported deployment, testing and maintenance of applications.',
    ],
  },
  {
    role: 'IT Department Intern',
    org: 'Customs Department Lahad Datu, Sabah',
    period: 'Mar 2025 — Sep 2025',
    points: [
      'Gained hands-on experience within a government IT environment.',
      'Assisted in data management related to finance and taxation.',
      'Designed and developed a store management system to improve operational efficiency.',
    ],
  },
]

export const education = [
  {
    school: 'University Malaysia Sabah',
    program: "Bachelor's Degree, Mathematics (Computer Graphics)",
    period: '2021 — 2025',
  },
  {
    school: 'University Malaysia Sabah',
    program: 'Foundation in Science',
    period: '2019 — 2020',
  },
  {
    school: 'Sekolah Menengah Sains Lahad Datu',
    program: 'Secondary School',
    period: '2018 — 2019',
  },
]

// Filtered system projects (personal / public portfolio items only)
export const projects = [
  {
    index: '01',
    name: 'Pharmacy Management System',
    tag: 'Healthcare',
    stack: ['Laravel', 'Flutter', 'MySQL', 'REST API'],
    description:
      'Full-stack pharmacy system covering inventory management, prescription tracking, patient records and billing. Dual platform — web admin (Laravel + React) and mobile app (Flutter).',
    phases: ['Requirements', 'System Design', 'API Docs', 'UI/UX', 'Mobile Dev', 'Deployment'],
  },
  {
    index: '02',
    name: 'Property Management System',
    tag: 'Real Estate',
    stack: ['React', 'Laravel', 'PostgreSQL', 'REST API'],
    description:
      'Property listing, tenant management, lease tracking and payment processing platform. Web-based system with RESTful API backend and real-time notifications.',
    phases: ['Requirements', 'System Design', 'API Docs', 'UI/UX', 'Web Dev', 'Deployment'],
  },
  {
    index: '03',
    name: 'Building Management System',
    tag: 'Facilities',
    stack: ['React', 'Flutter', 'Laravel', 'MySQL'],
    description:
      'Comprehensive BMS covering maintenance scheduling, asset tracking, defect reporting and contractor management. Mobile app for field teams, web dashboard for managers.',
    phases: ['Requirements', 'Architecture', 'API Docs', 'UI/UX', 'Mobile Dev', 'Deploy'],
  },
  {
    index: '04',
    name: 'ZUSCaffeine',
    tag: 'F&B',
    stack: ['React', 'Flutter', 'Laravel', 'MySQL'],
    description:
      'Full-stack coffee ordering system inspired by ZUS Coffee. Three user modules (Admin, Staff, Client), menu management, promotions, coupons and end-to-end order processing.',
    phases: ['Requirements', 'Design', 'API Docs', 'UI/UX', 'Mobile Dev', 'Deploy'],
  },
  {
    index: '05',
    name: 'Palm Plantation Management',
    tag: 'Agriculture · AI',
    stack: ['Flutter', 'Laravel', 'MySQL', 'Claude', 'Gemini'],
    description:
      'Plantation operations system with AI agent integration (Claude + Gemini) for yield prediction, harvest scheduling, worker task assignment and field analytics.',
    phases: ['Requirements', 'Architecture', 'AI Design', 'UI/UX', 'Mobile Dev', 'Deploy'],
  },
]

export const skills = [
  {
    label: 'Mobile',
    items: [
      { name: 'Flutter', icon: 'devicon-flutter-plain', color: '#54C5F8' },
      { name: 'Dart', icon: 'devicon-dart-plain', color: '#0175C2' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: 'devicon-react-original', color: '#61DAFB' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E' },
      { name: 'HTML5', icon: 'devicon-html5-plain', color: '#E34F26' },
      { name: 'CSS3', icon: 'devicon-css3-plain', color: '#1572B6' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Laravel', icon: 'devicon-laravel-plain', color: '#FF2D20' },
      { name: 'PHP', icon: 'devicon-php-plain', color: '#777BB4' },
      { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB' },
      { name: 'REST API', icon: 'devicon-fastapi-plain', color: '#009688' },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'MySQL', icon: 'devicon-mysql-plain', color: '#4479A1' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#4169E1' },
    ],
  },
  {
    label: 'AI & Tools',
    items: [
      { name: 'Claude', icon: 'svg-claude', color: '#D97757' },
      { name: 'Gemini', icon: 'svg-gemini', color: '#8E75B2' },
      { name: 'Codex', icon: 'svg-openai', color: '#10A37F' },
      { name: 'Git', icon: 'devicon-git-plain', color: '#F05032' },
    ],
  },
  {
    label: 'Design & CMS',
    items: [
      { name: 'Figma', icon: 'devicon-figma-plain', color: '#F24E1E' },
      { name: 'WordPress', icon: 'devicon-wordpress-plain', color: '#21759B' },
      { name: 'Photoshop', icon: 'devicon-photoshop-plain', color: '#31A8FF' },
    ],
  },
  {
    label: 'Other Languages',
    items: [
      { name: 'C/C++', icon: 'devicon-cplusplus-plain', color: '#00599C' },
      { name: 'MATLAB', icon: 'devicon-matlab-plain', color: '#e16737' },
      { name: 'R', icon: 'devicon-r-plain', color: '#276DC3' },
      { name: 'Unity', icon: 'svg-unity', color: '#FFFFFF' },
    ],
  },
]

export const activities = [
  'AJK for Kem Matematik Perdana 2024, Tawau — 120 participants',
  'Chairman, Kadet Bomba, SM Sains Lahad Datu (2019)',
  'Member, GAMMA UMS Club',
  'Participant, MCG Canva Digital Workshop',
  'Participant, MCG Academic Talk',
  'Participant, Symposium on Coping Strategy During COVID-19 Pandemic 2.0',
]

export const references = [
  {
    name: 'Prof. Dr. Abdullah Bin Bade',
    role: 'Faculty of Science and Natural Resources, University Malaysia Sabah',
    phone: '+6013-7204450',
    email: 'abb@ums.edu.my',
  },
  {
    name: 'Puan Hermah Muhasaffia Binti Hermansah',
    role: 'Penolong Pengarah Kastam, WK10, Jabatan Kastam Diraja Lahad Datu',
    phone: '+6011-51588318',
    email: 'muhasaffia.hermansah@customs.gov.my',
  },
]
