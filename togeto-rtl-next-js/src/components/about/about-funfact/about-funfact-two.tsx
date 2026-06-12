import Counter from '@/components/funfact/counter-item/counter-item';

const counterData = [
  {
    id: 1,
    countNum: 25,
    countSuffix: '+',
    countTitle: 'New Partners <br /> Every Year',
  },
  {
    id: 2,
    countNum: 97,
    countSuffix: '+',
    countTitle: ' Years Of Field <br /> Experience',
  },
  {
    id: 3,
    countNum: 18,
    countSuffix: '+',
    countTitle: 'Talented Staffs <br /> Worldwide',
  },
  {
    id: 4,
    countNum: 115,
    countSuffix: '+',
    countTitle: 'Successful Project <br /> Completion',
  },
];

const AboutFunFactTwo = () => {
  return (
    <div className="it-about-2-funfact-wrap">
      <div className="row">
        {counterData.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-3 col-sm-6">
            <div className="it-about-2-funfact">
              <h5 className="it-about-2-funfact-number">
                <Counter
                  start={0}
                  end={item.countNum}
                  duration={3}
                  counterSuffix={item.countSuffix}
                />
              </h5>
              <span
                className="it-about-2-funfact-text"
                dangerouslySetInnerHTML={{ __html: item.countTitle }}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AboutFunFactTwo;
