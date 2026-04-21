"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Bot,
  Brush,
  Code2,
  Gem,
  GitBranch,
  Mail,
  NotebookTabs,
  Link as LinkIcon,
  Newspaper,
  Package,
  PenLine,
  ShieldCheck,
  Sparkle,
  Sparkles,
  SquareArrowOutUpRight,
  Rocket,
  Wrench,
  X,
} from "lucide-react";
import {
  SiGoogle,
  SiNotion,
  SiPython,
  SiCanva,
  SiOpenai,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import dictionary from "@/data/dictionary.json";

type Locale = "jp" | "en";
const BackgroundFX = dynamic(() => import("./_components/BackgroundFX"), {
  ssr: false,
});

const links = [
  { name: "note", icon: PenLine, href: "https://note.com" },
  { name: "Medium", icon: Newspaper, href: "https://medium.com" },
  { name: "Product Hunt", icon: Rocket, href: "https://www.producthunt.com" },
  { name: "LemonSqueezy", icon: Package, href: "https://www.lemonsqueezy.com" },
  { name: "GitHub", icon: GitBranch, href: "https://github.com" },
];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("jp");
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const t = useMemo(() => dictionary[locale], [locale]);

  const toolCards = [
    {
      title: t.tools[0].title,
      description: t.tools[0].description,
      url: "https://komawari-timetable.com/",
      icon: Gem,
      image: "/komawari.png",
      cardClass:
        "border-[#ffb3cd] bg-gradient-to-br from-[#fff3f8]/85 to-[#ffe8f1]/75 hover:shadow-[0_0_32px_rgba(224,17,95,0.35)]",
      iconClass: "text-[#e0115f]",
      urlClass: "text-[#c70039]",
    },
    {
      title: t.tools[1].title,
      description: t.tools[1].description,
      url: "https://tailwind-color-tool.vercel.app/",
      icon: Brush,
      image: "/tailwind.png",
      cardClass:
        "border-[#b5c7ff] bg-gradient-to-br from-[#edf3ff]/85 to-[#dfeaff]/75 hover:shadow-[0_0_32px_rgba(61,102,255,0.35)]",
      iconClass: "text-[#3f63ff]",
      urlClass: "text-[#2f4dcc]",
    },
    {
      title: t.tools[3].title,
      description: t.tools[3].description,
      url: "",
      icon: NotebookTabs,
      image: "/ComingSoon.png",
      cardClass:
        "border-[#c6f3dc] bg-gradient-to-br from-[#edfff5]/85 to-[#dbfce8]/75 hover:shadow-[0_0_32px_rgba(30,171,111,0.35)]",
      iconClass: "text-[#1eab6f]",
      urlClass: "text-[#178758]",
    },
  ];

  const websiteCards = [
    {
      title: t.websites[0].title,
      description: t.websites[0].description,
      url: "https://friendly-it-guide.com/",
      image: "/it-terms-showcase.svg",
      cardClass:
        "border-[#d8c0ff] bg-gradient-to-br from-[#f6efff]/90 to-[#ebe1ff]/80 hover:shadow-[0_0_34px_rgba(137,73,255,0.32)]",
      iconClass: "text-[#8254e8]",
    },
    {
      title: t.websites[1].title,
      description: t.websites[1].description,
      url: "",
      image: "/animated-english-showcase.svg",
      cardClass:
        "border-[#ffd5b3] bg-gradient-to-br from-[#fff6ed]/90 to-[#ffe8d6]/80 hover:shadow-[0_0_34px_rgba(255,145,61,0.28)]",
      iconClass: "text-[#ec8d2f]",
    },
  ];

  const aboutSkillChips = [
    { id: "gas", label: "Google Apps Script", icon: SiGoogle, color: "text-[#ea4335]" },
    { id: "python", label: "Python", icon: SiPython, color: "text-[#3776ab]" },
    { id: "gemini", label: "Gemini / AI", icon: Bot, color: "text-[#d13f7b]" },
    { id: "cursor", label: "Cursor", icon: Code2, color: "text-[#7a4cff]" },
    { id: "notion", label: "Notion", icon: SiNotion, color: "text-[#222222]" },
    { id: "canva", label: "Canva", icon: SiCanva, color: "text-[#00c4cc]" },
    { id: "openai", label: "OpenAI", icon: SiOpenai, color: "text-[#5f8f7a]" },
    { id: "javascript", label: "JavaScript", icon: SiJavascript, color: "text-[#d6b300]" },
    { id: "html", label: "HTML", icon: SiHtml5, color: "text-[#e46a3a]" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_15%_-6%,#ffcade_0%,transparent_32%),radial-gradient(circle_at_86%_8%,#ffc3d8_0%,transparent_34%),linear-gradient(145deg,#fff9fb_0%,#ffe7f1_55%,#ffdbe9_100%)] px-4 py-6 sm:px-8 sm:py-10">
      <BackgroundFX />

      <main className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <Image
              src="/RosyRubylogo2.png"
              alt="RosyRuby logo"
              width={160}
              height={72}
              priority
              className="h-auto"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#7a0835] sm:text-sm">{t.toggleLabel}</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLocale("jp")}
                className={`gem-toggle px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  locale === "jp"
                    ? "bg-gradient-to-br from-[#e0115f] to-[#991245] text-white shadow-[0_0_20px_rgba(224,17,95,0.45)]"
                    : "bg-white/80 text-[#7a0835] hover:text-[#d4af37]"
                }`}
              >
                JP
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`gem-toggle px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  locale === "en"
                    ? "bg-gradient-to-br from-[#e0115f] to-[#991245] text-white shadow-[0_0_20px_rgba(224,17,95,0.45)]"
                    : "bg-white/80 text-[#7a0835] hover:text-[#d4af37]"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </header>

        <section className="glass-card mb-8 rounded-[2rem] border-[#ef88ad] bg-gradient-to-br from-[#ffffffb5] via-[#fff2f7c7] to-[#ffd4e5a8] p-6 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af3778] bg-[#ffeaf2] px-4 py-1 text-xs text-[#7a0835] sm:text-sm">
            <Sparkles className="h-4 w-4" />
            {t.heroBadge}
          </div>
          <h2 className="font-display mt-4 bg-gradient-to-r from-[#e0115f] to-[#c70039] bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
            {t.heroTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6c2142] sm:text-base">
            {t.heroDescription}
          </p>
        </section>

        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[#7a0835]">
            <BadgeCheck className="h-5 w-5 text-[#d4af37]" />
            {t.sections.about}
          </h3>
          <article className="glass-card relative overflow-hidden rounded-[2rem] border border-[#ef88ad] bg-gradient-to-br from-[#fff7fa]/90 to-[#ffe7f1]/78 p-6 sm:p-8">
            <div className="grid items-center gap-6 md:grid-cols-[170px_1fr]">
              <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-2 border-[#d4af3775] bg-gradient-to-br from-[#ffe3ee] to-[#ffd2e5] p-1 shadow-[0_10px_26px_rgba(224,17,95,0.2)]">
                <Image
                  src="/faceup.png"
                  alt="RosyRuby portrait"
                  width={144}
                  height={144}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-display text-2xl text-[#661533] sm:text-3xl">{t.about.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[#6f2a4a] sm:text-base">{t.about.career}</p>
                <p className="mt-5 text-sm font-semibold tracking-wide text-[#8a3559]">
                  {t.about.skillsTitle}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {aboutSkillChips.map((chip) => {
                    const Icon = chip.icon;
                    return (
                      <motion.div
                        key={chip.id}
                        whileHover={{ y: -3, scale: 1.04 }}
                        transition={{ type: "spring", stiffness: 320, damping: 22 }}
                        className="inline-flex items-center gap-2 rounded-2xl border border-[#e7bad0] bg-white/80 px-3 py-2"
                      >
                        <Icon className={`h-4 w-4 ${chip.color}`} />
                        <span className="text-xs font-semibold text-[#7b2b50] sm:text-sm">{chip.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-[#6f2a4a] sm:text-base">
                  {t.about.skills.map((skill) => (
                    <li key={skill}>- {skill}</li>
                  ))}
                </ul>
                <p className="mt-4 inline-flex rounded-full border border-[#d4af37aa] bg-[#fff5df] px-4 py-1.5 text-xs font-semibold text-[#7a4e1c] sm:text-sm">
                  {t.about.fastCoding}
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[#7a0835]">
            <Wrench className="h-5 w-5 text-[#d4af37]" />
            {t.sections.tools}
          </h3>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {toolCards.map((tool) => {
              const ToolIcon = tool.icon;
              const isKomawari = tool.image === "/komawari.png";
              return (
                <article
                  key={tool.title}
                  className={`glass-card shine-card group relative overflow-hidden rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 hover:scale-[1.025] ${tool.cardClass}`}
                >
                  {tool.image && (
                    <div className="mb-3 overflow-hidden rounded-2xl">
                      <Image
                        src={tool.image}
                        alt={tool.title}
                        width={400}
                        height={180}
                        priority={isKomawari}
                        loading={isKomawari ? "eager" : "lazy"}
                        unoptimized={isKomawari}
                        className="h-28 w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="mb-2 flex items-center gap-2">
                    <ToolIcon className={`h-5 w-5 ${tool.iconClass}`} />
                    <h4 className="text-base font-semibold text-[#5f1230] sm:text-lg">{tool.title}</h4>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#6f2a4a]">{tool.description}</p>
                  {tool.url ? (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold transition hover:underline sm:text-sm ${tool.urlClass}`}
                    >
                      <SquareArrowOutUpRight className="h-3.5 w-3.5" />
                      {tool.url}
                    </a>
                  ) : (
                    <p
                      className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold sm:text-sm ${tool.urlClass}`}
                    >
                      <SquareArrowOutUpRight className="h-3.5 w-3.5" />
                      Coming soon
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[#7a0835]">
            <NotebookTabs className="h-5 w-5 text-[#d4af37]" />
            {t.tools[2].title}
          </h3>
          <article className="glass-card shine-card relative overflow-hidden rounded-[2rem] border border-[#c6f3dc] bg-gradient-to-br from-[#edfff5]/90 to-[#dbfce8]/80 p-6 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(30,171,111,0.32)] sm:p-8">
            <div className="mb-3 overflow-hidden rounded-2xl">
              <Image
                src="/Notion.png"
                alt={t.tools[2].title}
                width={400}
                height={180}
                className="h-80 w-full object-cover"
              />
            </div>
            <p className="text-sm leading-6 text-[#285346]">{t.tools[2].description}</p>
            <p className="mt-2 text-sm font-semibold text-[#178758] sm:text-base">
              PV: <span className="font-bold">8100+</span> / DL: <span className="font-bold">3500+</span>
            </p>
            <a
              href="https://www.notion.com/@rosyruby"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#178758] transition hover:underline"
            >
              <SquareArrowOutUpRight className="h-3.5 w-3.5" />
              https://www.notion.com/@rosyruby
            </a>
          </article>
        </section>

        <section className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[#7a0835]">
            <Sparkle className="h-5 w-5 text-[#d4af37]" />
            {t.sections.websites}
          </h3>
          <div className="grid gap-5 lg:grid-cols-2">
            {websiteCards.map((site) => (
              <article
                key={site.title}
                className={`glass-card shine-card relative overflow-hidden rounded-[2rem] border transition hover:-translate-y-1 hover:scale-[1.01] ${site.cardClass}`}
              >
                <Image
                  src={site.image}
                  alt="World's kindest IT terms site"
                  width={720}
                  height={380}
                  className="h-56 w-full object-cover"
                />
                <div className="p-5">
                  <div className="mb-1 flex items-center gap-2">
                    <Sparkle className={`h-4 w-4 ${site.iconClass}`} />
                    <h4 className="text-lg font-semibold text-[#5d1030]">{site.title}</h4>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#6f2a4a]">{site.description}</p>
                  {site.url ? (
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#6f3ec8] transition hover:underline"
                    >
                      <SquareArrowOutUpRight className="h-3.5 w-3.5" />
                      {site.url}
                    </a>
                  ) : (
                    <p className="mt-4 text-sm font-semibold text-[#ec8d2f]">Coming soon</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[#7a0835]">
            <Sparkles className="h-5 w-5 text-[#d4af37]" />
            {locale === "jp" ? "Reviews" : "Reviews"}
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Komawari ユーザー",
                text:
                  locale === "jp"
                    ? "This gives me a great high level view of my projects and then my ability to access the comments right there on the dashboard to update my boss is an excellent feature. I am new to Notion but already love this template."
                    : "This gives me a great high level view of my projects and then my ability to access the comments right there on the dashboard to update my boss is an excellent feature. I am new to Notion but already love this template.",
              },
              {
                name: "デザイン好きの学習者",
                text:
                  locale === "jp"
                    ? "This template is nicely categorised and very helpful with planning everything for the baby. It's not too chaotic, but has also everything in it."
                    : "This template is nicely categorised and very helpful with planning everything for the baby. It's not too chaotic, but has also everything in it.",
              },
              {
                name: "Notion テンプレート利用者",
                text:
                  locale === "jp"
                    ? "GOOD TEMPLATE FOR ME TO USE AS ADMIN ASSISTANT IN MY COMPANY"
                    : "GOOD TEMPLATE FOR ME TO USE AS ADMIN ASSISTANT IN MY COMPANY",
              },
            ].map((review) => (
              <article
                key={review.name}
                className="glass-card relative overflow-hidden rounded-2xl border border-[#f0c5dd] p-4 text-sm text-[#6f2a4a]"
              >
                <p className="leading-6">“{review.text}”</p>
                <p className="mt-3 text-xs font-semibold text-[#9a476a]">— {review.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[#7a0835]">
            <LinkIcon className="h-5 w-5 text-[#d4af37]" />
            {t.sections.links}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="glass-card shine-card relative flex items-center gap-2 overflow-hidden rounded-2xl px-4 py-3 text-sm font-medium text-[#5f1230] transition hover:bg-[#ffe7f1cc] hover:text-[#d4af37] hover:shadow-[0_0_26px_rgba(224,17,95,0.22)]"
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </a>
              );
            })}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[#7a0835]">
            <Mail className="h-5 w-5 text-[#d4af37]" />
            {t.sections.contact}
          </h3>
          <p className="mb-4 text-sm leading-7 text-[#6f2a4a] sm:text-base">{t.contact.description}</p>
          <article className="glass-card relative overflow-hidden rounded-[2rem] border border-[#f0a2ba] bg-gradient-to-br from-[#fff6f9]/90 to-[#ffe4ee]/80 p-6 sm:p-8">
            <form
              className="grid gap-4 md:max-w-2xl"
              action="https://formspree.io/f/meevaozn"
              method="POST"
            >
              <label className="text-sm text-[#6b2342]">
                {t.contact.name}
                <input
                  type="text"
                  name="name"
                  className="mt-1 w-full rounded-2xl border border-[#d4af3760] bg-white/75 px-4 py-3 text-sm outline-none transition focus:border-[#e0115f]"
                  placeholder={t.contact.name}
                />
              </label>
              <label className="text-sm text-[#6b2342]">
                {t.contact.email}
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-2xl border border-[#d4af3760] bg-white/75 px-4 py-3 text-sm outline-none transition focus:border-[#e0115f]"
                  placeholder={t.contact.email}
                />
              </label>
              <label className="text-sm text-[#6b2342]">
                {t.contact.message}
                <textarea
                  name="message"
                  className="mt-1 min-h-32 w-full resize-y rounded-2xl border border-[#d4af3760] bg-white/75 px-4 py-3 text-sm outline-none transition focus:border-[#e0115f]"
                  placeholder={t.contact.message}
                />
              </label>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#d4af37c7] bg-gradient-to-r from-[#e0115f] to-[#c70039] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(199,0,57,0.3)] transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(224,17,95,0.45)]"
                >
                  <Mail className="h-4 w-4" />
                  {t.contact.formButton}
                </button>
              </div>
            </form>
          </article>
        </section>

        <footer className="mb-4 flex items-center justify-between border-t border-[#d4af374d] py-5 text-sm text-[#7a0835]">
          <p suppressHydrationWarning>© {new Date().getFullYear()} RosyRuby</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="text-xs underline underline-offset-4 decoration-[#d4af37] hover:text-[#d4af37] sm:text-sm"
            >
              {t.privacy.link}
            </button>
            <button
              type="button"
              onClick={() => setTermsOpen(true)}
              className="text-xs underline underline-offset-4 decoration-[#d4af37] hover:text-[#d4af37] sm:text-sm"
            >
              {t.terms.link}
            </button>
          </div>
        </footer>
      </main>

      {privacyOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#2f0e1bcf] px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass-card w-full max-w-lg rounded-3xl p-6"
          >
            <div className="mb-3 flex items-center justify-between">
              <h4 className="font-display flex items-center gap-2 text-2xl text-[#601230]">
                <ShieldCheck className="h-5 w-5 text-[#d4af37]" />
                {t.privacy.title}
              </h4>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="rounded-xl border border-[#d4af3773] p-2 text-[#7a0835] transition hover:text-[#d4af37]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm leading-7 text-[#6f2a4a]">{t.privacy.body}</p>
          </motion.div>
        </div>
      )}

      {termsOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#2f0e1bcf] px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass-card w-full max-w-lg rounded-3xl p-6"
          >
            <div className="mb-3 flex items-center justify-between">
              <h4 className="font-display text-2xl text-[#601230]">{t.terms.title}</h4>
              <button
                type="button"
                onClick={() => setTermsOpen(false)}
                className="rounded-xl border border-[#d4af3773] p-2 text-[#7a0835] transition hover:text-[#d4af37]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="whitespace-pre-line text-sm leading-7 text-[#6f2a4a]">
              {t.terms.body}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
