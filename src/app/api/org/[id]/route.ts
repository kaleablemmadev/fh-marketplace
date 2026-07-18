import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/src/lib/prisma';

// GET - Fetch a single organization by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const organization = await prisma.organization.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!organization) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(organization);
  } catch (error) {
    console.error('Error fetching organization:', error);
    return NextResponse.json(
      { error: 'Failed to fetch organization' },
      { status: 500 }
    );
  }
}

// PUT - Update an organization by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();

    const {
      name,
      type,
      industry,
      locationCity,
      locationRegion,
      website,
      email,
      phone,
      description,
      status,
      verified,
    } = body;

    // Check if organization exists
    const existingOrg = await prisma.organization.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!existingOrg) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }

    // Update organization
    const updatedOrganization = await prisma.organization.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        type,
        industry: industry || null,
        locationCity,
        locationRegion: locationRegion || null,
        website: website || null,
        email: email || null,
        phone,
        description: description || null,
        status: status || existingOrg.status,
        verified: verified !== undefined ? verified : existingOrg.verified,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(updatedOrganization);
  } catch (error) {
    console.error('Error updating organization:', error);
    return NextResponse.json(
      { error: 'Failed to update organization' },
      { status: 500 }
    );
  }
}

// DELETE - Delete an organization by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Check if organization exists
    const existingOrg = await prisma.organization.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!existingOrg) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }

    // Delete organization
    await prisma.organization.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json(
      { message: 'Organization deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting organization:', error);
    return NextResponse.json(
      { error: 'Failed to delete organization' },
      { status: 500 }
    );
  }
}

// PATCH - Partially update an organization by ID
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();

    // Check if organization exists
    const existingOrg = await prisma.organization.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!existingOrg) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }

    // Update only the fields that are provided
    const updateData: any = {
      updatedAt: new Date(),
    };

    if (body.name !== undefined) updateData.name = body.name;
    if (body.type !== undefined) updateData.type = body.type;
    if (body.industry !== undefined) updateData.industry = body.industry;
    if (body.locationCity !== undefined) updateData.locationCity = body.locationCity;
    if (body.locationRegion !== undefined) updateData.locationRegion = body.locationRegion;
    if (body.website !== undefined) updateData.website = body.website;
    if (body.email !== undefined) updateData.email = body.email;
    if (body.phone !== undefined) updateData.phone = body.phone;
    if (body.description !== undefined) updateData.description = body.description;
    if (body.status !== undefined) updateData.status = body.status;
    if (body.verified !== undefined) updateData.verified = body.verified;

    const updatedOrganization = await prisma.organization.update({
      where: {
        id: parseInt(id),
      },
      data: updateData,
    });

    return NextResponse.json(updatedOrganization);
  } catch (error) {
    console.error('Error updating organization:', error);
    return NextResponse.json(
      { error: 'Failed to update organization' },
      { status: 500 }
    );
  }
}