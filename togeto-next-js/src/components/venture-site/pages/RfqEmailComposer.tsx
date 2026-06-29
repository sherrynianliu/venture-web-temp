"use client";

import { FormEvent, useMemo, useState } from "react";
import { CONTACT_CHANNELS } from "@/components/venture-site/content/contact-channels";

const projectTypes = [
  "PCB Assembly / PCBA",
  "Turnkey PCBA",
  "EMS / Box Build",
  "Component Sourcing / BOM / DFM",
  "PCB Fabrication Support",
  "Other / Not sure yet",
];

const fileOptions = [
  "Gerber or ODB++",
  "BOM",
  "CPL / Pick-and-Place",
  "Assembly drawing",
  "Mechanical drawings",
  "Test procedure / fixture details",
  "Other project files",
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  quantity: string;
  targetSchedule: string;
  deliveryDestination: string;
  projectType: string;
  projectSummary: string;
  testingRequirements: string;
  filesReady: string[];
};

const initialFormState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  quantity: "",
  targetSchedule: "",
  deliveryDestination: "",
  projectType: projectTypes[0],
  projectSummary: "",
  testingRequirements: "",
  filesReady: [],
};

function buildRfqBody(form: FormState) {
  const files = form.filesReady.length ? form.filesReady.join(", ") : "Not selected yet";

  return [
    "Hello Venture Electronics team,",
    "",
    "Please review this RFQ request.",
    "",
    `Contact person: ${form.name}`,
    `Company: ${form.company}`,
    `Email: ${form.email}`,
    `Phone / WhatsApp: ${form.phone}`,
    `Project type: ${form.projectType}`,
    `Quantity: ${form.quantity}`,
    `Target schedule: ${form.targetSchedule}`,
    `Delivery destination: ${form.deliveryDestination}`,
    `Files available: ${files}`,
    "Message:",
    form.projectSummary,
    "",
    "Testing needs:",
    form.testingRequirements,
    "",
    "I will attach Gerber, BOM, CPL, drawings or related project files in this email client before sending.",
  ].join("\n");
}

export function RfqEmailComposer() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [copyStatus, setCopyStatus] = useState("");
  const RFQ_EMAIL = CONTACT_CHANNELS.rfqEmail;

  const subject = useMemo(() => {
    const label = form.company || form.projectType || "Project";
    return `Venture Electronics RFQ - ${label}`;
  }, [form.company, form.projectType]);

  const mailtoHref = useMemo(() => {
    const body = buildRfqBody(form);
    return `mailto:${RFQ_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [RFQ_EMAIL, form, subject]);

  function updateField(field: keyof Omit<FormState, "filesReady">, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleFile(option: string) {
    setForm((current) => ({
      ...current,
      filesReady: current.filesReady.includes(option)
        ? current.filesReady.filter((item) => item !== option)
        : [...current.filesReady, option],
    }));
  }

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  async function copyRfqDetails() {
    const body = buildRfqBody(form);

    try {
      await navigator.clipboard.writeText(body);
      setCopyStatus("RFQ details copied.");
    } catch {
      setCopyStatus("Copy failed. Please use Prepare RFQ Email or copy the fields manually.");
    }
  }

  return (
    <section className="rfq-composer" aria-labelledby="rfq-composer-title">
      <div className="rfq-composer__head">
        <p className="rfq-composer__eyebrow">Email-first RFQ</p>
        <h2 id="rfq-composer-title">Prepare an RFQ email for Venture Electronics</h2>
        <p>
          Fill in the fields below and the site will prepare an email to {RFQ_EMAIL}. Review the
          message in your email client, attach Gerber, BOM, CPL, drawings, or related files, then
          send it manually.
        </p>
        <p>
          This first-launch RFQ page does not upload files directly. Email Gerber, BOM, CPL,
          drawings or other sensitive files through the confirmed Venture Electronics contact
          channel.
        </p>
      </div>

      <form className="rfq-composer__form" onSubmit={prepareEmail}>
        <div className="rfq-composer__grid">
          <label>
            <span>Contact person</span>
            <input
              required
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              autoComplete="name"
            />
          </label>
          <label>
            <span>Company</span>
            <input
              required
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              autoComplete="organization"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              autoComplete="email"
            />
          </label>
          <label>
            <span>Phone / WhatsApp</span>
            <input
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              autoComplete="tel"
            />
          </label>
          <label>
            <span>Quantity</span>
            <input
              value={form.quantity}
              onChange={(event) => updateField("quantity", event.target.value)}
              inputMode="numeric"
            />
          </label>
          <label>
            <span>Target schedule</span>
            <input
              value={form.targetSchedule}
              onChange={(event) => updateField("targetSchedule", event.target.value)}
            />
          </label>
          <label>
            <span>Delivery destination</span>
            <input
              value={form.deliveryDestination}
              onChange={(event) => updateField("deliveryDestination", event.target.value)}
            />
          </label>
          <label>
            <span>Project type</span>
            <select
              value={form.projectType}
              onChange={(event) => updateField("projectType", event.target.value)}
            >
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>

        <fieldset className="rfq-composer__files">
          <legend>Files available</legend>
          {fileOptions.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={form.filesReady.includes(option)}
                onChange={() => toggleFile(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </fieldset>

        <label className="rfq-composer__full">
          <span>Message</span>
          <textarea
            required
            rows={4}
            value={form.projectSummary}
            onChange={(event) => updateField("projectSummary", event.target.value)}
          />
        </label>

        <label className="rfq-composer__full">
          <span>Testing needs</span>
          <textarea
            rows={3}
            value={form.testingRequirements}
            onChange={(event) => updateField("testingRequirements", event.target.value)}
          />
        </label>

        <div className="rfq-composer__actions">
          <button type="submit">Prepare RFQ Email</button>
          <button type="button" onClick={copyRfqDetails}>
            Copy RFQ Details
          </button>
          <p>
            If your email client does not open, email Gerber, BOM, CPL, drawings, and project
            requirements to {RFQ_EMAIL}.
          </p>
          {copyStatus ? <p role="status">{copyStatus}</p> : null}
        </div>
      </form>
    </section>
  );
}
