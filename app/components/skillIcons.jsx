import React from 'react';

const PenIcon = () => (
  <><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path></>
);
const LayoutIcon = () => (
  <><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></>
);
const SearchIcon = () => (
  <><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></>
);
const CodeIcon = () => (
  <><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></>
);
const CloudIcon = () => (
  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
);
const GitIcon = () => (
  <><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></>
);
const WrenchIcon = () => (
  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
);


export const skillIcons = { design: PenIcon, layout: LayoutIcon, search: SearchIcon, code: CodeIcon, cloud: CloudIcon, git: GitIcon, tools: WrenchIcon };
