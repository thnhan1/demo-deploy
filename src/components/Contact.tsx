import { useState } from "react";
import Section from "./Section";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <Section id="contact" title="Contact" eyebrow="Let's Collaborate">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6 max-w-md">
          <p className="text-soft leading-relaxed text-sm md:text-base">
            Want to discuss a backend system, API design, performance issue, or
            long-term architecture evolution? Send a short context summary and
            I'll get back promptly.
          </p>
          <div className="text-sm space-y-2">
            <div>
              <span className="text-faint">Email: </span>
              <a
                href="mailto:youremail@example.com"
                className="text-soft hover:text-brand"
              >
                youremail@example.com
              </a>
            </div>
            <div>
              <span className="text-faint">LinkedIn: </span>
              <a href="#" className="text-soft hover:text-brand">
                linkedin/@trannhan10
              </a>
            </div>
            <div>
              <span className="text-faint">GitHub: </span>
              <a href="#" className="text-soft hover:text-brand">
                github/thnhan1
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 card max-w-lg">
          <div className="grid gap-4">
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-soft">Name</span>
              <input
                required
                name="name"
                className="px-3 py-2 rounded-md bg-[var(--color-bg-accent)] border border-base focus:outline-none focus:border-brand/60 text-soft text-sm"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-soft">Email</span>
              <input
                required
                type="email"
                name="email"
                className="px-3 py-2 rounded-md bg-[var(--color-bg-accent)] border border-base focus:outline-none focus:border-brand/60 text-soft text-sm"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-soft">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                className="px-3 py-2 rounded-md resize-y bg-[var(--color-bg-accent)] border border-base focus:outline-none focus:border-brand/60 text-soft text-sm leading-relaxed"
              />
            </label>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={status !== "idle"}
              className="btn-primary px-6 py-2 rounded-md text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "idle" && "Send"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Sent ✓"}
            </button>
            {status === "sent" && (
              <span className="text-xs text-faint">
                (Demo only – hook to backend later)
              </span>
            )}
          </div>
        </form>
      </div>
      <p className="text-xs text-faint mt-10">
        Placeholder links & form (no backend). Provide your real contact URLs /
        email alias to update.
      </p>
    </Section>
  );
};

export default Contact;
