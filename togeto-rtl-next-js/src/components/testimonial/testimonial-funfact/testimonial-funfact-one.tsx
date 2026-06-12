import Counter from '@/components/funfact/counter-item/counter-item';

const counterData = [
  {
    id: 1,
    countNum: 25,
    countSuffix: '+',
    countTitle: 'Winning award Best <br /> Shipping company',
  },
  {
    id: 2,
    countNum: 97,
    countSuffix: '+',
    countTitle: ' Happy Customers <br /> around the world',
  },
];

const TestimonialFunFactOne = () => {
  return (
    <div className="it-about-2-funfcat-wrap d-flex align-content-center justify-content-between">
      {counterData.map((item) => (
        <div key={item.id} className="it-about-2-funfact">
          <h5 className="it-about-2-funfact-number">
            <Counter
              start={0}
              end={item.countNum}
              duration={3}
              counterSuffix={item.countSuffix}
            />
          </h5>
          <span
            className="it-testimonial-funfact-text"
            dangerouslySetInnerHTML={{ __html: item.countTitle }}
          ></span>
        </div>
      ))}
    </div>
  );
};
export default TestimonialFunFactOne;
