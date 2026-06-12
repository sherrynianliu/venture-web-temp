'use client';

import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import { ITeamDT } from '@/types/team-d-t';
import FooterTwo from '@/layouts/footers/footer-two';
import Header from '@/layouts/headers/header';
import Wrapper from '@/layouts/wrapper';
import TeamDetailsArea from '@/components/team/team-details/team-details-area';
import TeamRelatedArea from '@/components/team/team-details/team-related-area';

interface TeamDetailsProps {
  team: ITeamDT;
}

const TeamDetailsMain = ({ team }: TeamDetailsProps) => {
  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      splitAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <Header />

      <main>
        <Breadcrumb title={team?.name} subtitle="Team Details" />
        <TeamDetailsArea team={team} />
        <TeamRelatedArea />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default TeamDetailsMain;
