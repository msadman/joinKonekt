import { getRandomMember } from "@/utils/members";
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const member = await getRandomMember();
  return NextResponse.json(member);
}