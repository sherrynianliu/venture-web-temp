import Image from 'next/image';
import Link from 'next/link';
import { Location, Mail, PhoneTwo } from '@/components/svg';
import ProgressItem from '@/components/progress/progress-item';
import { ITeamDT } from '@/types/team-d-t';
import detailsImg from '@/assets/img/team/details.jpg';

interface TeamDetailsProps {
  team: ITeamDT;
}

const TeamDetailsArea = ({ team }: TeamDetailsProps) => {
  const {
    name = 'Unknown Member',
    image = detailsImg,
    designation = 'No Designation',
    phone = 'Not Available',
    email = 'Not Available',
    address = 'No Address',
    socials = [],
    skills = [],
  } = team || {};

  return (
    <div className="it-team-details-area pt-120 z-index-2">
      <div className="container">
        <div className="it-team-details-wrap">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="it-team-details-left">
                <div
                  className="it-team-details-left-thumb wow img-anim-top"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1"
                >
                  <Image
                    className="image-height-auto"
                    src={image}
                    alt={name}
                    width={303}
                    height={303}
                  />
                </div>
                <div className="it-team-details-left-social text-center">
                  {socials.map((social, i) => (
                    <Link key={i} href={social.link}>
                      <span>{social.platform}</span>
                    </Link>
                  ))}
                </div>
                <div className="it-team-details-list mb-40">
                  <ul>
                    <li>
                      <span>
                        <PhoneTwo />
                        <a href={`tel:${phone}`}>{phone}</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <Mail />
                        <a href={`mailto:${email}`}>{email}</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <Location />
                        <a
                          href="https://www.google.com/maps/@23.5412708,91.7791619,13z?entry=ttu"
                          target="_blank"
                        >
                          {address}
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  className="it-team-details-left-btn it-fade-anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-delay=".5"
                >
                  <Link className="it-btn-orange" href="/contact-us">
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="it-team-details-right">
                <div className="it-team-details-right-title-box">
                  <h4 className="title">{name}</h4>
                  <span>{designation}</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. officia deserunt mollit
                    anim id est.
                  </p>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="it-team-details-right-content it-team-details-right-title-box mb-40">
                      <h4>Career guideline</h4>
                      <p>
                        Standard dummy text ever since the unknown printer took
                        galley of scramble make a type specimen book has the
                        been industry.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="it-progress-bar-wrap">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className={
                            skills.length - 1 !== index
                              ? 'it-progress-bar-item mb-10'
                              : 'it-progress-bar-item'
                          }
                        >
                          <label>{skill.title}</label>
                          <ProgressItem value={skill.value} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamDetailsArea;
