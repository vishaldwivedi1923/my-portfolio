
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Sun, Moon, 
  GraduationCap, BadgeCheck, Briefcase, Code, Sparkles, Languages, Calendar
} from "lucide-react";


 const RESUME_URL = "/Vishal_Dwivedi_Resume.pdf"; // update path if needed

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certs", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const skills = {
  Programming: ["HTML5", "CSS3", "JavaScript", "Core Java", "OOP"],
  Frameworks: ["Angular", "React"],
  Tools: ["Git", "VS Code", "Chrome DevTools"],
  Concepts: ["Responsive Design", "Cross-Browser", "API Integration"],
};

const projects = [
  {
    title: "Weather App",
    desc: "Real-time weather using OpenWeather API with clean UI.",
    tags: ["JavaScript", "API", "Responsive"],
    link: "#",
  },
  {
    title: "WhatsApp QR Code Generator",
    desc: "Create WhatsApp click-to-chat QR with custom message.",
    tags: ["JavaScript", "QR", "UX"],
    link: "#",
  },
  {
    title: "Tic Tac Toe",
    desc: "Classic game with smooth animations and mobile-first UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Fully responsive personal site with dark mode & resume download.",
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "#",
  },
];

const experience = [
  {
    role: "Front-End Developer Intern",
    org: "—",
    period: "Jan 2025 – Present",
    points: [
      "Developed responsive websites with mobile-first approach.",
      "Built interactive components in Angular & React.",
      "Optimized performance and page load times.",
      "Integrated third‑party APIs for real-time data.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech — Computer Science Engineering",
    school: "Dr. A P J Abdul Kalam Technical University, Lucknow",
    year: "2023",
    meta: "CGPA: 7.68 (73%)",
  },
  { degree: "Intermediate", school: "UP Board", year: "2018", meta: "64.6%" },
  { degree: "High School", school: "UP Board", year: "2016", meta: "86.4%" },
];

const certs = [
  {
    name: "Responsive Web Design",
    by: "freeCodeCamp",
  },
  { name: "JavaScript Algorithms & Data Structures", by: "freeCodeCamp" },
];

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Glimmer = ({ className = "" }) => (
  <div
    className={`pointer-events-none absolute inset-0 rounded-3xl opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_0%,#000,transparent)] ${className}`}
    style={{ background: "radial-gradient(1200px 600px at -10% -10%, rgba(99,102,241,.15), transparent), radial-gradient(800px 400px at 110% -10%, rgba(16,185,129,.12), transparent)" }}
  />
);

const Chip = ({ children }) => (
  <span className="inline-block rounded-full border px-3 py-1 text-sm backdrop-blur-sm bg-white/5 border-white/10">
    {children}
  </span>
);

const Section = ({ id, title, icon, children, className = "" }) => (
  <section id={id} className={`relative scroll-mt-24 py-16 md:py-24 ${className}`}>
    <FadeIn>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center gap-3">
          {icon}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        </div>
        {children}
      </div>
    </FadeIn>
  </section>
);

const Nav = ({ dark, setDark }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button className="group flex items-center gap-2" onClick={() => handleNav("home")}>
          <Sparkles className="h-6 w-6" />
          <span className="text-lg font-semibold tracking-tight">Vishal Dwivedi</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => handleNav(n.id)}
              className="rounded-full px-3 py-2 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {n.label}
            </button>
          ))}
          <button
            onClick={() => setDark((d) => !d)}
            className="ml-2 rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            className="rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button onClick={() => setOpen((o) => !o)} className="rounded-full px-3 py-2 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800">
            Menu
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-neutral-200/60 dark:border-neutral-800"
          >
            <div className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap gap-2">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => handleNav(n.id)}
                  className="rounded-full px-3 py-2 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute -top-24 left-1/2 h-72 w-[110vw] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-r from-indigo-400/25 via-fuchsia-400/20 to-emerald-400/20" />
    </div>

    <div className="mx-auto max-w-6xl px-4 pt-16 md:pt-24 pb-12 md:pb-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <FadeIn>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500 bg-clip-text text-transparent"> Vishal Dwivedi</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              A passionate Front-End Developer with a strong foundation in HTML, CSS, JavaScript, React, and Angular.
              I build responsive, user-friendly, and interactive web applications. I also have a good understanding of Core Java and OOP concepts.My goal is to grow as a Full Stack Developer, mastering front-end and back-end technologies to build scalable and high-performance applications. I’m always eager to learn new tools, write clean code, and solve real-world problems through technology.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-sm font-medium hover:bg-indigo-500/20">
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a href="mailto:1234vishaldwivedi@gmail.com" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <Mail className="h-4 w-4" /> Hire Me
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-300">
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +91 7817995812</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Surat, Gujarat</span>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://www.linkedin.com/in/vishal-dwivedi-32510524b" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>

        {/* <FadeIn delay={0.1}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square w-72 md:w-96 overflow-hidden rounded-3xl border border-white/10 shadow-xl">
              <Glimmer />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                  className="h-64 w-64 rounded-full border border-dashed border-white/20"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Code className="mx-auto h-14 w-14" />
                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-neutral-500">Front‑End Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn> */}
        {/* Right Side: Profile Image */}
        <FadeIn delay={0.1}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <img
              src="/image_new.jpeg" // <-- Replace with your image in public folder
              alt="Vishal Dwivedi"
              className="w-72 md:w-96 rounded-3xl border border-white/10 shadow-xl object-cover"
            />
          </motion.div>
        </FadeIn>

      </div>
    </div>
  </section>
);

const About = () => (
  <Section id="about" title="About" icon={<BadgeCheck className="h-6 w-6" />}> 
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
            <span className="font-semibold"></span> Hi, I’m Vishal Dwivedi, a passionate Front-End Developer with a strong foundation in HTML, CSS, JavaScript, React, and Angular. I completed my B.Tech in Computer Science Engineering from Dr. A.P.J. Abdul Kalam Technical University, Lucknow (U.P.) in 2023 with 73% (7.68 CGPA).
          Currently, I’m working as a Front-End Development Intern, where I build responsive, user-friendly, and interactive web applications. I also have a good understanding of Core Java and OOP concepts.
           My goal is to grow as a Full Stack Developer, mastering front-end and back-end technologies to build scalable and high-performance applications. I’m always eager to learn new tools, write clean code, and solve real-world problems through technology.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Chip className="">Mobile‑First</Chip>
          <Chip>Performance</Chip>
          <Chip>Clean Architecture</Chip>
          <Chip>Agile</Chip>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 p-5 backdrop-blur-sm bg-white/5">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> 1234vishaldwivedi@gmail.com</div>
          <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 7817995812</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Surat, Gujarat</div>
          <div className="flex items-center gap-2"><Languages className="h-4 w-4" /> English, Hindi</div>
          <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 15 Aug 2002</div>
        </div>
        <div className="mt-4 flex gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</a>
          <a href="https://www.linkedin.com/in/vishal-dwivedi-32510524b" target="_blank" rel="noreferrer" className="rounded-full border px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</a>
        </div>
      </div>
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills" title="Skills" icon={<Code className="h-6 w-6" />}> 
    <div className="grid gap-6 md:grid-cols-2">
      {Object.entries(skills).map(([cat, list], i) => (
        <FadeIn key={cat} delay={i * 0.05}>
          <div className="rounded-2xl border border-white/10 p-5 backdrop-blur-sm bg-white/5">
            <h3 className="mb-3 text-lg font-semibold">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" title="Experience" icon={<Briefcase className="h-6 w-6" />}> 
    <div className="space-y-6">
      {experience.map((e, idx) => (
        <FadeIn delay={idx * 0.05} key={idx}>
          <div className="relative rounded-2xl border border-white/10 p-5 backdrop-blur-sm bg-white/5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">{e.role}</h3>
                <p className="text-sm text-neutral-500">{e.org}</p>
              </div>
              <p className="text-sm text-neutral-500">{e.period}</p>
            </div>
            <ul className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300 list-disc pl-5">
              {e.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </div>
  </Section>
);

const Projects = () => (
  <Section id="projects" title="Projects" icon={<ExternalLink className="h-6 w-6" />}> 
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <FadeIn delay={i * 0.05} key={p.title}>
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm shadow">
            <Glimmer />
            <div className="relative">
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
              <div className="mt-4">
                <a href={p.link} className="inline-flex items-center gap-2 text-sm hover:underline">
                  Visit <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" title="Education" icon={<GraduationCap className="h-6 w-6" />}> 
    <div className="grid gap-6 md:grid-cols-2">
      {education.map((ed, i) => (
        <FadeIn delay={i * 0.05} key={ed.degree}>
          <div className="rounded-2xl border border-white/10 p-5 backdrop-blur-sm bg-white/5">
            <h3 className="text-lg font-semibold">{ed.degree}</h3>
            <p className="text-sm text-neutral-500">{ed.school}</p>
            <div className="mt-2 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
              <Calendar className="h-4 w-4" /> {ed.year}
              {ed.meta && <span className="ml-2">• {ed.meta}</span>}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </Section>
);

const Certs = () => (
  <Section id="certs" title="Certifications" icon={<BadgeCheck className="h-6 w-6" />}> 
    <div className="grid gap-6 md:grid-cols-2">
      {certs.map((c, i) => (
        <FadeIn delay={i * 0.05} key={c.name}>
          <div className="rounded-2xl border border-white/10 p-5 backdrop-blur-sm bg-white/5">
            <h3 className="text-lg font-semibold">{c.name}</h3>
            <p className="text-sm text-neutral-500">{c.by}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Contact" icon={<Mail className="h-6 w-6" />}> 
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-white/10 p-5 backdrop-blur-sm bg-white/5">
        <h3 className="text-lg font-semibold">Let's work together</h3>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          Koi project idea ya opportunity ho to contact karein. Fast replies on email & phone.
        </p>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> 1234vishaldwivedi@gmail.com</div>
          <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 7817995812</div>
        </div>
        <div className="mt-4 flex gap-3">
          <a href="mailto:1234vishaldwivedi@gmail.com" className="rounded-full border px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Email</a>
          <a href="https://www.linkedin.com/in/vishal-dwivedi-32510524b" target="_blank" rel="noreferrer" className="rounded-full border px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</a>
        </div>
      </div>

      <form 
        onSubmit={(e) => { e.preventDefault(); alert("Thanks! I'll get back soon."); }}
        className="md:col-span-2 rounded-2xl border border-white/10 p-5 backdrop-blur-sm bg-white/5"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm">Name</label>
            <input className="w-full rounded-xl border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
          </div>
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <input type="email" className="w-full rounded-xl border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm">Message</label>
            <textarea rows={5} className="w-full rounded-xl border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell me about your project..." />
          </div>
        </div>
        <button className="mt-4 inline-flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-sm font-medium hover:bg-indigo-500/20">
          Send
        </button>
      </form>
    </div>
  </Section>
);

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-indigo-500/20 dark:bg-neutral-900 dark:text-white">
      <Nav dark={dark} setDark={setDark} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certs />
        <Contact />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Vishal Dwivedi. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="mailto:1234vishaldwivedi@gmail.com" className="inline-flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" /> Email</a>
              <a href="tel:+917817995812" className="inline-flex items-center gap-2 hover:underline"><Phone className="h-4 w-4" /> Call</a>
              <a href="https://www.linkedin.com/in/vishal-dwivedi-32510524b" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
