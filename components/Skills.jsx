"use client";

const skills = {
  Backend: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JPA / Hibernate",
    "REST APIs",
  ],
  Frontend: ["Angular", "TypeScript", "HTML", "CSS"],
  Database: ["PostgreSQL", "MySQL"],
  Tools: ["Git", "Docker", "Linux"],
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      {Object.entries(skills).map(([category, list]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {list.map(skill => (
              <span
                key={skill}
                className="border border-gray-700 px-4 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
