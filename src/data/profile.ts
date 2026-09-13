import { education } from "./education";
export const profile = {
  heading: {
    index: "02",
    eyebrow: "About / Profile",
    title: "An analytical foundation. A builder’s approach.",
  },
  positioning:
    "MSc Data Science student focused on machine learning, analytics, intelligent applications, and data-driven software systems.",
  paragraphs: [
    `My academic starting point was ${education.puc.shortProgram} at ${education.puc.institution}. Computer Science and Statistics introduced me to two complementary ways of thinking: how to build a solution, and how to reason about the data behind it. Business Studies and Accountancy added a practical context for those questions.`,
    `I carried that foundation into ${education.bca.shortProgram} at ${education.bca.institution}, Bengaluru. Alongside programming, databases, and analysis, my project work moved toward machine-learning applications, recommendation systems, and analytical dashboards — tools that people can actually interact with.`,
    `I’m now studying ${education.msc.program} at ${education.msc.institution}, Bengaluru. My interest is in bringing deeper statistical and computational understanding into the software I build, from model-driven applications to connected AI systems.`,
  ],
  statement:
    "I’m interested in the point where data analysis becomes a working system.",
  foundation: ["Computer Science", "Statistics", "Data Analytics"],
  focus: ["Machine Learning", "Data Analytics", "AI Systems"],
};
