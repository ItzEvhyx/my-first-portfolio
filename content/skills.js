// SKILLS: Change text in quotes. Copy an entire { ... }, line to add a skill.
// Icon choices: design, layout, search, code, cloud, git, tools.
// Suggested maximum: 4 categories, 6 skills each; descriptions under 100 characters.

export const categories = [
    {
      title: 'Design',
      skills: [
        { name: 'Figma', desc: 'Components, auto layout and design tokens.', icon: 'design' },
        { name: 'Prototyping', desc: 'Clickable flows and micro-interactions.', icon: 'layout' },
        { name: 'Wireframing', desc: 'Low-fi sketches to high-fi screens.', icon: 'layout' },
        { name: 'Design Drafts', desc: 'Quick and dirty designs for testing.', icon: 'layout' },
      ],
    },
    {
      title: 'Research',
      skills: [
        { name: 'User interviews', desc: 'Finding the real problem before drawing.', icon: 'search' },
        { name: 'Usability testing', desc: 'Quick rounds with five users.', icon: 'search' },
      ],
    },
    {
      title: 'Front-end and Cloud',
      skills: [
        { name: 'HTML and CSS', desc: 'Turning designs into working pages.', icon: 'code' },
        { name: 'JavaScript basics', desc: 'Small interactions and form checks.', icon: 'code' },
        { name: 'AWS fundamentals', desc: 'Learning cloud basics in the club.', icon: 'cloud' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git and GitHub', desc: 'Version control and handoff.', icon: 'git' },
        { name: 'Notion', desc: 'Roadmaps, notes and design docs.', icon: 'tools' },
      ],
    },
  ];

export const skillsSection = { title: 'Skills & Technologies', subtitle: 'The tools and methods I use to design and test ideas.' };
