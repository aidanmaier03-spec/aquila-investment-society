"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error" | "unconfigured";

const { form } = contact;
const isConfigured = !form.endpoint.includes("YOUR_FORM_ID");

const fieldClass =
  "mt-2 block w-full rounded-2xl border border-line bg-white px-4 py-3.5 text-base text-ink transition-colors focus:border-red focus:outline-none focus:ring-2 focus:ring-red/15";
const labelClass = "text-sm text-ink-soft lowercase";

/**
 * Posts to Formspree. With JavaScript it submits in place and shows a status
 * message; without JavaScript it falls back to a normal form POST.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isConfigured) {
      setStatus("unconfigured");
      return;
    }
    const formEl = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(form.endpoint, {
        method: "POST",
        body: new FormData(formEl),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      formEl.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const message =
    status === "success"
      ? form.success
      : status === "error"
        ? form.error
        : status === "unconfigured"
          ? form.notConfigured
          : "";

  return (
    <form action={form.endpoint} method="POST" onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            {form.fields.name}
          </label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {form.fields.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          {form.fields.message}
        </label>
        <textarea id="contact-message" name="message" rows={5} required className={`${fieldClass} resize-y`} />
      </div>

      {/* Honeypot for spam, hidden from people and assistive technology */}
      <div aria-hidden="true" className="hidden">
        <label>
          Leave this field empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-red px-8 text-white lowercase transition-colors hover:bg-red-deep disabled:opacity-60"
        >
          {status === "sending" ? form.sending : form.submit}
        </button>
        <p role="status" aria-live="polite" className={`text-sm leading-relaxed ${status === "success" ? "text-ink" : "text-ink-soft"}`}>
          {message}
        </p>
      </div>
    </form>
  );
}
