import Link from 'next/link';

const infoData = [
  {
    id: 1,
    title: 'Corporate Moves',
    description:
      'Flexible & Efficient Transport Locally <br /> & Internationally.',
  },
  {
    id: 2,
    title: ' Maximum Cargo Flexibility',
    description:
      'Flexible & Efficient Transport Locally <br /> & Internationally.',
  },
  {
    id: 3,
    title: 'Custom Logistics',
    description:
      'Flexible & Efficient Transport Locally <br /> & Internationally.',
  },
  {
    id: 4,
    title: 'Flexible Freight',
    description:
      'Flexible & Efficient Transport Locally <br /> & Internationally.',
  },
];

const ChooseItemOne = () => {
  return (
    <>
      <div className="row">
        {infoData.map((item) => (
          <div key={item.id} className="col-lg-6 col-md-6 col-sm-6 mb-10">
            <div className="it-choose-more-info">
              <h5 className="it-choose-more-title">{item.title}</h5>
              <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="it-fade-anim"
        data-fade-from="top"
        data-ease="bounce"
        data-delay=".5"
      >
        <Link className="it-btn-orange mt-20" href="/about">
          <span>Discover More</span>
        </Link>
      </div>
    </>
  );
};
export default ChooseItemOne;
