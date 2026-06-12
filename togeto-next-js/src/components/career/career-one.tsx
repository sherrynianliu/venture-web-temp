import Link from 'next/link';
import { CareerIcon, Clock } from '../svg';

const careerData = [
  {
    id: 1,
    title: 'Software Engineer',
    companyIcon: <CareerIcon />,
    company: 'Togeto',
    infos: [
      { id: 1, icon: 'fa-regular fa-flag-swallowtail', info: 'South Korea' },
      { id: 2, icon: 'fa-regular fa-location-dot', info: 'America' },
      { id: 3, icon: 'fa-regular fa-briefcase', info: 'Togeto' },
      { id: 4, icon: 'fa-regular fa-sack-dollar', info: '$50k - $100k yearly' },
    ],
    tags: ['App', 'Figma', 'PSD', 'Software'],
    deadline: '20 August, 2025',
    btnText: 'Apply Now',
    btnUrl: '/contact',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    companyIcon: <CareerIcon />,
    company: 'Ordain It',
    infos: [
      { id: 1, icon: 'fa-regular fa-flag-swallowtail', info: 'South Korea' },
      { id: 2, icon: 'fa-regular fa-location-dot', info: 'America' },
      { id: 3, icon: 'fa-regular fa-briefcase', info: 'Togeto' },
      { id: 4, icon: 'fa-regular fa-sack-dollar', info: '$50k - $100k yearly' },
    ],
    tags: ['App', 'Figma', 'PSD', 'Software'],
    deadline: '25 November, 2025',
    btnText: 'Apply Now',
    btnUrl: '/contact',
  },
];

const CareerOne = () => {
  return (
    <div className="it-career-area p-relative pt-130 pb-100">
      <div className="container">
        <div className="it-career-top-wrap pb-65">
          <div className="row align-items-end">
            <div className="col-xxl-8 col-xl-6 col-lg-6">
              <div className="it-section-title-box">
                <span className="it-section-subtitle">
                  Career Opportunities
                </span>
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Discover the Path to <br />
                  Your Dream Career
                </h4>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-6 col-lg-6">
              <div className="it-career-top-text text-lg-end">
                <div
                  className="it-fade-anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-delay=".5"
                >
                  <Link className="it-btn-orange" href="/about">
                    <span>View All Jobs</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-35">
          {careerData.map((career, i) => (
            <div
              key={career.id}
              className="col-lg-6 mb-30 wow animate__fadeInLeft"
              data-wow-duration=".9s"
              data-wow-delay={`${0.5 + 0.2 * i}s`}
            >
              <div className="it-career-item gray-bg">
                <div className="it-career-top-box mb-40 d-flex align-items-center">
                  <span className="it-career-icon">{career.companyIcon}</span>
                  <div>
                    <h4 className="it-career-title">{career.title}</h4>
                    <span>{career.company}</span>
                  </div>
                </div>
                <div className="it-career-meta mb-10">
                  <ul>
                    {career.infos.map((item) => (
                      <li key={item.id}>
                        <span>
                          <i className={item.icon}></i>
                          {item.info}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="it-career-tags">
                  {career.tags?.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <div className="it-career-btn d-flex justify-content-between align-items-center">
                  <span>
                    <Clock />
                    {career.deadline}
                  </span>
                  <Link
                    href={career.btnUrl}
                    className="it-btn-border border-style-4"
                  >
                    <span>{career.btnText}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CareerOne;
