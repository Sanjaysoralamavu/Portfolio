"use client";

import {
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  ExternalLink,
  MessageCircleMore,
  Sparkles,
  X,
} from "lucide-react";

import {
  answerResumeQuestion,
  starterQuestions,
} from "@/lib/resume-knowledge";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const TEASER_SEEN_KEY = "sanjay-profile-chat-teaser-seen";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
  suggestions?: string[];
};

const welcomeMessage: ChatMessage = {
  id: 0,
  role: "assistant",
  text: "Hi — ask me anything about Sanjay’s experience, projects, skills, education, achievements, or background.",
  suggestions: [...starterQuestions],
};

export default function ResumeChat() {
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [thinking, setThinking] = useState(false);
  const messageId = useRef(1);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const responseTimer = useRef<number | null>(null);

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = window.sessionStorage.getItem(TEASER_SEEN_KEY) === "true";
    } catch {
      // The teaser still works when storage is unavailable.
    }
    if (alreadySeen) return;

    const teaserTimer = window.setTimeout(() => {
      try {
        if (window.sessionStorage.getItem(TEASER_SEEN_KEY) === "true") return;
        window.sessionStorage.setItem(TEASER_SEEN_KEY, "true");
      } catch {
        // Keep the interaction usable without storage.
      }
      setShowTeaser(true);
    }, 1800);

    return () => window.clearTimeout(teaserTimer);
  }, []);

  useEffect(() => {
    if (!showTeaser) return;
    const dismissTimer = window.setTimeout(() => setShowTeaser(false), 11000);
    return () => window.clearTimeout(dismissTimer);
  }, [showTeaser]);

  useEffect(() => {
    if (!open) return;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 220);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, thinking]);

  useEffect(
    () => () => {
      if (responseTimer.current) window.clearTimeout(responseTimer.current);
    },
    [],
  );

  function closeChat() {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  function rememberTeaserInteraction() {
    try {
      window.sessionStorage.setItem(TEASER_SEEN_KEY, "true");
    } catch {
      // Storage is an enhancement, not a requirement.
    }
    setShowTeaser(false);
  }

  function openChat() {
    rememberTeaserInteraction();
    setOpen(true);
  }

  function ask(question: string) {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || thinking) return;

    const previousQuestion = [...messages]
      .reverse()
      .find((message) => message.role === "user")?.text;
    const userMessage: ChatMessage = {
      id: messageId.current++,
      role: "user",
      text: trimmedQuestion,
    };

    setMessages((current) => [...current, userMessage]);
    setDraft("");
    setThinking(true);

    responseTimer.current = window.setTimeout(() => {
      const reply = answerResumeQuestion(trimmedQuestion, previousQuestion);
      setMessages((current) => [
        ...current,
        {
          id: messageId.current++,
          role: "assistant",
          text: reply.answer,
          suggestions: reply.suggestions,
        },
      ]);
      setThinking(false);
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }, 360);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(draft);
  }

  function handleInputKeyDown(event: ReactKeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      ask(draft);
    }
  }

  const lastAssistantId = [...messages]
    .reverse()
    .find((message) => message.role === "assistant")?.id;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.section
            id="resume-chat"
            role="dialog"
            aria-labelledby="resume-chat-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed bottom-3 left-3 z-[70] flex h-[min(620px,calc(100dvh-1.5rem))] w-[calc(100vw-1.5rem)] max-w-[430px] flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#111413] text-[#f4f0e7] shadow-[0_24px_90px_rgba(17,20,19,0.38)] sm:bottom-6 sm:left-6 sm:h-[min(620px,calc(100dvh-3rem))]"
          >
            <header className="relative shrink-0 overflow-hidden border-b border-white/10 px-5 pb-4 pt-5">
              <div
                className="absolute -right-10 -top-14 h-36 w-36 rounded-full bg-[#8c98ff]/20 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d7ff43] text-[#111413]">
                    <Sparkles size={17} aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2
                        id="resume-chat-title"
                        className="text-base font-black tracking-[-0.02em]"
                      >
                        Ask about Sanjay
                      </h2>
                      <span className="rounded-full border border-[#d7ff43]/35 px-2 py-0.5 font-mono text-[7px] font-black uppercase tracking-[0.14em] text-[#d7ff43]">
                        Beta
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[8px] font-bold uppercase tracking-[0.13em] text-white/45">
                      Experience · projects · skills · more
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeChat}
                  aria-label="Close chat"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-white/65 transition hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff43]"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>
            </header>

            <div
              ref={scrollRef}
              aria-live="polite"
              aria-busy={thinking}
              className="min-h-0 flex-1 space-y-5 overflow-y-auto bg-[#ebe7de] px-4 py-5 text-[#111413] [scrollbar-color:#8a918e_transparent] [scrollbar-width:thin]"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={
                    message.role === "user"
                      ? "ml-auto max-w-[86%]"
                      : "mr-auto max-w-[94%]"
                  }
                >
                  <div
                    className={
                      message.role === "user"
                        ? "rounded-[1.35rem] rounded-br-md bg-[#111413] px-4 py-3 text-sm font-medium leading-6 text-[#f4f0e7]"
                        : "rounded-[1.35rem] rounded-bl-md border border-[#111413]/10 bg-[#f8f5ee] px-4 py-3.5 text-sm leading-6 shadow-[3px_4px_0_rgba(17,20,19,0.07)]"
                    }
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                  </div>

                  {message.role === "assistant" &&
                    message.id === lastAssistantId &&
                    message.suggestions &&
                    !thinking && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            type="button"
                            onClick={() => ask(suggestion)}
                            className="rounded-full border border-[#111413]/20 bg-transparent px-3 py-2 text-left text-[11px] font-bold leading-4 text-[#3f4844] transition hover:border-[#111413] hover:bg-[#d7ff43] hover:text-[#111413] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a75ef]"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              ))}

              {thinking && (
                <div className="mr-auto w-fit rounded-[1.35rem] rounded-bl-md border border-[#111413]/10 bg-[#f8f5ee] px-4 py-3.5 shadow-[3px_4px_0_rgba(17,20,19,0.07)]">
                  <span className="flex items-center gap-1" aria-label="Thinking about the question">
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        className="h-1.5 w-1.5 rounded-full bg-[#6a75ef]"
                        animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
                        transition={{
                          duration: 0.9,
                          repeat: Infinity,
                          delay: dot * 0.12,
                        }}
                      />
                    ))}
                  </span>
                </div>
              )}
            </div>

            <footer className="shrink-0 border-t border-white/10 bg-[#111413] px-4 pb-4 pt-3">
              <form onSubmit={submit} className="flex items-end gap-2">
                <label htmlFor="resume-chat-input" className="sr-only">
                  Ask a question about Sanjay
                </label>
                <textarea
                  ref={inputRef}
                  id="resume-chat-input"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  rows={1}
                  maxLength={280}
                  disabled={thinking}
                  placeholder="Ask about experience, skills, projects…"
                  className="max-h-28 min-h-12 flex-1 resize-none rounded-[1.15rem] border border-white/15 bg-white/8 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-white/35 focus:border-[#8c98ff] disabled:cursor-wait disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || thinking}
                  aria-label="Send question"
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#d7ff43] text-[#111413] transition hover:-translate-y-0.5 hover:bg-white disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ArrowUp size={18} strokeWidth={2.5} aria-hidden="true" />
                </button>
              </form>
              <div className="mt-2 flex items-center justify-between gap-3 px-1">
                <p className="font-mono text-[7px] uppercase tracking-[0.1em] text-white/30">
                  Ask anything about Sanjay
                </p>
                <a
                  href={`${BASE_PATH}/resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex shrink-0 items-center gap-1 font-mono text-[7px] font-black uppercase tracking-[0.1em] text-[#d7ff43] hover:text-white"
                >
                  View CV <ExternalLink size={9} aria-hidden="true" />
                </a>
              </div>
            </footer>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!open && showTeaser && (
          <motion.aside
            aria-label="Chat welcome message"
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed bottom-[5.9rem] left-4 z-[60] w-[min(21rem,calc(100vw-2rem))] rounded-[1.35rem] border border-[#111413]/15 bg-[#f4f0e7] p-2 text-[#111413] shadow-[0_18px_55px_rgba(17,20,19,0.24)] sm:bottom-[6.4rem] sm:left-6"
          >
            <span
              className="absolute -bottom-2 left-8 h-4 w-4 rotate-45 border-b border-r border-[#111413]/15 bg-[#f4f0e7]"
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={rememberTeaserInteraction}
              aria-label="Dismiss welcome message"
              className="absolute right-3 top-3 z-10 grid h-7 w-7 place-items-center rounded-full text-[#5e6965] transition hover:bg-[#111413]/8 hover:text-[#111413] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a75ef]"
            >
              <X size={13} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={openChat}
              className="group w-full rounded-[1rem] p-3 pr-10 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a75ef]"
            >
              <span className="flex items-center gap-2 font-mono text-[8px] font-black uppercase tracking-[0.14em] text-[#5e6965]">
                <span className="h-2 w-2 rounded-full bg-[#d7ff43] ring-1 ring-[#111413]/20" />
                Hi there
              </span>
              <span className="mt-2 block text-sm font-bold leading-5 tracking-[-0.01em]">
                Want the quick version of Sanjay&apos;s work?
              </span>
              <span className="mt-1.5 block text-xs leading-5 text-[#5e6965]">
                Ask what he builds, where he has worked, or what problems he solves.
              </span>
              <span className="mt-3 flex items-center gap-1.5 text-[11px] font-black text-[#111413]">
                Start a conversation
                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </button>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!open && (
          <motion.button
            ref={triggerRef}
            type="button"
            onClick={openChat}
            aria-expanded={open}
            aria-controls="resume-chat"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.2, duration: 0.22 }}
            className="group fixed bottom-5 left-4 z-[60] flex items-center gap-3 rounded-full border border-white/15 bg-[#111413] py-2.5 pl-2.5 pr-4 text-[#f4f0e7] shadow-[0_14px_40px_rgba(17,20,19,0.28)] transition hover:-translate-y-1 hover:border-[#d7ff43]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7ff43] sm:bottom-6 sm:left-6"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d7ff43] text-[#111413] transition group-hover:rotate-[-6deg]">
              <MessageCircleMore size={17} aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-xs font-black">Ask about Sanjay</span>
              <span className="mt-0.5 block font-mono text-[7px] font-bold uppercase tracking-[0.12em] text-white/40">
                Profile chat
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
