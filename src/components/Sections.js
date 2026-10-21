import * as motion from "motion/react-client";
import { ABOUT, CERTIFICATIONS, CONTACT, EDUCATION, EXPERIENCE, LINKS, PROJECTS, SIDE_PROJECTS, SKILL_GROUPS } from "@/lib/data";
import { fadeLeft, fadeUp, pop, stagger, tapPress } from "@/lib/motion";
import { countMonths, formatRange } from "@/lib/period";
import CountUp from "./CountUp";
import Duration from "./Duration";
import { LineIcon, LinkedInIcon } from "./icons";
import ProjectCard from "./ProjectCard";
import { Reveal, SectionTitle, buttonStyles } from "./ui";

export function About() {
  return (
    <Reveal as="section" id="about" variants={stagger(0.12, 0.25)} className="flex flex-col gap-5">
      <SectionTitle lineClass="">About</SectionTitle>
      <motion.p variants={fadeUp} className="m-0 text-[clamp(19px,1.8vw,22px)] leading-[1.55] tracking-[-.01em] text-pretty text-body">
        {ABOUT.lead}
      </motion.p>
      <motion.p variants={fadeUp} className="m-0 text-[16px] leading-[1.75] text-pretty text-muted">
        {ABOUT.body}
      </motion.p>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-3">
      <SectionTitle lineClass="mb-3">Experience</SectionTitle>
      {EXPERIENCE.map((job) => (
        <Reveal
          as="article"
          key={job.title}
          className="-mx-4 flex flex-col gap-[18px] rounded-xl border border-transparent p-4 tab:-mx-6 tab:p-6 transition-[background-color,border-color] duration-250 hover:border-line-hover hover:bg-surface-hover"
        >
          <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
            <div className="min-w-0">
              <h3 className="m-0 text-[18px] font-semibold tracking-[-.01em] text-head">{job.title}</h3>
              <div className="mt-[3px] text-[15px] text-muted">{job.company}</div>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-[3px] tab:flex-col tab:items-end tab:pt-[3px]">
              <div className="font-mono text-[12.5px] whitespace-nowrap text-soft">{formatRange(job.period)}</div>
              <span aria-hidden className="text-[13px] text-subtle tab:hidden">·</span>
              <Duration period={job.period} buildMonths={countMonths(job.period)} className="text-[13px] whitespace-nowrap text-subtle" />
            </div>
          </div>
          {job.projects.map((p) => (
            <div key={p.name} className="flex flex-col gap-2">
              <div className="text-[15px] font-semibold text-gold">{p.name}</div>
              {p.paragraphs.map((text, i) => (
                <p key={i} className="m-0 text-[15px] leading-[1.7] text-pretty text-muted">
                  {text}
                </p>
              ))}
            </div>
          ))}
        </Reveal>
      ))}
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-5">
      <SectionTitle>Projects</SectionTitle>
      {PROJECTS.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </section>
  );
}

export function SideProjects() {
  return (
    <section id="side" className="flex flex-col gap-5">
      <SectionTitle lineClass="mb-3">Side Projects</SectionTitle>
      {SIDE_PROJECTS.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-5">
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-col">
        {SKILL_GROUPS.map((g) => (
          <Reveal
            key={g.title}
            variants={stagger(0.04)}
            className="flex flex-wrap gap-x-7 gap-y-[10px] border-t border-line py-5"
          >
            <motion.h3 variants={fadeLeft} className="m-0 flex-[0_0_140px] pt-1 text-[14px] font-medium text-body">
              {g.title}
            </motion.h3>
            <ul className="flex flex-[1_1_300px] flex-wrap gap-2">
              {g.items.map((s) => (
                <motion.li
                  key={s}
                  variants={pop}
                  whileHover={{ y: -3 }}
                  className="rounded-[7px] border border-strong-2 px-[11px] py-[5px] text-[13.5px] text-soft transition-colors duration-200 hover:border-gold hover:text-head"
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="flex flex-col gap-5">
      <SectionTitle>Education</SectionTitle>
      <Reveal className="flex flex-col gap-2 rounded-[14px] border border-line bg-surface p-6 tab:flex-row tab:flex-wrap tab:gap-x-7">
        <div className="font-mono text-[12.5px] text-muted tab:flex-[0_0_116px] tab:pt-1">{EDUCATION.years}</div>
        <div className="min-w-0 tab:flex-[1_1_240px]">
          <h3 className="m-0 text-[18px] font-semibold text-head">{EDUCATION.school}</h3>
          <div className="mt-1 text-[15px] leading-[1.6] text-muted">{EDUCATION.degree}</div>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-line pt-4 tab:mt-0 tab:flex-col tab:items-start tab:justify-start tab:border-0 tab:pt-0">
          <div className="text-[12px] tracking-[.08em] text-subtle uppercase">GPAX</div>
          <CountUp value={EDUCATION.gpax} className="text-[30px] font-semibold tracking-[-.03em] text-gold tabular-nums" />
        </div>
      </Reveal>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="flex flex-col gap-5">
      <SectionTitle>Certifications</SectionTitle>
      {CERTIFICATIONS.map((c) => (
        <Reveal
          key={c.title}
          className="flex flex-col gap-2 rounded-[14px] border border-line bg-surface p-6 tab:flex-row tab:flex-wrap tab:gap-x-7"
        >
          <div className="font-mono text-[12.5px] text-muted tab:flex-[0_0_116px] tab:pt-1">{c.date}</div>
          <div className="min-w-0 tab:flex-[1_1_240px]">
            <h3 className="m-0 text-[18px] font-semibold text-head">{c.title}</h3>
            <div className="mt-1 text-[15px] leading-[1.6] text-muted">{c.detail}</div>
            <a
              href={c.href}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-block text-[14px] font-medium text-gold underline-offset-4 hover:underline"
            >
              View certificate ↗
            </a>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-line pt-4 tab:mt-0 tab:flex-col tab:items-start tab:justify-start tab:border-0 tab:pt-0">
            <div className="text-[12px] tracking-[.08em] text-subtle uppercase">{c.scoreLabel}</div>
            <div className="flex items-baseline gap-1">
              <CountUp value={c.score} className="text-[30px] font-semibold tracking-[-.03em] text-gold tabular-nums" />
              <span className="text-[14px] text-subtle">/100</span>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="flex flex-col gap-5">
      <SectionTitle>Contact</SectionTitle>
      <Reveal variants={stagger(0.12)} className="flex flex-col gap-5">
        <motion.p variants={fadeUp} className="m-0 text-[clamp(28px,3.4vw,40px)] leading-[1.12] font-semibold tracking-[-.03em] text-balance text-head">
          {CONTACT.heading}
        </motion.p>
        <motion.p variants={fadeUp} className="m-0 max-w-[520px] text-[16px] leading-[1.7] text-muted">
          {CONTACT.body}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-2 flex flex-wrap gap-[10px]">
          <motion.a
            href={`mailto:${LINKS.email}`}
            whileHover={{ y: -2 }}
            whileTap={tapPress}
            className={`${buttonStyles.gold} px-5 py-3 text-[15px] shadow-[0_8px_24px_-12px_rgba(207,174,107,.6)]`}
          >
            {LINKS.email}
          </motion.a>
          <motion.a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener"
            whileHover={{ y: -2 }}
            whileTap={tapPress}
            className={`${buttonStyles.outline} gap-2 px-5 py-3 text-[15px]`}
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </motion.a>
          <motion.a
            href={LINKS.line}
            target="_blank"
            rel="noopener"
            whileHover={{ y: -2 }}
            whileTap={tapPress}
            className={`${buttonStyles.outline} gap-2 px-5 py-3 text-[15px]`}
          >
            <LineIcon size={16} />
            LINE {LINKS.lineId}
          </motion.a>
        </motion.div>
      </Reveal>
      <footer className="mt-12 flex tab:mt-[72px] flex-wrap justify-between gap-3 border-t border-line pt-6 text-[13px] text-subtle">
        <span>{CONTACT.footerLeft}</span>
        <span>{CONTACT.footerRight}</span>
      </footer>
    </section>
  );
}
