import { data } from "autoprefixer";
import classes from "./team-member.module.css"
import { getAllMembers } from "@/utils/members"

export default async function TeamMember() {
  const members = await getAllMembers();
  return (
    <div className={classes.container}>
      <h3>Team Members:</h3>
      <ul>
        {members.map(member => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
}

