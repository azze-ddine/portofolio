"use client";

const projects = [
  {
    title: "Employee Management System",
    stack: "Spring Boot • Angular • JWT • PostgreSQL",
    description:
      "Enterprise full-stack application with authentication, role-based access, REST APIs, and Angular frontend.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    stack: "Next.js • Tailwind CSS",
    description:
      "Personal portfolio showcasing Java full-stack development skills.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div
            key={project.title}
            className="border border-gray-700 p-6 rounded"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.stack}</p>
            <p className="mt-3">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}export default function Navbar({ darkMode, toggleDarkMode }) {
    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Education", href: "#education" },
        { label: "Certificates", href: "#certificates" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-xl font-bold text-cyan-400">
                    Azzeddine SAF<span className="text-white">.</span>
                </h1>

                {/* Links */}
                <ul className="hidden md:flex gap-8 text-sm">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="hover:text-cyan-400 transition"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Dark Mode Button */}
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full border border-slate-600 hover:border-cyan-400 transition">
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </div>
        </nav>
    );
}

