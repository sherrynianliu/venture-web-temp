import { CONTACT_CHANNELS } from "@/components/venture-site/content/contact-channels";

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.65 2.81a2 2 0 0 1-.45 2.11L8.04 9.91a16 16 0 0 0 6.05 6.05l1.27-1.27a2 2 0 0 1 2.11-.45c.91.3 1.85.52 2.81.65A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const TopBarArea = () => {
  return (
    <div className="venture-top-strip__bar">
      <ul className="venture-top-strip__list" aria-label="Venture Electronics contact shortcuts">
        <li className="venture-top-strip__item venture-top-strip__item--optional">
          <PhoneIcon />
          <a href={CONTACT_CHANNELS.phoneHref}>{CONTACT_CHANNELS.phone}</a>
        </li>
        <li className="venture-top-strip__item">
          <MailIcon />
          <a href={`mailto:${CONTACT_CHANNELS.generalEmail}`}>{CONTACT_CHANNELS.generalEmail}</a>
        </li>
        <li className="venture-top-strip__item venture-top-strip__item--wide">
          <LocationIcon />
          <a
            href="https://maps.google.com/?q=Chentian+Industrial+Area+Xixiang+Bao%27an+Shenzhen"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACT_CHANNELS.location}
          </a>
        </li>
      </ul>
    </div>
  );
};
export default TopBarArea;
