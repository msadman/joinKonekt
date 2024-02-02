import Image from "next/image";
import TeamMember from "./components/team-members/TeamMember";

export default function Home() {
  return (
    <main>
      <h1>Deployment Test!</h1>

      <div>
        <TeamMember />
      </div>
    </main>
  );
}
