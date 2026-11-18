"use client";

import { type FormEvent, useState } from "react";
import { Check, Pencil, Send, X } from "lucide-react";

import type { ContactMessage } from "@/lib/contact";

type ChatContactReviewProps = {
  contact: ContactMessage;
  status: "idle" | "sending" | "error";
  onChange: (contact: ContactMessage) => void;
  onConfirm: () => void;
  onCancel: () => void;
};

const editFieldClass =
  "mt-1.5 w-full rounded-xl border border-[#111413]/15 bg-white/65 px-3 py-2.5 text-sm outline-none placeholder:text-[#5e6965]/55 focus:border-[#6a75ef] focus:ring-2 focus:ring-[#6a75ef]/15";

export default function ChatContactReview({
  contact,
  status,
  onChange,
  onConfirm,
  onCancel,
}: ChatContactReviewProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(contact);
  const [editError, setEditError] = useState("");

  function beginEditing() {
    setDraft(contact);
    setEditError("");
    setEditing(true);
  }

  function cancelEditing() {
    setDraft(contact);
    setEditError("");
    setEditing(false);
  }

  function saveChanges(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const updatedContact = {
      ...draft,
      name: draft.name.trim(),
      email: draft.email.trim(),
      message: draft.message.trim(),
    };

    if (updatedContact.email.toLowerCase() === "sanjayso@asu.edu") {
      setEditError("Please use an email where Sanjay can reply to you.");
      return;
    }

    onChange(updatedContact);
    setEditError("");
    setEditing(false);
  }

  return (
    <div className="mt-3 overflow-hidden rounded-[1.35rem] border border-[#111413]/12 bg-[#f8f5ee] shadow-[3px_4px_0_rgba(17,20,19,0.07)]">
      <div className="flex items-center justify-between border-b border-[#111413]/10 px-4 py-3">
        <div>
          <p className="font-mono text-[8px] font-black uppercase tracking-[0.13em] text-[#5e6965]">
            Message preview
          </p>
          <p className="mt-1 text-sm font-black">
            {editing ? "Update the details" : "Ready for Sanjay"}
          </p>
        </div>
        <span className="rounded-full bg-[#d7ff43] px-2 py-1 font-mono text-[7px] font-black uppercase tracking-[0.1em]">
          {editing ? "Editing" : "Review"}
        </span>
      </div>

      {editing ? (
        <form onSubmit={saveChanges}>
          <div className="space-y-3 px-4 py-3">
            <label className="block">
              <span className="font-mono text-[7px] font-black uppercase tracking-[0.12em] text-[#5e6965]">
                Name
              </span>
              <input
                type="text"
                required
                minLength={2}
                maxLength={80}
                autoComplete="name"
                value={draft.name}
                onChange={(event) =>
                  setDraft((current) => ({ ...current, name: event.target.value }))
                }
                className={editFieldClass}
              />
            </label>

            <label className="block">
              <span className="font-mono text-[7px] font-black uppercase tracking-[0.12em] text-[#5e6965]">
                Reply email
              </span>
              <input
                type="email"
                required
                maxLength={160}
                autoComplete="email"
                value={draft.email}
                onChange={(event) =>
                  setDraft((current) => ({ ...current, email: event.target.value }))
                }
                className={editFieldClass}
              />
            </label>

            <label className="block">
              <span className="font-mono text-[7px] font-black uppercase tracking-[0.12em] text-[#5e6965]">
                Message
              </span>
              <textarea
                required
                minLength={10}
                maxLength={1200}
                rows={4}
                value={draft.message}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                className={`${editFieldClass} resize-none leading-5`}
              />
            </label>

            {editError && (
              <p role="alert" className="text-xs font-bold text-[#b13b27]">
                {editError}
              </p>
            )}
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-2 border-t border-[#111413]/10 bg-[#ebe7de]/70 p-3">
            <button
              type="button"
              onClick={cancelEditing}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#111413]/15 px-4 text-xs font-black transition hover:border-[#111413]"
            >
              <X size={14} aria-hidden="true" /> Cancel edit
            </button>
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#d7ff43] px-4 text-xs font-black transition hover:bg-[#c5ee31]"
            >
              <Check size={14} strokeWidth={3} aria-hidden="true" /> Save changes
            </button>
          </div>
        </form>
      ) : (
        <>
          <dl className="divide-y divide-[#111413]/10 px-4">
            <div className="py-3">
              <dt className="font-mono text-[7px] font-black uppercase tracking-[0.12em] text-[#5e6965]">
                Name
              </dt>
              <dd className="mt-1 text-sm font-bold">{contact.name}</dd>
            </div>
            <div className="py-3">
              <dt className="font-mono text-[7px] font-black uppercase tracking-[0.12em] text-[#5e6965]">
                Reply email
              </dt>
              <dd className="mt-1 break-all text-sm font-bold">{contact.email}</dd>
            </div>
            <div className="py-3">
              <dt className="font-mono text-[7px] font-black uppercase tracking-[0.12em] text-[#5e6965]">
                Message
              </dt>
              <dd className="mt-1 whitespace-pre-wrap text-sm leading-5 text-[#3f4844]">
                {contact.message}
              </dd>
            </div>
          </dl>

          {status === "error" && (
            <p role="alert" className="mx-4 mb-3 text-xs font-bold text-[#b13b27]">
              That didn’t go through. Please try again.
            </p>
          )}

          <div className="grid grid-cols-[auto_auto_1fr] gap-2 border-t border-[#111413]/10 bg-[#ebe7de]/70 p-3">
            <button
              type="button"
              onClick={beginEditing}
              disabled={status === "sending"}
              aria-label="Edit message details"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#111413]/15 transition hover:border-[#111413] disabled:opacity-40"
            >
              <Pencil size={14} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onCancel}
              disabled={status === "sending"}
              aria-label="Cancel message"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#111413]/15 transition hover:border-[#111413] disabled:opacity-40"
            >
              <X size={15} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onConfirm}
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111413] px-4 text-xs font-black text-white transition hover:bg-[#6a75ef] disabled:cursor-wait disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Confirm & send"}
              <Send size={13} aria-hidden="true" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
