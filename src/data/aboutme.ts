export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Jondall Norris",
  title: "Undergraduate Researcher",
  institution: "Bowdoin College",
  // Note that links work in the description
  description:
    "I like lakes!",
  email: "______@bowdoin.edu",
  imageUrl:
    "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "janesmith",
  linkedinUsername: "jondallnorris",
  // twitterUsername: "",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.bowdoin.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
