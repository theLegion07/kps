import sas from "../assets/Images/SAS.webp";
import EMl from "../assets/Images/EML.webp";
import sp from "../assets/Images/SP.webp";
import yt from "../assets/Images/yt.webp";
import spm from "../assets/Images/spm.webp";

export interface Project {
  id: number;
  image: string;
  title: string;
  desc: string; // Short teaser
  tech: { id: number; name: string }[];
  cardDes: string; // Long description from your "SasDesc" etc.
}
export const projects: Project[] = [
  {
    id: 0,
    image: sas,
    title: "Smart Attendance System",
    desc: "A real-time facial recognition attendance system that logs data into CSV files.",
    tech: [
      { id: 0, name: "Python" },
      { id: 1, name: "OpenCV" },
      { id: 2, name: "Face Recognition" },
      { id: 3, name: "Numpy" },
    ],
    cardDes: "Python and OpenCV automate live facial attendance to eliminate manual entry. Instant CSV logging ensures accurate timestamps and reduces administrative effort."
  },
  {
    id: 1,
    image: EMl,
    title: "Ensemble Machine Learning Model For Intrusion Detection",
    desc: "Classifying URLs and Preventing Phishing Attacks By Designing A Chrome Extension.",
    tech: [
      { id: 0, name: "Python" },
      { id: 1, name: "XGBOOST" },
      { id: 2, name: "Random Forest" },
      { id: 3, name: "SVM" },
    ],
    cardDes: "It provides proactive client-side ML for real-time detection and prevention."
  },
  {
    id: 2,
    image: sp,
    title: "Sponsor Portal",
    desc: "Handles Sponsors For any Entertainment Domain like Racing, Cricket, etc.",
    tech: [
      { id: 0, name: "React.js" },
      { id: 1, name: "Tailwind CSS" },
      { id: 2, name: "TypeScript" },
    ],
    cardDes: "This internal portal manages event-specific sponsors for domains like racing, cricket, and boxing. Restricted to domain personnel, it provides secure and centralized internal sponsorship management."
  },
  {
    id: 3,
    image: yt,
    title: "Student Performance Manager",
    desc: "A real-time facial recognition attendance system that logs data into CSV files.",
    tech: [
      { id: 0, name: "Python" },
    ],
    cardDes: "Used to Study The Grades of the Student and analyze The Performance of a Student"
  },
  {
    id: 4,
    image: spm,
    title: "Youtube Clone",
    desc: "Just Re-designed Youtube's Interface For Foundations Mastering",
    tech: [
      { id: 0, name: "HTML5" },
      { id: 1, name: "CSS" },
      
    ],
    cardDes: "It provides proactive client-side ML for real-time detection and prevention."
  },
  
];