import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import profilePic from "@assets/Profile_Pic_1777639370276.jpeg";
import { useTheme } from "next-themes";
import {
  Github,
  Mail,
  MapPin,
  Phone,
  Moon,
  Sun,
  Terminal,
  Code2,
  Briefcase,
  GraduationCap,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  Brain,
  Smartphone,
  Menu,
  X,
  Linkedin,
} from "lucide-react";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiCplusplus,
  SiAndroidstudio,
  SiKaggle,
  SiAnaconda,
  SiGithub,
  SiGit,
  SiGooglemaps,
} from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

const STATS = [
  { value: "2+", label: "Internships" },
  { value: "4+", label: "Projects Built" },
];

const PROJECTS = [
  {
    title: "Kokozaki Shopping App",
    desc: "A production-grade cross-platform e-commerce app built with Flutter and Dart. Features dynamic product listings, cart management, and order flow with a polished UI, architected with GetX for state management, REST APIs for data, and Firebase for backend services.",
    tags: ["Flutter", "Dart", "GetX", "REST APIs", "Firebase", "MVVM"],
    icon: ShoppingBag,
    github: "https://github.com/AliRaza-Dev678/Kokozaki-Shopping-App",
    featured: true,
  },
  {
    title: "Fake News Prediction",
    desc: "A machine learning pipeline using Random Forest Classifier with advanced NLP preprocessing to detect and classify fake news articles with high precision.",
    tags: ["Python", "Random Forest", "NLP", "Scikit-Learn"],
    icon: Brain,
    github: "https://github.com/AliRaza-Dev678/",
    featured: false,
  },
  {
    title: "Face Mask Detection (CNN)",
    desc: "Deep learning model using Convolutional Neural Networks to detect whether a person is wearing a face mask in real-time. Trained on labeled image datasets with high detection accuracy.",
    tags: ["Python", "TensorFlow", "CNN", "Deep Learning", "OpenCV"],
    icon: Brain,
    github: "https://github.com/AliRaza-Dev678/Face_Mask_Detection_using_CNN_DeepLearning_Project",
    featured: false,
  },
  {
    title: "Covid Cases Tracker",
    desc: "Cross-platform mobile app tracking worldwide COVID-19 statistics in real-time using live REST APIs, built with Flutter and GetX state management.",
    tags: ["Flutter", "Dart", "GetX", "REST APIs"],
    icon: Smartphone,
    github: "https://github.com/AliRaza-Dev678/",
    featured: false,
  },
];

const SKILLS = [
  { icon: SiPython, name: "Python", color: "#3B82F6" },
  { icon: SiFlutter, name: "Flutter", color: "#06B6D4" },
  { icon: SiDart, name: "Dart", color: "#0EA5E9" },
  { icon: SiCplusplus, name: "C++", color: "#7C3AED" },
  { icon: SiFirebase, name: "Firebase", color: "#F59E0B" },
  { icon: SiFirebase, name: "Firestore", color: "#FB923C" },
  { icon: SiNumpy, name: "NumPy", color: "#3B82F6" },
  { icon: SiPandas, name: "Pandas", color: "#7C3AED" },
  { icon: SiScikitlearn, name: "Scikit-Learn", color: "#F97316" },
  { icon: SiKaggle, name: "Kaggle", color: "#06B6D4" },
  { icon: SiAnaconda, name: "Anaconda", color: "#22C55E" },
  { icon: SiAndroidstudio, name: "Android Studio", color: "#22C55E" },
  { icon: Code2, name: "GetX", color: "#8B5CF6" },
  { icon: Code2, name: "REST APIs", color: "#EC4899" },
  { icon: Code2, name: "MVVM", color: "#14B8A6" },
  { icon: Code2, name: "MVC", color: "#6366F1" },
  { icon: SiGit, name: "Git", color: "#F97316" },
  { icon: SiGithub, name: "GitHub", color: "#A855F7" },
  { icon: SiGooglemaps, name: "Google Maps", color: "#22C55E" },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.96]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => setMounted(true), []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">

      {/* Scroll progress bar */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary z-[100]"
      />

      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[120px]" />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      {/* Dot grid background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl border-b border-border/30 bg-background/70">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono font-bold text-xl tracking-tighter cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            AR<span className="text-primary">.</span>
          </motion.div>

          {/* Desktop nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex gap-1 items-center"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-foreground/5 transition-all font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="w-px h-5 bg-border/60 mx-2" />
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                data-testid="button-theme-toggle"
                className="p-2 rounded-lg hover:bg-foreground/5 transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </motion.div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/30 mt-4 pt-4 pb-2 flex flex-col gap-1"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-3 text-sm text-left text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-24 relative z-10">

        {/* ── HERO ── */}
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="min-h-[88vh] flex flex-col justify-center"
        >
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-16">

            {/* Text */}
            <div className="flex-1 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-mono"
              >
                <Sparkles size={13} />
                Actively Looking for Work
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-[clamp(3rem,10vw,7rem)] font-extrabold tracking-tighter leading-[0.9] bg-gradient-to-br from-foreground via-foreground to-foreground/50 bg-clip-text text-transparent"
              >
                Ali<br />Raza
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="flex flex-wrap gap-3"
              >
                <span className="px-4 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/25 font-semibold text-sm">Flutter Developer</span>
                <span className="px-4 py-1.5 rounded-full bg-secondary/15 text-secondary border border-secondary/25 font-semibold text-sm">AI / ML</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-muted-foreground text-lg leading-relaxed max-w-lg"
              >
                Flutter Developer passionate about crafting pixel-perfect, high-performance cross-platform mobile apps. I build with Flutter and Dart using clean architecture, GetX state management, REST APIs, Firebase, and Google Maps integrations, turning ideas into polished, production-ready apps. I also work with AI/ML, applying machine learning algorithms to solve real-world problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <a
                  href="mailto:ar2613811@gmail.com"
                  data-testid="link-email"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail size={16} className="group-hover:scale-110 transition-transform" />
                  ar2613811@gmail.com
                </a>
                <a
                  href="https://github.com/AliRaza-Dev678/"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-github"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Github size={16} className="group-hover:scale-110 transition-transform" />
                  github.com/AliRaza-Dev678
                </a>
                <a
                  href="https://www.linkedin.com/in/ali-raza-597b013b0/"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-linkedin"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                  linkedin.com/in/ali-raza
                </a>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} /> Multan, Pakistan
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone size={16} /> +92 324 5892281
                </span>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-3 pt-2"
              >
                <a
                  href="https://github.com/AliRaza-Dev678/"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="button-view-github"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                >
                  <SiGithub size={16} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ali-raza-597b013b0/"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="button-view-linkedin"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A66C2] text-white font-semibold text-sm hover:bg-[#0A66C2]/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#0A66C2]/20"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <button
                  onClick={() => scrollTo("#projects")}
                  data-testid="button-see-projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-semibold hover:bg-foreground/5 transition-all hover:scale-105 active:scale-95"
                >
                  See Projects <ArrowUpRight size={15} />
                </button>
              </motion.div>
            </div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex-shrink-0 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent blur-2xl" />
                <div className="absolute -inset-[1px] rounded-[1.5rem] bg-gradient-to-br from-primary/40 to-secondary/40" />
                <div className="relative w-52 h-64 md:w-64 md:h-80 rounded-[1.5rem] overflow-hidden">
                  <img
                    src={profilePic}
                    alt="Ali Raza"
                    data-testid="img-profile"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {STATS.map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-card border border-card-border text-center hover:border-primary/30 transition-colors">
                <div className="text-3xl font-extrabold text-primary tracking-tight">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── EXPERIENCE ── */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-32 space-y-12"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <Briefcase size={18} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                role: "AI/ML Developer Intern",
                company: "DeveloperHub",
                location: "Islamabad",
                date: "2025",
                desc: "Built cross-platform mobile applications using Flutter & Dart with GetX state management and REST API integrations. Also implemented real-world ML algorithms under the supervision of senior AI engineers.",
                color: "primary",
              },
              {
                role: "AI/ML Developer Intern",
                company: "CodeAlpha",
                location: "Remote",
                date: "2025",
                desc: "Delivered Flutter mobile apps featuring clean architecture, Firebase integration, and REST APIs. Complemented app development with ML algorithm implementation and data pipeline projects.",
                color: "secondary",
              },
            ].map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative p-7 rounded-2xl bg-card border border-card-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="text-muted-foreground mt-1 font-medium">
                      {job.company} <span className="text-muted-foreground/50">·</span> {job.location}
                    </p>
                  </div>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium border border-primary/20">
                    {job.date}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── PROJECTS ── */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-32 space-y-12"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <Code2 size={18} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1" />
          </div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`group relative flex flex-col p-7 rounded-2xl border transition-all duration-300 hover:shadow-2xl overflow-hidden ${
                    project.featured
                      ? "bg-gradient-to-br from-primary/8 to-secondary/5 border-primary/30 hover:border-primary/60 md:col-span-2 hover:shadow-primary/10"
                      : "bg-card border-card-border hover:border-primary/30 hover:shadow-primary/5"
                  }`}
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/25 text-primary text-xs font-mono font-semibold">
                      <Sparkles size={11} /> Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative flex-1 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl border ${project.featured ? "bg-primary/15 border-primary/30 text-primary" : "bg-foreground/5 border-border text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors"}`}>
                        <Icon size={22} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold leading-tight group-hover:text-primary transition-colors ${project.featured ? "text-2xl" : "text-xl"}`}>
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">{project.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-foreground/5 text-muted-foreground border border-border/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-6 pt-5 border-t border-border/40">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`link-project-github-${i}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      <SiGithub size={16} />
                      View on GitHub
                      <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* ── SKILLS ── */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-32 space-y-12"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <Terminal size={18} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1" />
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {SKILLS.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-card border border-card-border hover:border-primary/40 transition-all duration-200 cursor-default hover:shadow-lg hover:shadow-primary/5"
                >
                  <Icon size={28} style={{ color: skill.color }} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Soft Skills */}
          <div className="pt-6 space-y-4">
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Problem Solving", color: "bg-primary/10 text-primary border-primary/20" },
                { label: "Team Collaboration", color: "bg-secondary/10 text-secondary border-secondary/20" },
                { label: "Fast Learner", color: "bg-primary/10 text-primary border-primary/20" },
                { label: "Attention to Detail", color: "bg-secondary/10 text-secondary border-secondary/20" },
                { label: "Time Management", color: "bg-primary/10 text-primary border-primary/20" },
                { label: "Adaptability", color: "bg-secondary/10 text-secondary border-secondary/20" },
                { label: "Critical Thinking", color: "bg-primary/10 text-primary border-primary/20" },
                { label: "Communication", color: "bg-secondary/10 text-secondary border-secondary/20" },
              ].map((skill, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-full border text-sm font-medium ${skill.color}`}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="px-5 py-3 rounded-xl bg-card border border-card-border flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-medium text-sm">English — Professional</span>
            </div>
            <div className="px-5 py-3 rounded-xl bg-card border border-card-border flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-medium text-sm">Urdu — Native / Fluent</span>
            </div>
          </div>
        </motion.section>

        {/* ── EDUCATION & COURSES ── */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-32 grid md:grid-cols-2 gap-12"
        >
          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  degree: "BS Software Engineering",
                  spec: "Specialization in Flutter App Development and AI/ML",
                  school: "Islamia University Bahawalpur, Pakistan",
                  period: "2023 — 2027",
                  active: true,
                },
                {
                  degree: "FSc Pre-Engineering",
                  spec: null,
                  school: "Kips College",
                  period: "2021 — 2023",
                  active: false,
                },
              ].map((edu, i) => (
                <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border">
                  <div className={`absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full border-2 ${edu.active ? "bg-primary border-primary" : "bg-background border-border"}`} />
                  <div className="p-6 rounded-2xl bg-card border border-card-border hover:border-primary/30 transition-colors">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <h3 className="text-lg font-bold">{edu.degree}</h3>
                      <span className="text-xs font-mono text-muted-foreground shrink-0">{edu.period}</span>
                    </div>
                    {edu.spec && <p className="text-primary font-semibold text-sm mt-1">{edu.spec}</p>}
                    <p className="text-muted-foreground text-sm mt-2">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                <BookOpen size={18} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
            </div>
            <ul className="space-y-3">
              {[
                "Programming Fundamentals in C++ & DSA (IUB)",
                "Python Crash Course — Programming with Mosh",
                "Intro to Machine Learning — Codanics",
                "Machine Learning Algorithms — Sidarthan",
                "Flutter 2022 BootCamp — Tech Brothers (Asif Taj)",
              ].map((course, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <span className="text-xs font-mono font-bold">{i + 1}</span>
                  </div>
                  <span className="text-sm font-medium">{course}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* ── FOOTER ── */}
        <footer className="mt-32 pt-12 border-t border-border/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold tracking-tight">Ali Raza<span className="text-primary">.</span></p>
              <p className="text-muted-foreground text-sm mt-1">Flutter Developer & AI/ML Engineer</p>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:ar2613811@gmail.com"
                className="p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/AliRaza-Dev678/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ali-raza-597b013b0/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-border hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 transition-all text-muted-foreground hover:text-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="tel:+923245892281"
                className="p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Ali Raza. All rights reserved.</p>
          </div>
        </footer>

      </main>
    </div>
  );
}
