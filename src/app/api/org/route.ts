import prisma from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const orgs = await prisma.organization.findMany();

    const serialized = orgs.map((org) => ({
      ...org,
      id: org.id.toString(),
    }));

    return NextResponse.json(serialized);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to load organizations" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      type,
      owner,
      industry,
      locationCity,
      locationRegion,
      website,
      phone,   // string
      email,
      description,
    } = body;

    if (!name || !locationCity || !phone) {
      return NextResponse.json(
        { error: "Fill all required fields (name, city, phone)." },
        { status: 400 }
      );
    }

    const newOrg = await prisma.organization.create({
      data: {
        name,
        type: type ?? "organization",
        owner: owner,
        industry: industry ?? null,
        locationCity,
        locationRegion: locationRegion ?? null,
        website: website ?? null,
        phone, // now a String in the schema
        email: email ?? null,
        description: description ?? null,
        status: "pending",
        verified: false,
      },
    });

    const serialized = {
      ...newOrg,
      id: newOrg.id.toString(),
    };

    return NextResponse.json(serialized);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create new organization" },
      { status: 500 }
    );
  }
}