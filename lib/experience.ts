export interface Experience {
  title: string;
  org: string;
  year: string;
  active: boolean;
  isEdu?: boolean;
  description: string;
  logo?: string;
}

export const experiences: Experience[] = [
  // CURRENT ACTIVE ROLES
  { 
    title: "BS Computer Science", 
    org: "Holy Angel University", 
    year: "2023 - Present", 
    active: true, 
    isEdu: true,
    logo: "/logos/hau.png",
    description: "Currently pursuing a Bachelor of Science in Computer Science. Coursework focuses on data structures, algorithms, machine learning, and software engineering principles."
  },
  { 
    title: "Notion Campus Leader", 
    org: "Notion - Holy Angel University", 
    year: "2025 - Present", 
    active: true,
    logo: "/logos/notion.png",
    description: "Leading the Notion community at Holy Angel University. Organizing workshops, sharing productivity tips, and helping students build effective study systems using Notion."
  },
  { 
    title: "Volunteer", 
    org: "DEVCON.PH", 
    year: "2024 - Present", 
    active: true,
    logo: "/logos/devcon.png",
    description: "Assisting in organizing the largest developer conferences and meetups in the Philippines, facilitating tech community engagement and networking."
  },
  { 
    title: "Volunteer", 
    org: "Each One Teach One Philippines", 
    year: "2023 - Present", 
    active: true,
    logo: "/logos/eachoneteachone.png",
    description: "Volunteering to provide educational support and mentorship to underprivileged students, helping bridge the education gap in local communities."
  },

  // PREVIOUS ROLES
  { 
    title: "Events Director", 
    org: "Cybersecurity Intelligence Alliance", 
    year: "2025 - 2026", 
    active: false,
    logo: "/logos/cia.png",
    description: "Orchestrated university-wide cybersecurity awareness campaigns, capture-the-flag (CTF) competitions, and expert seminar sessions."
  },
  { 
    title: "Events Lead", 
    org: "Google Developer Groups on Campus - Holy Angel University", 
    year: "2024 - 2026", 
    active: false,
    logo: "/logos/gdsc.png",
    description: "Led the events team to successfully plan and execute tech talks, coding bootcamps, and developer study jams focused on Google technologies."
  },
  { 
    title: "UI/UX Staff", 
    org: "Google Developer Student Clubs - HAU", 
    year: "2024 - 2025", 
    active: false,
    logo: "/logos/gdsc.png",
    description: "Designed user interfaces and promotional materials for various club initiatives, ensuring a consistent and engaging brand experience."
  },
  { 
    title: "Volunteer", 
    org: "Notion - Holy Angel University", 
    year: "2024 - 2025", 
    active: false,
    logo: "/logos/notion.png",
    description: "Supported the Notion Campus Leader in setting up events, creating templates for students, and managing social media promotions."
  },
  { 
    title: "Senior Executive Assistant to the Governor", 
    org: "School of Computing - Student Council", 
    year: "2024 - 2025", 
    active: false,
    logo: "/logos/soc.png",
    description: "Managed executive communications, coordinated with university administration, and ensured proper execution of student council initiatives."
  },
  { 
    title: "Facilities and Logistics", 
    org: "Holy Angel University - Student Council", 
    year: "2023 - 2024", 
    active: false,
    logo: "/logos/hau_usc.png",
    description: "Managed physical and technical logistics for major university events, ensuring seamless execution and proper allocation of resources."
  },
  { 
    title: "DataCamp Scholar", 
    org: "DataCamp", 
    year: "2024", 
    active: false,
    logo: "/logos/datacamp.png",
    description: "Awarded a scholarship to pursue advanced data science and analytics courses, expanding technical proficiencies in Python and SQL."
  },
  { 
    title: "Senior High School", 
    org: "University of the Assumption", 
    year: "2021 - 2023", 
    active: false, 
    isEdu: true,
    logo: "/logos/ua.png",
    description: "Graduated with High Honors from the Science, Technology, Engineering, and Mathematics (STEM) strand. Actively participated in mathematics competitions and science fairs. Developed strong skills in Event Planning."
  },
  { 
    title: "Junior High School", 
    org: "Sta. Cruz Academy of Lubao, Inc.", 
    year: "2017 - 2021", 
    active: false, 
    isEdu: true,
    logo: "/logos/stacruz.png",
    description: "Graduated with Highest Honors. Participated in the SCALI Supreme Student Council and the Lasallian Schools Supervision Services Association Youth Federation. Cultivated skills in Journalism."
  },
  { 
    title: "Grade School", 
    org: "Olongapo Wesley School", 
    year: "2011 - 2017", 
    active: false, 
    isEdu: true,
    logo: "/logos/olongapo.png",
    description: "Completed primary education with a strong foundation in academics. Highly active in the Australian Math Competition, Campus Journalism, Robotics Club, Dance Theatre, Swimming, and Futsal Teams. Developed early skills in Journalism."
  },
  { 
    title: "Business Manager", 
    org: "University of the Assumption – UASHS Supreme Student Council", 
    year: "2022 - 2023", 
    active: false,
    logo: "/logos/uashs.png",
    description: "Oversaw the council's financial transactions, managed event budgets, and secured sponsorships for various senior high school activities."
  },
  { 
    title: "Secretary", 
    org: "Scali Supreme Student Council", 
    year: "2019 - 2022", 
    active: false,
    logo: "/logos/scali.png",
    description: "Responsible for recording meeting minutes, handling internal correspondence, and maintaining organized records for the student body."
  }
].sort((a, b) => {
  if (a.active !== b.active) {
    return a.active ? -1 : 1;
  }
  return parseInt(b.year) - parseInt(a.year);
});
