import nexarServices from './nexar';
import nexaiServices from './nexai';
import nexnetServices from './nexnet';
import nex3dServices from './nex3d';

const services = [
{
  slug: "nexar",
  title: "nexAR",
  description: "Advanced augmented reality solutions for immersive experiences.",
  image: "/nex.jpg",
  overview: `
    <p>In today's competitive market, every business, from small-scale to large-scale, seeks innovative solutions to engage their audiences more effectively. But traditional methods often fail due to passive engagement, static content, limited interactivity, and weak product visualization.</p>
    <p>nexAR Augmented Reality (AR) for marketing enhances customer engagement by seamlessly blending digital elements with the physical world, creating immersive and interactive experiences that captivate audiences and drive awareness.</p>
  `,
  features: [
    { title: "Engagement", description: "Increase engagement, brand recognition, and sales growth." },
    { title: "Real-time AR Experiences", description: "Support for live AR overlays with low latency." },
    { title: "Product Visualization", description: "Enhance product visualization with effortless navigation through nexAR." },
    { title: "Analytics Integration", description: "Track user interactions with AR content for valuable insights." },
    { title: "Optimized Sales Strategies", description: "Measure the performance of promotional campaigns linked to AR experiences using page views, user data, and location insights." }
  ],
  applications: [
    "Interactive marketing campaigns.",
    "Posters, banners, and billboards.",
    "Retail virtual try-ons.",
    "Event promotions with AR-enhanced materials."
  ],
  label: "AR Solutions",
  icon: "Camera",
  color: "#111111",
  subServices: nexarServices
},
  {
    slug: "nexai",
    title: "nexAI",
    description: "AI-powered solutions for web, 3D, and creative applications.",
    image: "/nexai.jpg",
    overview: `
      <p>nexAI leverages artificial intelligence to automate and enhance workflows across web development, 3D visualization, and creative projects.</p>
      <p>Built on advanced machine learning models, nexAI adapts to your data for optimal results.</p>
    `,
    features: [
      { title: "Automated Content Generation", description: "AI-driven creation of text, images, and code." },
      { title: "3D Model Optimization", description: "Intelligent compression and enhancement of 3D assets." },
      { title: "Predictive Analytics", description: "Forecast user behavior and trends." },
      { title: "Natural Language Processing", description: "Integrate chatbots and voice interfaces." }
    ],
    applications: [
  "Automate repetitive business tasks with custom workflows (n8n).",
  "Integrate multiple apps and services seamlessly for efficiency.",
  "Custom AI solutions for predictive analytics, recommendations, and decision-making.",
  "Enhance marketing, sales, and customer engagement with AI-driven automation.",
  "Centralize data collection, reporting, and insights across platforms."
],

   
    label: "AI Automation",
    icon: "Cpu",
    color: "#111111",
    subServices: nexaiServices
  },
  {
    slug: "nexnet",
    title: "nexNet",
    description: "Robust networking and custom web application development.",
    image: "/net.jpg",
  overview: `
  <p>nexNet provides robust networking solutions and custom web applications tailored to your business.Our solutions ensure seamless connectivity, high performance, and reliable security across platforms.</p>
  <p>We specialize in creating intuitive dashboards, data visualization tools, and automated workflows for efficient business management.With interactive features like image mapping, plot management, and 360 virtual tours, we enhance user engagement and experience.</p>
  <p>Our scalable architecture allows businesses to grow without worrying about technical limitations or downtime.</p>
  <p>By combining innovative web technologies and custom solutions, nexNet empowers companies to optimize operations and make data-driven decisions.</p>
`
,
    features: [
  { title: "Tailored Web Solutions", description: "Custom web applications designed to meet your business needs and goals." },
  { title: "Robust Networking", description: "Secure and reliable networks with high availability and encrypted communications." },
  { title: "Interactive Dashboards", description: "Visualize data and insights with user-friendly dashboards and analytics tools." },
  { title: "Workflow Automation", description: "Streamline business processes with integrated automation and API workflows." },
  { title: "Scalable Architecture", description: "Solutions built to grow with your business without performance issues." },
  { title: "Cross-Platform Compatibility", description: "Ensure seamless functionality across web, mobile, and other devices." }
],
    applications: [
  "Interactive image mapping and visual navigation solutions.",
  "Customer Relationship Management (CRM) dashboards for better client engagement.",
  "Immersive 360° virtual tours for online experiences.",
  "Custom web applications tailored to business workflows.",
  "Automated API integrations and workflow solutions.",
  "Scalable networking solutions with secure connectivity."
],

 
    label: "Networking",
    icon: "Globe",
    color: "#111111",
    subServices: nexnetServices
  },
  {
    slug: "nex3d",
    title: "nex3D",
    description: "Cutting-edge 3D visualization and virtual tour creation.",
    image: "/3d.jpg",
    overview: `
      <p>nex3D revolutionizes visualization with advanced 3D modeling and virtual tour technology.</p>
      <p>Perfect for real estate, architecture, and product showcases, nex3D brings ideas to life.</p>
    `,
    features: [
      { title: "High-Fidelity 3D Models", description: "Create detailed, realistic 3D assets." },
      { title: "Interactive Virtual Tours", description: "Build navigable 360-degree environments." },
      { title: "Cross-Platform Compatibility", description: "Deploy on web, mobile, and VR." },
      { title: "Collaboration Tools", description: "Real-time editing and sharing for teams." }
    ],
    applications: [
      "Real estate virtual property tours.",
      "Architectural design walkthroughs.",
      "Product demos for e-commerce."
    ],

    label: "3D Visualization",
    icon: "Map",
    color: "#111111",
    subServices: nex3dServices
  }
];

export default services;