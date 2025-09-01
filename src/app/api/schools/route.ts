import { NextResponse } from "next/server";
import {prisma} from "../../../lib/prisma"; // make sure prisma.ts is in /lib
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const contact = formData.get("contact") as string;
    const email_id = formData.get("email_id") as string;
    const imageFile = formData.get("image") as File;

    if (!name || !address || !city || !state || !contact || !email_id || !imageFile) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const folderPath = path.join(process.cwd(), "public", "schoolImages");
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

    const fileName = `${Date.now()}-${imageFile.name}`;
    const filePath = path.join(folderPath, fileName);
    const arrayBuffer = await imageFile.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

    const school = await prisma.school.create({
      data: {
        name,
        address,
        city,
        state,
        contact,
        email_id,
        image: `/schoolImages/${fileName}`,
      },
    });

    return NextResponse.json(school, { status: 201 });
  } catch (error: any) {
    console.error("Server Error:", error);

    // Send the actual error message to frontend safely
    return NextResponse.json(
      { error: error.message || "Unknown server error" },
      { status: 500 }
    );
  }
}
