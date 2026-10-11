import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Database, 
  Terminal, 
  Server, 
  Award, 
  GraduationCap, 
  Briefcase, 
  ExternalLink, 
  ChevronRight, 
  Layers, 
  Search, 
  CheckCircle2, 
  Send, 
  Cpu, 
  BookOpen, 
  Menu, 
  X,
  Sparkles,
  Trophy
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchSkill, setSearchSkill] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  // Handle contact form input
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setContactSubmitted(true);
      setTimeout(() => {
        setContactSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  const skillsData = [
    { name: 'Java', category: 'languages', level: 'Advanced', icon: 'java' },
    { name: 'JavaScript', category: 'languages', level: 'Intermediate', icon: 'js' },
    { name: 'C Language', category: 'languages', level: 'Intermediate', icon: 'c' },
    { name: 'PHP', category: 'languages', level: 'Intermediate', icon: 'php' },
    
    { name: 'Spring Boot', category: 'frameworks', level: 'Advanced', icon: 'spring' },
    { name: 'Spring Framework', category: 'frameworks', level: 'Intermediate', icon: 'spring' },
    { name: 'ASP.NET', category: 'frameworks', level: 'Basic', icon: 'dotnet' },
    
    { name: 'React.js', category: 'frontend', level: 'Intermediate', icon: 'react' },
    { name: 'HTML5 / CSS3', category: 'frontend', level: 'Advanced', icon: 'html' },
    { name: 'Bootstrap', category: 'frontend', level: 'Intermediate', icon: 'bootstrap' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'Intermediate', icon: 'tailwind' },

    { name: 'MySQL', category: 'databases', level: 'Advanced', icon: 'mysql' },
    { name: 'SQL Server', category: 'databases', level: 'Intermediate', icon: 'sql' },

    { name: 'Data Structures & Algorithms', category: 'core', level: 'Advanced (500+ Solved)', icon: 'dsa' },
    { name: 'Object-Oriented Programming (OOP)', category: 'core', level: 'Advanced', icon: 'oop' },
    { name: 'DBMS', category: 'core', level: 'Advanced', icon: 'dbms' },
    { name: 'Computer Networks', category: 'core', level: 'Intermediate', icon: 'network' },
    { name: 'Cyber Security', category: 'core', level: 'Basic', icon: 'security' },

    { name: 'Git & GitHub', category: 'tools', level: 'Advanced', icon: 'git' },
    { name: 'VS Code', category: 'tools', level: 'Advanced', icon: 'vscode' },
    { name: 'Postman / API Testing', category: 'tools', level: 'Intermediate', icon: 'postman' },
  ];

  const filteredSkills = skillsData.filter(skill => {
    const matchesTab = activeTab === 'all' || skill.category === activeTab;
    const matchesSearch = skill.name.toLowerCase().includes(searchSkill.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const projects = [
    {
      id: 'quiz-tech',
      title: 'Quiz Tech',
      subtitle: 'Interactive Learning & Assessment Web App',
      period: 'Nov 2024 - Feb 2025',
      category: 'Java / Web',
      tech: ['Java', 'JSP', 'Servlet', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      description: 'An interactive web-based assessment platform developed to streamline learning and automate quiz management.',
      highlights: [
        'Automated question management, dynamic test scoring, and real-time feedback delivery.',
        'Designed modular MVC architecture utilizing Java Servlets and JSP for request handling.',
        'Structured relational MySQL database schema ensuring high performance and data integrity.'
      ],
      link: '#',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'e-rto',
      title: 'E-RTO System',
      subtitle: 'Digital Regional Transport Office Management',
      period: 'Jun 2024 - Aug 2024',
      category: '.NET / Enterprise',
      tech: ['C#', 'ASP.NET', 'HTML', 'CSS', 'JavaScript', 'SQL Server 2008'],
      description: 'A comprehensive government portal simulator designed to maintain and service RTO record workflows digitally.',
      highlights: [
        'Digitized workflows for Learner License (LL), Driving License (DL), and vehicle registration.',
        'Implemented secure user authentication and record management modules.',
        'Engineered complex SQL Server stored procedures for rapid data querying.'
      ],
      link: '#',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'blood-bank',
      title: 'Blood Banking & Donation System',
      subtitle: 'Real-time Healthcare Blood Inventory Tracker',
      period: 'Feb 2024 - Apr 2024',
      category: 'PHP / Database',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML/CSS'],
      description: 'A critical health services platform providing real-time information regarding blood availability and donor connections.',
      highlights: [
        'Created donor registration and live inventory filter mechanisms for swift emergency response.',
        'Designed responsive user interface accessible across low-end mobile devices.',
        'Built dynamic MySQL query backend for precise blood group matching.'
      ],
      link: '#',
      color: 'from-rose-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-xl shadow-lg shadow-cyan-500/20">
                DB
              </div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Denish Butani
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all shadow-sm">
                Connect
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">About</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">Experience</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">Skills</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">Projects</a>
            <a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">Education</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-cyan-400 font-semibold">Connect</a>
          </div>
        )}
      </nav>

      {}
      <section id="about" className="relative z-10 pt-16 pb-20 md:pt-28 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles size={14} /> Ready for Engineering Roles
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">Denish Butani</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-slate-300 font-medium">
              Software Developer <span className="text-cyan-400">|</span> Java & Spring Boot Specialist
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Detail-oriented Computer Applications graduate with a strong foundation in backend development, multithreaded architecture, and full-stack web applications. Solved <span className="text-cyan-400 font-semibold">500+ DSA problems</span> on LeetCode with proven ability in modern Java frameworks and databases.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                <Trophy size={14} className="text-yellow-400" /> 500+ LeetCode DSA
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                <GraduationCap size={14} className="text-cyan-400" /> BCA CGPA: 8.53
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                <MapPin size={14} className="text-rose-400" /> Gujarat, India
              </div>
            </div>

            {/* Social & Direct Contact Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a 
                href="mailto:denishbutani159@gmail.com" 
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all flex items-center gap-2 text-sm"
              >
                <Mail size={18} /> Get In Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-800 hover:text-white transition-all text-sm flex items-center gap-2"
              >
                View Works <ChevronRight size={16} />
              </a>
            </div>

            {/* Direct Links */}
            <div className="flex items-center space-x-5 pt-2 text-slate-400">
              <a href="https://linkedin.com/in/denish-butani" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-xs">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://leetcode.com/denishbutani" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-xs">
                <Code2 size={18} /> LeetCode
              </a>
              <a href="https://github.com/denishbutani" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-xs">
                <Github size={18} /> GitHub
              </a>
              <a href="tel:+919978333853" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-xs">
                <Phone size={18} /> Call Me
              </a>
            </div>
          </div>

          {/* Code Highlight Card Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/60 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">DeveloperProfile.java</span>
              </div>

              <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
                <p><span className="text-purple-400">public class</span> <span className="text-yellow-300">DenishButani</span> &#123;</p>
                <p className="pl-4"><span className="text-purple-400">private String</span> role = <span className="text-emerald-400">"Java Backend Engineer"</span>;</p>
                <p className="pl-4"><span className="text-purple-400">private String[]</span> coreTech = &#123;</p>
                <p className="pl-8 text-emerald-400">"Java", "Spring Boot", "MySQL", "React"</p>
                <p className="pl-4">&#125;;</p>
                <p className="pl-4"><span className="text-purple-400">private int</span> leetCodeSolved = <span className="text-amber-400">500</span>;</p>
                <br />
                <p className="pl-4"><span className="text-purple-400">public boolean</span> <span className="text-blue-400">isReadyToBuild</span>() &#123;</p>
                <p className="pl-8 text-purple-400">return <span className="text-cyan-300">true</span>;</p>
                <p className="pl-4">&#125;</p>
                <p>&#125;</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 size={14} /> Open to Work
                </span>
                <span>Bagasara, Gujarat, India</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {}
      <section id="experience" className="relative z-10 py-16 bg-slate-900/50 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Work Experience</h2>
            <p className="text-3xl font-extrabold text-white">Hands-on Software Internship</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-8 space-y-8 ml-2 sm:ml-4">
              
              <div className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-all shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        Cognifyz Technologies
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          Java Intern
                        </span>
                      </h3>
                      <p className="text-slate-400 text-sm font-medium">Java Development Intern • Maharashtra, India</p>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 w-fit">
                      May 2025 - Jun 2025
                    </span>
                  </div>

                  <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
                    <li className="flex items-start gap-2.5">
                      <ChevronRight size={18} className="text-cyan-400 shrink-0 mt-1" />
                      <span>Mastered Java fundamentals, advanced multithreading principles, and robust enterprise framework concepts.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ChevronRight size={18} className="text-cyan-400 shrink-0 mt-1" />
                      <span>Built a high-performance multi-threaded Java application demonstrating concurrency models, synchronized blocks, explicit locks, and thread pools.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ChevronRight size={18} className="text-cyan-400 shrink-0 mt-1" />
                      <span>Developed a real-time network chat application utilizing Java Socket programming and Java Non-blocking I/O (NIO) libraries.</span>
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Java', 'Multithreading', 'Java Socket', 'Java NIO', 'Concurrency', 'OOP'].map((tech, i) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {}
      <section id="skills" className="relative z-10 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Technical Competencies</h2>
            <p className="text-3xl font-extrabold text-white">Skills & Toolkit</p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search skill (e.g. Java)..."
              value={searchSkill}
              onChange={(e) => setSearchSkill(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'All Skills' },
            { id: 'languages', label: 'Languages' },
            { id: 'frameworks', label: 'Frameworks' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'databases', label: 'Databases' },
            { id: 'core', label: 'Core CS' },
            { id: 'tools', label: 'Tools' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id 
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' 
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/40 hover:scale-[1.01] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                  <Terminal size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 text-sm group-hover:text-cyan-300 transition-colors">{skill.name}</h4>
                  <p className="text-xs text-slate-500">{skill.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="projects" className="relative z-10 py-16 bg-slate-900/40 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Portfolio Showcase</h2>
            <p className="text-3xl font-extrabold text-white">Featured Projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all shadow-xl flex flex-col group"
              >
                {/* Header Banner */}
                <div className={`h-3 bg-gradient-to-r ${project.color}`} />
                
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="font-mono text-cyan-400">{project.category}</span>
                      <span>{project.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                      {project.title}
                    </h3>

                    <p className="text-xs font-medium text-slate-400 mb-4">{project.subtitle}</p>

                    <p className="text-slate-300 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {project.highlights.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800 mb-4">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <Layers size={14} /> Detailed Spec
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800"
            >
              <X size={20} />
            </button>

            <div>
              <span className="text-xs font-mono text-cyan-400">{selectedProject.period}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
              <p className="text-slate-400 text-sm">{selectedProject.subtitle}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Overview</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.description}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Deliverables</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <ChevronRight size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      <section id="education" className="relative z-10 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h4 className="font-bold text-white text-base">Bachelor of Computer Application (BCA)</h4>
                  <span className="text-xs font-mono px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg shrink-0">
                    CGPA: 8.53
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-3">SMT. Bhanumati Vrujlal Dhanak Sci & Com College | Jun 2022 - Apr 2025</p>
                <div className="text-xs text-slate-300 space-y-1">
                  <p className="font-semibold text-slate-400">Relevant Coursework:</p>
                  <p className="text-slate-300">Data Structures, DBMS, Computer Networks, Cyber Security</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-white text-sm">12th Science (GHSEB)</h4>
                  <span className="text-xs font-mono text-slate-400">77.5%</span>
                </div>
                <p className="text-xs text-slate-500">Shree Adarsh HSC School | Jun 2019 - Aug 2021</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-white text-sm">10th Standard (GSEB)</h4>
                  <span className="text-xs font-mono text-slate-400">77.0%</span>
                </div>
                <p className="text-xs text-slate-500">Shree Nalanda Shaikshnik School | May 2018 - Mar 2019</p>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Award size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications & Metrics</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between hover:border-slate-700 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 text-yellow-400 flex items-center justify-center font-bold">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">500+ DSA Problems Solved</h4>
                    <p className="text-xs text-slate-400">LeetCode Competitive Coding</p>
                  </div>
                </div>
                <a href="https://leetcode.com/denishbutani" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                  <ExternalLink size={16} />
                </a>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center space-x-4 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                  AI
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Artificial Intelligence & Machine Learning</h4>
                  <p className="text-xs text-slate-400">Infosys Certification</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center space-x-4 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  SB
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Java Spring Boot Framework</h4>
                  <p className="text-xs text-slate-400">Infosys Certification</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center space-x-4 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                  Py
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Android App Development with Python</h4>
                  <p className="text-xs text-slate-400">Great Learning Academy</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {}
      <section id="contact" className="relative z-10 py-16 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              <div className="md:col-span-5 space-y-6">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Get In Touch</h2>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Let's Connect</h3>
                  <p className="text-slate-400 text-sm mt-2">
                    Open for Software Engineering opportunities and technical collaborations.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <a href="mailto:denishbutani159@gmail.com" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors text-sm">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail size={16} />
                    </div>
                    <span>denishbutani159@gmail.com</span>
                  </a>

                  <a href="tel:+919978333853" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors text-sm">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                      <Phone size={16} />
                    </div>
                    <span>+91 99783 33853</span>
                  </a>

                  <div className="flex items-center space-x-3 text-slate-300 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                      <MapPin size={16} />
                    </div>
                    <span>Bagasara, Amreli, Gujarat, India</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-7">
                {contactSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-slate-900/60 border border-emerald-500/30 rounded-2xl">
                    <CheckCircle2 size={48} className="text-emerald-400 mb-3" />
                    <h4 className="text-xl font-bold text-white mb-1">Message Received!</h4>
                    <p className="text-slate-400 text-sm">Thank you for reaching out, Denish will respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Message</label>
                      <textarea 
                        name="message" 
                        rows="4" 
                        required 
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Hi Denish, I would like to talk about an opportunity..."
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 text-sm"
                    >S
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                )}
              </div>S

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Denish Butani. Built with React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}