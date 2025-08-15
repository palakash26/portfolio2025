import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FiMapPin, FiAward, FiBriefcase, FiBook } from "react-icons/fi";

export default function ExperiencePage() {
  const data = [
    {
      title: "Present",
      content: (
        <div className="flex gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBook className="w-5 h-5 text-blue-400" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Postgraduate Diploma in Advanced Computing
            </h3>
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <FiMapPin className="w-4 h-4" />
              <span>CDAC SMVITA, Mumbai, IN</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Currently pursuing a Postgraduate Diploma in Advanced Computing
              (PG-DAC) from CDAC SMVITA, Mumbai. Focusing on full-stack
              development, cloud technologies, and hands-on project building.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2024 - Feb 2025",
      content: (
        <div className="flex gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBriefcase className="w-5 h-5 text-blue-400" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Fullstack Developer
            </h3>
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <span className="font-medium">Lazarus Network</span>
              <span>•</span>
              <span>Remote</span>
            </div>
            <div className="space-y-3 text-sm text-neutral-300">
              <p className="leading-relaxed">
                Full-stack development role focusing on building scalable web
                applications and maintaining cloud infrastructure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Developed backend services using Golang and Node.js
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Built responsive frontends with Next.js and React</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Managed AWS EC2 and Google Cloud infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Implemented CI/CD pipelines with GitHub Actions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020-2024",
      content: (
        <div className="flex gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBook className="w-5 h-5 text-blue-400" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Bachelor of Engineering
            </h3>
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <FiMapPin className="w-4 h-4" />
              <span>Pune, IN</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Graduated with BE in Computer Engineering, focusing on software
              development and computer science fundamentals. Developed strong
              problem-solving skills and technical expertise through
              comprehensive coursework and practical projects.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Awards and Honors",
      content: (
        <div className="flex gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiAward className="w-5 h-5 text-blue-400" />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Hackathon Achievements
            </h3>

            {/* Solana Radar Hackathon */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                <a
                  href="https://arena.colosseum.org/projects/explore/netsepio?previous=L3Byb2plY3RzL2V4cGxvcmU_c2VlZD1iNGI0ZTYwYzViNGE0NzkwJnNlYXJjaD1uZXRzZXA&ref=blog.colosseum.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h4 className="text-white font-medium hover:text-blue-400 transition-colors duration-200 inline-flex items-center gap-1">
                    Solana Radar Hackathon 2024
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h4>
                </a>
              </div>
              <div className="pl-5">
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Achieved{" "}
                  <span className="text-blue-400 font-medium">4th place</span>{" "}
                  out of 200+ global teams, demonstrating expertise in
                  blockchain technology and innovative problem-solving.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    Global Competition
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    200+ Teams
                  </span>
                </div>
              </div>
            </div>

            {/* Sui Overflow */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                <h4 className="text-white font-medium">Sui Overflow 2024</h4>
              </div>
              <div className="pl-5">
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Awarded the{" "}
                  <span className="text-blue-400 font-medium">
                    Community Favorite Award
                  </span>{" "}
                  for Mystic Tarot - an innovative Web3 tarot reading platform
                  on the Sui Network, showcasing expertise in blockchain and
                  user-centric design.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    Community Favorite
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    Web3
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    Sui Network
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
