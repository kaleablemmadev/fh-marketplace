// src/app/api/org/route.ts
import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export async function GET() {
  console.log("=== API GET /api/org called ===");
  
  try {
    // Test database connection
    console.log("Testing database connection...");
    await prisma.$connect();
    console.log("Database connected successfully");

    // Count total organizations
    const count = await prisma.organization.count();
    console.log(`Total organizations in database: ${count}`);

    // Fetch all organizations
    console.log("Fetching organizations...");
    const orgs = await prisma.organization.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    console.log(`Found ${orgs.length} organizations`);
    console.log("First organization:", orgs[0] || "No organizations found");

    // Serialize the data
    const serialized = orgs.map((org) => ({
      ...org,
      id: org.id.toString(),
      createdAt: org.createdAt.toISOString(),
      updatedAt: org.updatedAt.toISOString(),
    }));

    console.log("Sending response with", serialized.length, "organizations");
    return NextResponse.json(serialized);
    
  } catch (error) {
    console.error("=== ERROR in GET /api/org ===");
    console.error("Error details:", error);
    
    // Log more details about the error
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    
    return NextResponse.json(
      { 
        error: "Failed to load organizations",
        details: error instanceof Error ? error.message : String(error),
        stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  console.log("=== API POST /api/org called ===");
  
  try {
    const body = await request.json();
    console.log("Request body:", body);

    const {
      name,
      type,
      owner,
      industry,
      locationCity,
      locationRegion,
      website,
      phone,
      email,
      description,
    } = body;

    // Validate required fields
    const missingFields = [];
    if (!name) missingFields.push('name');
    if (!locationCity) missingFields.push('locationCity');
    if (!phone) missingFields.push('phone');

    if (missingFields.length > 0) {
      console.log("Missing required fields:", missingFields);
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    console.log("Creating organization...");
    const newOrg = await prisma.organization.create({
      data: {
        name,
        type: type ?? "organization",
        owner: owner || "Unknown",
        industry: industry ?? null,
        locationCity,
        locationRegion: locationRegion ?? null,
        website: website ?? null,
        phone,
        email: email ?? null,
        description: description ?? null,
        status: "pending",
        verified: false,
      },
    });

    console.log("Organization created:", newOrg);

    const serialized = {
      ...newOrg,
      id: newOrg.id.toString(),
      createdAt: newOrg.createdAt.toISOString(),
      updatedAt: newOrg.updatedAt.toISOString(),
    };

    return NextResponse.json(serialized, { status: 201 });
    
  } catch (error) {
    console.error("=== ERROR in POST /api/org ===");
    console.error("Error details:", error);
    
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    
    return NextResponse.json(
      { 
        error: "Failed to create organization",
        details: error instanceof Error ? error.message : String(error),
        stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}