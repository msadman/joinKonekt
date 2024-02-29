import TeamMember from "./components/team-members/TeamMember";
import RandomMember from "./components/team-members/RandomMember";

export default function Home() {
  return (
    <main>
      <h1>Deployment Test!</h1>

      <div>
        <TeamMember/>
      </div>

      <div>
        <RandomMember />
      </div>
    </main>
  );
}


