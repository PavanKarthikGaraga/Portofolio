import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <main className="text-center space-y-8 max-w-2xl">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
            Hi, I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Garaga Pavan Karthik
            </span>
          </h1>
          <div className="text-xl md:text-2xl font-light text-gray-300">
            <span className="inline-block animate-typewriter">
              Portfolio coming soon
            </span>
            {/* <span className="inline-block w-1 h-6 bg-white ml-1 animate-blink"></span> */}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center items-center mt-12">
          <a
            href="https://github.com/pavankarthikgaraga"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-float"
            aria-label="GitHub Profile"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              width={32}
              height={32}
              className="brightness-0 invert"
            />
          </a>
          <a
            href="https://linkedin.com/in/pavankarthikgaraga"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-float-delay"
            aria-label="LinkedIn Profile"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={32}
              height={32}
              className="brightness-0 invert"
            />
          </a>
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-medium text-gray-300">
              Currently building something amazing...
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
