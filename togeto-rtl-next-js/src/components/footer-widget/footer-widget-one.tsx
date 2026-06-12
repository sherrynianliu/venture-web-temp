import Link from 'next/link';

const widgetData = [
  'About Us',
  'Our Services',
  'Our Team',
  'Open Positions',
  'Carers',
  'FAQ Page',
];

const FooterWidgetOne = () => {
  return (
    <div className="it-footer-widget it-footer-col-2">
      <h4 className="it-footer-widget-title">Our Devision</h4>
      <div className="it-footer-widget-menu">
        <ul>
          {widgetData.map((item, i) => (
            <li key={i}>
              <Link href="#">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FooterWidgetOne;
