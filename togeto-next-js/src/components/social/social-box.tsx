// Company social links — Venture Electronics.
// (Facebook URL pending confirmation; YouTube / LinkedIn / VK are live.)
const socialData = [
  {
    id: 1,
    name: 'Facebook',
    url: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}>
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'YouTube',
    url: 'https://www.youtube.com/@VentureElectronics',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}>
        <path d="M23 12s0-3.17-.4-4.69a2.5 2.5 0 0 0-1.77-1.77C19.32 5.13 12 5.13 12 5.13s-7.32 0-8.83.41A2.5 2.5 0 0 0 1.4 7.31C1 8.83 1 12 1 12s0 3.17.4 4.69a2.5 2.5 0 0 0 1.77 1.77c1.51.41 8.83.41 8.83.41s7.32 0 8.83-.41a2.5 2.5 0 0 0 1.77-1.77C23 15.17 23 12 23 12zM9.75 15.27V8.73L15.5 12l-5.75 3.27z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/venture-mfg.com/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}>
        <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2zM8.08 18.34H5.16V9.4h2.92v8.94zM6.62 8.2a1.69 1.69 0 1 1 0-3.39 1.69 1.69 0 0 1 0 3.39zm11.72 10.14h-2.91v-4.35c0-1.04-.02-2.37-1.45-2.37-1.45 0-1.67 1.13-1.67 2.3v4.42H9.4V9.4h2.79v1.22h.04a3.06 3.06 0 0 1 2.76-1.51c2.95 0 3.5 1.94 3.5 4.46v4.77z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'VK',
    url: 'https://vk.com/venturepcb',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}>
        <path d="M13.16 16.94c-5.46 0-8.86-3.74-9-9.94h2.74c.1 4.55 2.16 6.5 3.76 6.9V7h2.58v3.94c1.6-.17 3.28-1.98 3.84-3.94h2.58c-.43 2.42-2.24 4.23-3.53 4.97 1.29.6 3.35 2.18 4.14 4.97h-2.84c-.61-1.92-2.14-3.4-4.19-3.6v3.6h-.31z" />
      </svg>
    ),
  },
];

const SocialBox = () => {
  return (
    <>
      {socialData.map((social) => (
        <a
          key={social.id}
          href={social.url}
          aria-label={social.name}
          {...(social.url !== '#'
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          <span>{social.icon}</span>
        </a>
      ))}
    </>
  );
};
export default SocialBox;
