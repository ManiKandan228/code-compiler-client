import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Explore", href: "#" },
  { label: "Home", href: "/" },
  { label: "Problems", href: "/problems" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "The challenges are thoughtfully designed, and the real-time feedback helped me improve fast. A must for anyone preparing for tech interviews.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "The seamless interface and AI assistance took my problem-solving to the next level. Highly recommended for developers of all levels.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "The real-time code editor is a game changer. It allows my team to work together and share solutions quickly. Great platform for hackathons too!.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "The structured challenges and multi-language support made my prep smooth. I felt confident walking into interviews.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "They saved me so much time and effort when getting started. This platform is now a part of my daily routine and always suggestable.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "From code execution to submission tracking, everything works like a charm. Looking forward to seeing new features soon!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Intuitive Code Editor",
    description:
    "Write, debug, and optimize code effortlessly with our smooth and user-friendly editor.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Language Support",
    description:
      "Solve coding problems in your preferred language—whether it's Python, Java, C++, or JavaScript.",
  },
  {
    icon: <ShieldHalf />,
    text: "Starter Templates",
    description:
      "Kick off your projects with predefined code templates to solve common challenges and patterns.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Code Execution",
    description:
      "Run your code instantly and see results or errors in real-time for fast debugging and learning.",
  },
  {
    icon: <PlugZap />,
    text: "Team Collaboration",
    description:
      "Collaborate with others on coding problems in real-time, share solutions, and learn together.",
  },
  {
    icon: <GlobeLock />,
    text: "Performance Insights",
    description:
      "Track your progress and submission history with detailed insights into performance and efficiency.",
  },
];

export const checklistItems = [
  {
    title: "Seamless Code Merging",
    description:
      "Easily manage and merge code changes, ensuring smooth collaboration across projects.",
  },
  {
    title: "Effortless Code Reviews",
    description:
      "Review and provide feedback without hassle, maintaining code quality with minimal effort.",
  },
  {
    title: "AI-Powered Assistance",
    description:
      "Get real-time AI suggestions to optimize your code and reduce development time.",
  },
  {
    title: "Instant Sharing",
    description:
      "Share your work and solutions in minutes with built-in sharing options for faster collaboration",
  },
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
