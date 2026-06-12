const widgetData = [
  'Request A Freight',
  'Our Services',
  'What We Do',
  'Abandonment Cart',
  'Shipments',
  'Pricing Flexibility',
];

const FooterWidgetTwo = () => {
  return (
    <div className="it-footer-widget it-footer-col-3">
      <h4 className="it-footer-widget-title">Services</h4>
      <div className="it-footer-widget-menu">
        <ul>
          {widgetData.map((item, i) => (
            <li key={i}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FooterWidgetTwo;
