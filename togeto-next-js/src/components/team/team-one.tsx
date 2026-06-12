import Link from 'next/link';
import { teamDataOne } from '@/data/team-data';
import TeamItemOne from './team-item/team-item-one';

const TeamOne = () => {
  return (
    <div id="team" className="it-team-area pt-130 pb-130">
      <div className="container">
        <div className="it-team-top-wrap pb-65">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-6">
              <div className="it-section-title-box">
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Creative <span>Team</span> Members
                </h4>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div
                className="it-service-btn text-lg-end it-fade-anim"
                data-fade-from="top"
                data-ease="bounce"
                data-delay=".5"
              >
                <Link className="it-btn-orange" href="/team">
                  <span>View All Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-20">
          {teamDataOne
            .map((team, i) => (
              <div
                key={team.id}
                className="col-lg-4 col-md-6 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay={`${0.3 + 0.2 * i}s`}
              >
                <TeamItemOne team={team} />
              </div>
            ))
            .slice(0, 3)}
        </div>
      </div>
    </div>
  );
};
export default TeamOne;
