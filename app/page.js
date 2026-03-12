'use client'

import Image from "next/image"
import { useState } from "react"

const profile = {
  name: "Fasil Ali",
  bio: "Full Stack Developer in Progress",
  tagline: "Building projects & learning modern web tech",
  profileImage: "/profile.jpg",
  theme: "dark"
}

const links = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/skinder226",
    icon: "🔗",
    color: "from-gray-600 to-gray-700"
  },
  {
    id: 4,
    name: "LinkedIn",
    url: "#",
    icon: "💼",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 5,
    name: "Instagram",
    url: "#",
    icon: "📸",
    color: "from-pink-500 to-orange-500"
  },
  {
    id: 6,
    name: "Twitter",
    url: "#",
    icon: "𝕏",
    color: "from-gray-800 to-gray-900"
  }
]

const socialLinks = [
  { icon: "🔗", label: "GitHub", url: "https://github.com/skinder226" },
  { icon: "💼", label: "LinkedIn", url: "#" },
  { icon: "📸", label: "Instagram", url: "#" },
  { icon: "𝕏", label: "Twitter", url: "#" }
]

export default function Home() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white p-4 sm:p-6">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="mx-auto flex min-h-screen w-full max-w-115 items-center justify-center">
        <section className="w-full rounded-4xl border border-white/15 bg-slate-900/70 p-6 shadow-[0_30px_80px_rgba(2,12,32,0.65)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col items-center">
            <div className="relative mb-5">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-300 to-blue-400 blur-lg opacity-60" />
              <Image
                src={profile.profileImage}
                width={116}
                height={116}
                className="relative rounded-full border-4 border-white/20 object-cover"
                alt="profile"
              />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
              {profile.bio}
            </p>
            <p className="mt-3 max-w-[30ch] text-center text-sm leading-relaxed text-slate-300">
              {profile.tagline}
            </p>

            <div className="mt-5 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300/10"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-slate-800/70 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-slate-800"
              >
                <div className="absolute inset-0 bg-linear-to-r from-cyan-300/0 via-cyan-300/10 to-cyan-300/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg">
                      {link.icon}
                    </span>
                    <span className="text-base font-semibold tracking-wide text-white">{link.name}</span>
                  </div>
                  <span className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={copyToClipboard}
            className="mt-6 w-full rounded-2xl border border-cyan-300/40 bg-linear-to-r from-cyan-400/20 to-blue-400/20 py-3 font-semibold tracking-wide text-cyan-100 transition-all duration-300 hover:border-cyan-300/70 hover:from-cyan-400/30 hover:to-blue-400/30"
          >
            {copied ? "Copied to clipboard" : "Share Profile"}
          </button>

          <p className="mt-7 text-center text-xs tracking-wide text-slate-400">
            © 2026 Skinder OP
          </p>
        </section>
      </div>
    </main>
  )
}