"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { formatRange } from "@/lib/period";
import { EASE } from "@/lib/motion";
import Duration from "./Duration";
import { ChevronIcon, LockIcon } from "./icons";

function Block({ title, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[15px] font-semibold text-gold">{title}</div>
      <p className="m-0 text-[15px] leading-[1.7] text-pretty text-muted">{children}</p>
    </div>
  );
}

export default function CaseStudy({ data, buildMonths }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-1.5 inline-flex cursor-pointer items-center gap-2 self-start rounded-lg border border-strong-2 bg-transparent px-3.5 py-2 text-[14px] font-medium text-body transition-colors duration-200 hover:border-gold hover:text-gold"
      >
        {open ? "Hide case study" : "Read case study"}
        <span className={`flex size-3.5 items-center justify-center transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <ChevronIcon />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="mt-1.5 flex flex-col gap-[22px] border-t border-line pt-[22px]">
              {data.notice && (
                <div className="flex items-start gap-2.5 rounded-[10px] border border-[rgba(207,174,107,.22)] bg-[rgba(207,174,107,.07)] px-3.5 py-3">
                  <LockIcon />
                  <p className="m-0 text-[14px] leading-[1.6] text-pretty text-soft">{data.notice}</p>
                </div>
              )}
              <Block title="The Challenge">{data.challenge}</Block>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-8 gap-y-[22px]">
                <Block title="The Goal">{data.goal}</Block>
                <Block title="My Role">{data.role}</Block>
                <Block title="Duration">
                  {formatRange(data.period)}{" "}
                  <span className="whitespace-nowrap text-subtle">
                    (<Duration period={data.period} buildMonths={buildMonths} />)
                  </span>
                </Block>
              </div>
              <Block title="Responsibilities">{data.responsibilities}</Block>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
