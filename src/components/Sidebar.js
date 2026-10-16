import Image from "next/image";
import * as motion from "motion/react-client";
import { LINKS, PROFILE } from "@/lib/data";
import { EASE, fadeUp, photoReveal, stagger, tapPress } from "@/lib/motion";
import { GitHubIcon, LineIcon, LinkedInIcon, PinIcon } from "./icons";
import SideNav from "./SideNav";
import { buttonStyles } from "./ui";

const socialLink = "inline-flex items-center gap-1.5 text-muted transition-colors duration-200 hover:text-head";

const word = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
};

export default function Sidebar() {
  return (
    <motion.aside
      initial="hidden"
      animate="show"
      variants={stagger(0.1, 0.05)}
      className="relative box-border grid max-w-[440px] flex-[1_1_340px] grid-cols-[88px_1fr] items-center gap-x-4 self-start overflow-hidden pt-[clamp(20px,4.5vh,56px)] pb-[clamp(20px,4vh,48px)] max-wide:max-w-none max-wide:basis-full sm:grid-cols-[minmax(180px,34%)_1fr] sm:gap-x-8 wide:sticky wide:top-0 wide:flex wide:h-screen wide:flex-col wide:items-stretch wide:gap-[clamp(14px,2.6vh,28px)]"
    >
      <motion.div
        variants={photoReveal}
        className="group relative row-span-2 size-[88px] overflow-hidden rounded-[14px] border border-strong bg-surface-2 sm:row-span-4 sm:size-auto sm:h-full sm:min-h-[240px] sm:self-stretch wide:h-auto wide:max-h-[320px] wide:min-h-[120px] wide:w-full wide:flex-[1_1_auto]"
      >
        <Image
          src={PROFILE.photo}
          alt={`${PROFILE.firstName} ${PROFILE.lastName}`}
          fill
          preload
          sizes="(min-width: 960px) 440px, (min-width: 640px) 34vw, 88px"
          className="object-cover object-[52%_22%] transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:object-[52%_30%] wide:object-[55%_30%]"
        />
      </motion.div>

      <motion.div variants={stagger(0.1)} className="contents wide:block wide:flex-none">
        <motion.h1
          variants={stagger(0.12)}
          className="col-start-2 m-0 self-end text-[clamp(28px,8vw,34px)] leading-none font-bold tracking-[-.045em] whitespace-nowrap text-head [text-shadow:0_2px_24px_rgba(207,174,107,.18)] sm:self-auto sm:text-[clamp(34px,5.4vw,44px)] wide:text-[clamp(34px,min(3.8vw,6.4vh),56px)]"
        >
          <motion.span variants={word} className="inline-block">
            {PROFILE.firstName}
          </motion.span>{" "}
          <motion.span variants={word} className="inline-block text-gold">
            {PROFILE.lastName}
          </motion.span>
        </motion.h1>
        <motion.div
          variants={fadeUp}
          className="col-start-2 mt-[clamp(6px,1vh,10px)] self-start text-[clamp(17px,2.2vh,20px)] font-medium text-soft sm:self-auto"
        >
          {PROFILE.role}
        </motion.div>
        <motion.p
          variants={fadeUp}
          className="col-span-2 mt-5 mb-0 max-w-[520px] text-[clamp(14px,1.8vh,16px)] leading-[1.6] text-pretty text-muted sm:col-span-1 sm:col-start-2 sm:mt-3 wide:mt-[clamp(8px,1.4vh,14px)] wide:max-w-[380px]"
        >
          {PROFILE.bio}
        </motion.p>
      </motion.div>

      <SideNav />

      <motion.div
        variants={fadeUp}
        className="col-span-2 mt-5 flex flex-none flex-col gap-[clamp(12px,1.8vh,20px)] sm:col-span-1 sm:col-start-2 wide:mt-0"
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
        <div className="flex flex-wrap items-center gap-5 text-[14px]">
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
            <PinIcon className="size-[15px]" />
            {PROFILE.location}
          </span>
        </div>
      </motion.div>
    </motion.aside>
  );
}
