import { useState } from "react";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Phone number is too long."),
  email: z.string().trim().email("Please enter a valid email.").max(255, "Email is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more about the part you need.")
    .max(1000, "Message is too long."),
});

type FormValues = { name: string; phone: string; email: string; message: string };

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<FormValues>({ name: "", phone: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setError("");
    setSubmitted(false);
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = enquirySchema.safeParse(values);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setSubmitted(true);
    setValues({ name: "", phone: "", email: "", message: "" });
  }

  return (
    <form
      onSubmit={submit}
      className={`bg-ink text-paper relative ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}`}
      noValidate
    >
      <span className="absolute left-0 top-0 h-10 w-10 bg-accent" aria-hidden="true" />
      <div className="relative">
        <p className="eyebrow text-accent">Parts enquiry</p>
        <h2 className="mt-3 font-display text-3xl leading-none">Tell us what you’re building.</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-paper/65">
          Send your part list and vehicle details. A specialist will call back with fitment,
          availability and delivery guidance.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="field-label">Name</span>
            <input
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
              className="field-dark"
              name="name"
              autoComplete="name"
              maxLength={100}
            />
          </label>
          <label className="block">
            <span className="field-label">Phone</span>
            <input
              value={values.phone}
              onChange={(event) => update("phone", event.target.value)}
              className="field-dark"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={30}
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="field-label">Email</span>
            <input
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
              className="field-dark"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={255}
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="field-label">Enquiry / message</span>
            <textarea
              value={values.message}
              onChange={(event) => update("message", event.target.value)}
              className="field-dark min-h-28 resize-y"
              name="message"
              rows={4}
              maxLength={1000}
            />
          </label>
        </div>
        {error && (
          <p className="mt-4 text-sm text-accent" role="alert">
            {error}
          </p>
        )}
        {submitted && (
          <p className="mt-4 text-sm text-paper" role="status">
            Thanks — your enquiry is queued for a specialist callback.
          </p>
        )}
        <button
          type="submit"
          className="mt-6 inline-flex items-center gap-2 bg-accent px-5 py-3 font-cond text-sm font-bold uppercase tracking-[0.12em] text-ink transition-transform hover:-translate-y-0.5"
        >
          Send enquiry{" "}
          <span aria-hidden="true" className="text-lg">
            →
          </span>
        </button>
      </div>
    </form>
  );
}
