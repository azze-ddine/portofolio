import SectionHeader from "../ui/SectionHeader";
export default function EducationSection({ data }) {
  return (
    <section id="education" className="py-24 scroll-mt-24">
      <SectionHeader 
      badge="Education"
      title="Educational Background"
      subtitle="My academic journey in computer science and software engineering" />
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200"></div>
        {data.map((edu, index) => (
          <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="w-1/2"></div>
            <div className="absolute left-1/2 -translate-x-1/2 z-10 bg-white border-4 border-cyan-100 p-2 rounded-full text-cyan-500">
              <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
            </div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
              <span className="text-slate-400 font-mono text-sm">{edu.year}</span>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-2 hover:shadow-md transition">
                <h4 className="font-bold text-lg">{edu.degree}</h4>
                <p className="text-slate-500">{edu.major}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}