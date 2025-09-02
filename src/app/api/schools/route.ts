import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import cloudinary from "../../../lib/cloudinary";

export const dynamic = "force-dynamic"; // For Vercel/Render

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
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ check if env vars are missing
    if (!process.env.CLOUDINARY_CLOUD_NAME ||
        !process.env.CLOUDINARY_API_KEY ||
        !process.env.CLOUDINARY_API_SECRET) {
      return NextResponse.json(
        { error: "Cloudinary environment variables are not set" },
        { status: 500 }
      );
    }

    // Convert image to buffer for upload
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    let uploadedImage;
    try {
      uploadedImage = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "schoolImages" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });
    } catch (uploadError: any) {
      console.error("Cloudinary Upload Error:", uploadError);
      return NextResponse.json(
        { error: `Image upload failed: ${uploadError.message || "Unknown error"}` },
        { status: 502 } // Bad Gateway – external service failed
      );
    }

    // Save to DB
    const school = await prisma.school.create({
      data: {
        name,
        address,
        city,
        state,
        contact,
        email_id,
        image: (uploadedImage as any).secure_url,
      },
    });

    return NextResponse.json(school, { status: 201 });

  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: error.message || "Unexpected server error" },
      { status: 500 }
    );
  }
}
