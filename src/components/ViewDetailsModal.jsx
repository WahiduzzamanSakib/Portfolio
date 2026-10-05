"use client";

import Image from "next/image";
import { Modal, Button } from "@heroui/react";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaServer } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

function InfoList({ title, items, icon, itemClassName }) {
  if (!items?.length) return null;

  return (
    <div>
      <h3 className="font-bold text-lg mb-3 text-slate-950 dark:text-white flex items-center gap-2">
        {title}
      </h3>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 ${itemClassName}`}
          >
            <span className="mt-0.5 shrink-0">{icon}</span>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ViewDetailsModalPage({ project, onClose }) {
  if (!project) return null;

  return (
    <Modal isOpen={true} onOpenChange={onClose}>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-4xl rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <Modal.CloseTrigger />
            <Modal.Header className="border-b border-slate-200/70 dark:border-white/10 pb-4">
              <Modal.Heading className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                {project.title}
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* IMAGE */}
              <div className="relative h-56 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-md group border border-slate-200/80 dark:border-white/10">
                <Image
                  src={project.image}
                  alt={project.title || "Project image"}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* DESCRIPTION */}
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.desc}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-3 flex-wrap">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300 hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:-translate-y-0.5"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.clientRepo && (
                  <a
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300/80 dark:border-white/10 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300 hover:border-cyan-500 hover:text-cyan-600 hover:-translate-y-0.5"
                  >
                    <FaGithub className="text-sm" />
                    <span>Client Repo</span>
                  </a>
                )}

                {project.serverRepo && (
                  <a
                    href={project.serverRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300/80 dark:border-white/10 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300 hover:border-cyan-500 hover:text-cyan-600 hover:-translate-y-0.5"
                  >
                    <FaServer className="text-sm" />
                    <span>Server Repo</span>
                  </a>
                )}
              </div>

              {/* TECH STACK */}
              {project.tags?.length > 0 && (
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={`${tag}-${index}`}
                        className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* FEATURES */}
              <InfoList
                title="Key Features"
                items={project.features}
                icon={<FaCheckCircle className="text-emerald-500" />}
                itemClassName="border border-slate-200/80 dark:border-white/5 bg-slate-50/60 dark:bg-slate-800/40"
              />

              {/* CHALLENGES */}
              <InfoList
                title="Challenges Faced"
                items={project.challenges}
                icon={<span className="text-amber-500">⚡</span>}
                itemClassName="border border-amber-200/60 dark:border-amber-900/30 bg-amber-50/40 dark:bg-amber-950/20"
              />

              {/* FUTURE PLANS */}
              <InfoList
                title="Future Roadmap"
                items={project.futurePlans}
                icon={<span className="text-cyan-500">✨</span>}
                itemClassName="border border-cyan-200/60 dark:border-cyan-900/30 bg-cyan-50/40 dark:bg-cyan-950/20"
              />
            </Modal.Body>

            <Modal.Footer className="border-t border-slate-200/70 dark:border-white/10 pt-3">
              <Button
                variant="secondary"
                onPress={onClose}
                className="rounded-xl px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                Close <IoMdCloseCircleOutline className="text-base" />
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}