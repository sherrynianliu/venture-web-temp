import Link from 'next/link';
import TeamItemOne from './team-item/team-item-one';
import { teamDataOne } from '@/data/team-data';

const TeamArea = () => {
  return (
    <div className="it-team-area pt-130 pb-130">
      <div className="container">
        <div className="it-team-top-wrap pb-65">
          <div className="row">
            <div className="col-12">
              <div className="it-section-title-box text-center">
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Meet Our Qualified Experts
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-35">
          {teamDataOne.map((team, i) => (
            <div
              key={team.id}
              className="col-lg-4 col-md-6 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay={`${0.3 + 0.2 * i}s`}
            >
              <TeamItemOne team={team} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="it-service-btn text-center mt-40 it-fade-anim"
              data-fade-from="top"
              data-ease="bounce"
              data-delay=".5"
            >
              <Link className="it-btn-orange" href="#">
                <span>View All Team</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamArea;
