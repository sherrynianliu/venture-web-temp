import Image from 'next/image';
import Link from 'next/link';
import { ITeamDT } from '@/types/team-d-t';

interface TeamItemProps {
  team: ITeamDT;
}

const TeamItemOne = ({ team }: TeamItemProps) => {
  return (
    <div className="it-team-item fix p-relative mb-30">
      <div className="it-team-thumb">
        <Image
          className="w-100 image-height-auto"
          src={team.image}
          alt={team.name}
          width={416}
          height={500}
        />
      </div>
      <div className="it-team-content-box">
        <div className="it-team-content">
          <h4 className="it-team-title">
            <Link
              className="border-line-white"
              href={`/team-details/${team.id}`}
            >
              {team.name}
            </Link>
          </h4>
          <span>{team.designation}</span>
          <div className="it-team-social">
            {team.socials.map((social, i) => (
              <Link key={i} href={social.link}>
                <span>{social.platform}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamItemOne;
