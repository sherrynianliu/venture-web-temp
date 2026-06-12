import Counter from '@/components/funfact/counter-item/counter-item';

interface AboutProps {
  itemClass?: string;
}

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
];

const AboutFunFactOne = ({ itemClass }: AboutProps) => {
  return (
    <div className={itemClass || 'it-about-2-funfcat-wrap'}>
      <div className="row gx-0">
        {counterData.map((item) => (
          <div key={item.id} className="col-sm-4 col-6 mb-20">
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
export default AboutFunFactOne;
