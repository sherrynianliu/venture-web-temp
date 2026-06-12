import { Metadata } from 'next';
import { teamData } from '@/data/team-data';
import TeamDetailsMain from '@/views/team-details/team-details';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const team = teamData.find((team) => String(team.id) === params.id);
  return {
    title: team ? `Togeto - ${team.name}` : 'Togeto - Team Member Not Found',
  };
}

export async function generateStaticParams() {
  return teamData.map((team) => ({
    id: String(team.id),
  }));
}

export default function TeamDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const team = teamData.find((team) => String(team.id) === params.id);
  return team ? (
    <TeamDetailsMain team={team} />
  ) : (
    <div className="text-center pt-100">
      Team member not found with ID: {params.id}
    </div>
  );
}
