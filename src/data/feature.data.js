import { Users, Layers, Star, Shield, BarChart, Zap } from "lucide-react";

const features = [
  {
    title: "AI-Enhanced Interactions",
    description:
      "Leverage artificial intelligence to personalize user journeys, recommend content, and optimize engagement in real time.",
    icon: <Zap className="size-5" />,
  },
  {
    title: "Immersive Digital Environments",
    description:
      "Develop fully interactive 3D spaces that redefine how users experience your brand, training, or product demos.",
    icon: <Layers className="size-5" />,
  },
  {
    title: "Tailored Web Applications",
    description:
      "Build scalable, high-performance web platforms tailored to your business needs, with AI-assisted optimization and seamless UX.",
    icon: <BarChart className="size-5" />,
  },
  {
    title: "Intelligent User Engagement",
    description:
      "Design responsive, data-driven interfaces that adapt to user behavior — powered by machine learning and analytics.",
    icon: <Users className="size-5" />,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Protect your data with advanced encryption, access control, and compliance-ready infrastructure.",
    icon: <Shield className="size-5" />,
  },
  {
    title: "Strategic Support & Maintenance",
    description:
      "Access continuous support, proactive updates, and performance insights to keep your digital solution ahead of the curve.",
    icon: <Star className="size-5" />,
  },
];

export default features;
