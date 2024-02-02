import classes from "./TeamMember.module.css"

export default function TeamMember() {
  return (
    <div className={classes.container}>
      <h3>Team Members:</h3>
      <ul>
        <li>Red</li>
        <li>Garvit</li>
        <li>Salim</li>
        <li>Jian</li>
        <li>Taiye</li>
        <li>Isha</li>
        <li>Pawanjeet</li>
      </ul>
    </div>
  )
}