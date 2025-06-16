// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "My Global Perspectives Blog";
export const SITE_DESCRIPTION = "Add here a brief description of who you are, your career ambitions, what you want to get out of the course. I am Tharshan, i have had a keen interest in computer science since highschool since i picked it up as a GCSE, since then ive made it a goal of mine to get into a cyber security industry as i believe that is a passion of mine that i would like to turn into a career. I would expect to get out of this course is atleast an understanding of the industy and enough knowledge and experience to help me get my foot into the door for an entry level position";
export const MY_NAME = "Tharshan Jeevamanokar";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
