import { Education } from "@interfaces";

export const educations: Education[] = [
  {
    institution: 'Old Dominion University',
    startDate: 'Jan 2022 ',
    endDate: 'Dec 2024',
    location: 'Norfolk, VA',
    title: "Master's Degree",
    focus: 'Computer Science',
    gpa: 3.86,
    description: 'The graduate level program at ODU for computer science places ' +
      'emphasis on computational thinking and cyber security. They back up these ' +
      'theoretical studies with collaborative hands-on projects. Additionally, my ' +
      'chosen electives gave deeper understanding into databases: how they are ' +
      'developed, designing reference structures, and optimizing.'
  },
  {
    institution: 'Old Dominion University',
    startDate: 'Aug 2020 ',
    endDate: 'Dec 2021',
    location: 'Norfolk, VA',
    title: "Bachelor's Degree",
    focus: 'Computer Science, Cyber Security(Minor)',
    gpa: 3.95,
    description: "Learned the fundamentals of Object Oriented Design, as well as " +
      "Algorithms and Data Structures. Mixed problem solving and critical thinking " +
      "with hands on coding in multiple languages including C, C++, Java, and " +
      "introductions to Rust. Learned about project life-cycles and created a team-built " +
      "prototype of software to address a real-world problem. Was a 4 time recipient of " +
      "the Dean's Perfect Scholar Award."
  }
]