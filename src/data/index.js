// src/data/index.js
import logo from '@/assets/joblogo.png';
export const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations",
    location: "Remote",
    salary: "$100,000 - $140,000",
    type: "Full-time",
    posted: "2 days ago",
    description: "We are looking for an experienced Frontend Developer to join our product team. You will be responsible for building the user interface of our web applications using React and Next.js.",
    tags: ["React", "Next.js", "JavaScript", "CSS"],
    logo: {
      src: logo,
      alt: "Tech Innovations Logo"  // Added alt text
    }
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Data Systems Inc.",
    location: "San Francisco, CA",
    salary: "$120,000 - $160,000",
    type: "Full-time",
    posted: "1 week ago",
    description: "Join our backend team to develop scalable APIs and services. You will work with Node.js, Express, and MongoDB.",
    tags: ["Node.js", "Express", "MongoDB", "API"],
    logo: {
      src: logo,
      alt: "Data Systems Inc. Logo"
    }
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "Creative Minds",
    location: "New York, NY",
    salary: "$85,000 - $110,000",
    type: "Full-time",
    posted: "3 days ago",
    description: "We are seeking a talented UX/UI Designer to create amazing user experiences for our products.",
    tags: ["Figma", "UI/UX", "Adobe XD", "Prototyping"],
    logo: {
       src: logo,
      alt: "Creative Minds Logo"
    }
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Cloud Solutions",
    location: "Remote",
    salary: "$110,000 - $150,000",
    type: "Contract",
    posted: "5 days ago",
    description: "Looking for a DevOps Engineer to manage our infrastructure and CI/CD pipelines.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    logo: {
      src: logo,
      alt: "Cloud Solutions Logo"
    }
  },
  {
    id: 5,
    title: "Product Manager",
    company: "Innovate Tech",
    location: "Austin, TX",
    salary: "$130,000 - $160,000",
    type: "Full-time",
    posted: "1 day ago",
    description: "We need a Product Manager to lead our product development team and define product strategy.",
    tags: ["Product Strategy", "Agile", "Scrum", "Roadmapping"],
    logo: {
       src: logo,
      alt: "Innovate Tech Logo"
    }
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Boston, MA",
    salary: "$140,000 - $180,000",
    type: "Full-time",
    posted: "2 weeks ago",
    description: "Join our data science team to build machine learning models and analyze large datasets.",
    tags: ["Python", "Machine Learning", "TensorFlow", "Pandas"],
    logo: {
      src: logo,
      alt: "Analytics Pro Logo"
    }
  }
];

export const companies = [
  {
    id: 1,
    name: "Tech Innovations",
    jobsPosted: 24,
    description: "A leading tech company specializing in innovative software solutions for businesses worldwide.",
    logo: {
      src: "/logos/tech-innovations.png",
      alt: "Tech Innovations Company Logo"
    }
  },
  {
    id: 2,
    name: "Data Systems Inc.",
    jobsPosted: 18,
    description: "We provide cutting-edge data management systems for enterprises of all sizes.",
    logo: {
      src: "/logos/data-systems.png",
      alt: "Data Systems Inc. Company Logo"
    }
  },
  {
    id: 3,
    name: "Creative Minds",
    jobsPosted: 12,
    description: "A design agency focused on creating beautiful and functional user experiences.",
    logo: {
      src: "/logos/creative-minds.png",
      alt: "Creative Minds Company Logo"
    }
  },
  {
    id: 4,
    name: "Cloud Solutions",
    jobsPosted: 32,
    description: "Specializing in cloud infrastructure and DevOps services for modern applications.",
    logo: {
      src: "/logos/cloud-solutions.png",
      alt: "Cloud Solutions Company Logo"
    }
  },
  {
    id: 5,
    name: "Innovate Tech",
    jobsPosted: 15,
    description: "Startup incubator and technology innovation hub supporting new ideas.",
    logo: {
      src: "/logos/innovate-tech.png",
      alt: "Innovate Tech Company Logo"
    }
  },
  {
    id: 6,
    name: "Analytics Pro",
    jobsPosted: 21,
    description: "Data analytics and business intelligence solutions for data-driven companies.",
    logo: {
      src: "/logos/analytics-pro.png",
      alt: "Analytics Pro Company Logo"
    }
  }
];