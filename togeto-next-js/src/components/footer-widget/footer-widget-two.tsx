import Link from 'next/link';

// Venture quick links — Company (mirrors the main nav sections).
const widgetData = [
  { label: 'About', href: '/about' },
  { label: 'Quality & Testing', href: '/service-details/5' },
  { label: 'Engineering', href: '/service-details/6' },
  { label: 'Industries', href: '/portfolio' },
  { label: 'Resources', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const FooterWidgetTwo = () => {
  return (
    <div className="it-footer-widget it-footer-col-3">
      <h4 className="it-footer-widget-title">Company</h4>
      <div className="it-footer-widget-menu">
        <ul>
          {widgetData.map((item, i) => (
            <li key={i}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FooterWidgetTwo;
