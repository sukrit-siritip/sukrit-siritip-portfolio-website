import Image from "next/image";
import * as motion from "motion/react-client";
import { LINKS, PROFILE } from "@/lib/data";
import { EASE, fadeUp, photoReveal, stagger, tapPress } from "@/lib/motion";
import { GitHubIcon, LineIcon, LinkedInIcon, PinIcon } from "./icons";
import SideNav from "./SideNav";
import { buttonStyles } from "./ui";

const word = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
};

const socialLink = "inline-flex items-center gap-[7px] text-muted transition-colors duration-200 hover:text-head";

export default function Sidebar() {
  return (
    <motion.aside
      initial="hidden"
      animate="show"
      variants={stagger(0.1, 0.05)}
      className="relative box-border grid w-full flex-[1_1_100%] grid-cols-[88px_minmax(0,1fr)] content-start gap-x-4 gap-y-[clamp(8px,1.4vh,14px)] self-start pt-8 pb-2 [grid-template-areas:'photo_head'_'bio_bio'_'cta_cta'] tab:grid-cols-[minmax(180px,250px)_minmax(0,1fr)] tab:content-center tab:gap-x-[clamp(24px,4vw,40px)] tab:pt-10 tab:[grid-template-areas:'photo_head'_'photo_bio'_'photo_cta'] wide:sticky wide:top-0 wide:h-screen wide:max-w-[440px] wide:flex-[1_1_340px] wide:grid-cols-[minmax(0,1fr)] wide:grid-rows-[minmax(120px,320px)_auto_auto_auto_auto] wide:content-start wide:gap-x-0 wide:overflow-hidden wide:pt-[clamp(20px,4.5vh,56px)] wide:pb-[clamp(20px,4vh,48px)] wide:[grid-template-areas:'photo'_'head'_'bio'_'nav'_'cta']"
    >
      <motion.div
        variants={photoReveal}
        className="group relative mb-[10px] size-[88px] self-center overflow-hidden rounded-[14px] border border-strong bg-surface-2 [grid-area:photo] tab:mb-0 tab:aspect-square tab:size-auto tab:w-full tab:rounded-[16px] wide:mb-[clamp(6px,1.2vh,14px)] wide:aspect-auto wide:max-h-[320px] wide:min-h-[120px] wide:self-stretch wide:rounded-[14px]"
      >
        <Image
          src={PROFILE.photo}
          alt={`${PROFILE.firstName} ${PROFILE.lastName}`}
          fill
          preload
          sizes="(min-width: 960px) 440px, (min-width: 600px) 250px, 88px"
          className="object-cover object-[50%_28%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </motion.div>

      <motion.div variants={stagger(0.1)} className="min-w-0 self-center [grid-area:head] tab:self-end">
        <motion.h1
          variants={stagger(0.12)}
          className="m-0 text-[clamp(26px,8vw,34px)] leading-none font-bold tracking-[-.045em] whitespace-nowrap text-head [text-shadow:0_2px_24px_rgba(207,174,107,.18)] tab:text-[clamp(34px,5.4vw,48px)] wide:text-[clamp(34px,min(3.8vw,6.4vh),56px)]"
        >
          <motion.span variants={word} className="inline-block">
            {PROFILE.firstName}
          </motion.span>{" "}
          <motion.span variants={word} className="inline-block text-gold">
            {PROFILE.lastName}
          </motion.span>
        </motion.h1>
        <motion.div variants={fadeUp} className="mt-[clamp(6px,1vh,10px)] text-[clamp(17px,2.2vh,20px)] font-medium text-soft">
          {PROFILE.role}
        </motion.div>
      </motion.div>

      <motion.div variants={fadeUp} className="min-w-0 [grid-area:bio]">
        <p className="m-0 text-[clamp(14px,1.8vh,16px)] leading-[1.6] text-pretty text-muted tab:max-w-[460px] wide:max-w-[380px]">
          {PROFILE.bio}
        </p>
      </motion.div>

      <SideNav className="mt-[clamp(6px,1.2vh,14px)] [grid-area:nav]" />

      <motion.div
        variants={fadeUp}
        className="mt-[clamp(6px,1.2vh,14px)] flex flex-col gap-[clamp(12px,1.8vh,20px)] self-start [grid-area:cta]"
      >
        <div className="flex flex-wrap gap-[10px]">
          <motion.a
            href={LINKS.resume}
            target="_blank"
            rel="noopener"
            whileHover={{ y: -2 }}
            whileTap={tapPress}
            className={`${buttonStyles.light} px-[18px] py-[10px] text-[14px]`}
          >
            Resume
          </motion.a>
          <motion.a
            href={`mailto:${LINKS.email}`}
            whileHover={{ y: -2 }}
            whileTap={tapPress}
            className={`${buttonStyles.outline} px-[18px] py-[10px] text-[14px]`}
          >
            Get in touch
          </motion.a>
        </div>
        <div className="flex flex-wrap gap-5 text-[14px]">
          <a href={LINKS.github} target="_blank" rel="noopener" className={socialLink}>
            <GitHubIcon />
            GitHub
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener" className={socialLink}>
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href={LINKS.line} target="_blank" rel="noopener" title={`LINE ${LINKS.lineId}`} className={socialLink}>
            <LineIcon />
            LINE
          </a>
          <span className="inline-flex items-center gap-1.5 text-subtle">
            <PinIcon />
            {PROFILE.location}
          </span>
        </div>
      </motion.div>
    </motion.aside>
  );
}
