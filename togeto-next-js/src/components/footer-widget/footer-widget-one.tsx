import Link from 'next/link';

// Venture quick links — Solutions (mirrors the Services nav dropdown).
const widgetData = [
  { label: 'PCB Assembly / PCBA', href: '/service-details/1' },
  { label: 'Turnkey PCB Assembly', href: '/service-details/2' },
  { label: 'EMS & Box Build', href: '/service-details/3' },
  { label: 'Component Sourcing & BOM Review', href: '/service-details/4' },
  { label: 'Testing & Quality Control', href: '/service-details/5' },
  { label: 'PCB Fabrication', href: '/service-details/6' },
];

const FooterWidgetOne = () => {
  return (
    <div className="it-footer-widget it-footer-col-2">
      <h4 className="it-footer-widget-title">Solutions</h4>
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
export default FooterWidgetOne;
