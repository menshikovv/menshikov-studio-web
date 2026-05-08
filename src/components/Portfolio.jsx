'use client'

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'mm',
    title: 'МаниМедиа',
    subtitle: 'Сайт и digital-платформа',
    type: 'Web',
    link: 'https://mm-web-wheat.vercel.app',
    image: 'https://s10.iimage.su/s/02/gFdnVqNxzHGkuabCQzsa4ssT5FPo9Nnj2OF4kJoGP.png',
  },
  {
    id: 'atlanttech',
    title: 'AtlantTech',
    subtitle: 'ПО для киберспортивных команд',
    type: 'Web',
    link: 'https://atlanttech.pro',
    image: 'https://s10.iimage.su/s/02/gpfudzhxJDYJWuy8j2atRka3AmDWFseKMlokuipW2.png',
  },
  {
    id: 'premium-brand',
    title: 'Premium Brand',
    subtitle: 'Telegram Mini App для магазина',
    type: 'Mini App',
    link: 'https://t.me/premiumbrand_shop_bot/app',
    image: 'https://s10.iimage.su/s/02/g2QTj7oxSNHc40EMNrvjY2379KUdbOGH2OP0hYKIj.png',
  },
  {
    id: 'aurora',
    title: 'Aurora',
    subtitle: 'Промо-сайт и визуальная подача',
    type: 'Landing',
    link: 'https://aurora-web-lake.vercel.app',
    image: 'https://s10.iimage.su/s/02/gmHw4n8x81LfZ3e6fGGMM1blk4KOTC3rhlZv6KP1I.png',
  },
  {
    id: 'ramka',
    title: 'Ramka Community',
    subtitle: 'Комьюнити-платформа',
    type: 'Community',
    link: 'https://ramka-web.vercel.app',
    image: 'https://s10.iimage.su/s/02/ghfkFxkxtPPBOkFjEjLtmyvovZhbnHgFpd7u4Abfa.png',
  },
  {
    id: 'youtube_lab',
    title: 'Youtube Lab',
    subtitle: 'Сайт для медиа-лаборатории',
    type: 'Showcase',
    link: 'https://youtube-lab-phi.vercel.app',
    image: 'https://s10.iimage.su/s/03/gPODCeixsDUyMeNtHROzMBpqjDmsYwq14dK3nIS4d.png',
  },
];

function ProjectCard({ project, index }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-[#111111]"
    >
      <div className="relative mx-5 mt-5 overflow-hidden rounded-2xl" style={{ aspectRatio: '16/9' }}>
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="rounded-lg border border-white/15 bg-black/55 px-2.5 py-1 font-inter text-xs font-medium text-white/80 backdrop-blur-sm">
            {project.type}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 font-manrope text-xl font-bold leading-tight text-white">{project.title}</h3>
        <p className="mb-5 flex-1 font-inter text-sm text-white/65">{project.subtitle}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 py-3 font-inter text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
        >
          Смотреть проект
          <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="portfolio" className="bg-white/72 backdrop-blur-sm border-t border-black/10" aria-label="Портфолио">
      <div className="container-brand pt-24 pb-24">
        <motion.h2
          className="mb-16 font-manrope text-black font-extrabold leading-none"
          style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', letterSpacing: '-0.04em', lineHeight: 0.92 }}
          initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Портфолио
        </motion.h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
