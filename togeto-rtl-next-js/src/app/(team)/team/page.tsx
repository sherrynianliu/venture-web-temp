import { Metadata } from 'next';
import TeamMain from '@/views/team/team';

export const metadata: Metadata = {
  title: 'Togeto - Team Page',
};

const TeamPage = () => {
  return <TeamMain />;
};
export default TeamPage;
