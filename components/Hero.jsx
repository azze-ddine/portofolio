import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 rounded-full border-4 border-cyan-400 overflow-hidden">
            <Image
              src="/profile.png"
              alt="Ayman Gassi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm">
            Full-Stack Developer
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Azzeddine <span className="text-cyan-400">SAF</span>
          </h1>

          <p className="text-slate-400 max-w-xl mb-6">
            Software Engineer crafting smart, secure, and high-performance
            applications. From full-stack development to reactive programming,
            and modern UI development to provide strong and scalable solutions.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition"
            >
              Contact Me
            </a>

            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 border border-slate-600 rounded-lg hover:border-cyan-400 transition"
            >
              Download CV
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
