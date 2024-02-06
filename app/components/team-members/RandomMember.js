import { getRandomMember } from "@/utils/members";
import { member } from "@/utils/prisma";
import GenerateButton from "./GenerateButton";

export default async function RandomMember() {
  const handleBtnCLick = async () => {
    const member = await getRandomMember();
  }
  return (
    <>
      <h1>Click the button to get random members!</h1>
      {/* <GenerateButton handleBtnCLick={handleBtnCLick} /> */}
    </>
  )
}