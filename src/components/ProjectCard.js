import { countMonths } from "@/lib/period";
import { hoverLift } from "@/lib/motion";
import CaseStudy from "./CaseStudy";
import { GitHubIcon } from "./icons";
import ImageSlider from "./ImageSlider";
import { Reveal } from "./ui";

const linkTone = {
  gold: "text-gold hover:text-gold-light",
  muted: "text-muted hover:text-head",
};

function CardLink({ href, label, icon, tone = "muted" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-[7px] text-[14px] transition-colors duration-200 ${linkTone[tone]}`}
    >
      {icon === "github" && <GitHubIcon />}
      {label}
    </a>
  );
}

export default function ProjectCard({ project: p }) {
  return (
    <Reveal
      as="article"
      whileHover={hoverLift}
      className="group flex flex-col gap-[22px] rounded-[14px] border border-line bg-surface px-3 pt-3 pb-[26px] transition-[border-color,box-shadow] duration-250 hover:border-focus hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,.6)]"
    >
      <ImageSlider images={p.images} alt={p.title} position={p.imagePosition} aspect={p.aspect} />
      <div className="flex flex-col gap-[10px] px-3">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="m-0 text-[20px] font-semibold tracking-[-.015em] text-head">{p.title}</h3>
          {p.links ? (
            <div className="flex flex-wrap gap-[18px]">
              {p.links.map((l) => (
                <CardLink key={l.href} {...l} />
              ))}
            </div>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[13px] text-subtle">
              <span aria-hidden className="relative flex size-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-subtle opacity-60" />
                <span className="relative size-1.5 rounded-full bg-subtle" />
              </span>
              {p.label}
            </span>
          )}
        </div>
        <p className="m-0 text-[15px] leading-[1.65] text-pretty text-muted">{p.description}</p>
        <ul className="mt-0.5 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-md border border-strong-2 bg-surface-2 px-[9px] py-[3px] font-mono text-[12px] text-soft"
            >
              {t}
            </li>
          ))}
        </ul>
        <CaseStudy
          data={p.caseStudy}
          buildMonths={p.caseStudy.period ? countMonths(p.caseStudy.period) : undefined}
        />
      </div>
    </Reveal>
  );
}
