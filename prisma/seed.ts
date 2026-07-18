// prisma/seed.ts
import prisma from "../src/lib/prisma";

async function main() {
  // Optional: clear existing data (be careful in production)
  // Adjust order based on your relations if you add more models later.
  await prisma.person.deleteMany();
  await prisma.organization.deleteMany();
  await prisma.admin.deleteMany();

  // -------- Admins --------
  const admin1 = await prisma.admin.create({
    data: {
      name: "Demo Admin",
      email: "admin@fh-abalat.dev",
      passwordHash: "$2b$10$demo-hash-placeholder-replace-with-real-hash",
      role: "admin",
    },
  });

  const admin2 = await prisma.admin.create({
    data: {
      name: "Operations Admin",
      email: "ops@fh-abalat.dev",
      passwordHash: "$2b$10$demo-hash-placeholder-replace-with-real-hash",
      role: "admin",
    },
  });

  // -------- Organizations --------
  const org1 = await prisma.organization.create({
    data: {
      name: "FH-Abalat Community",
      type: "Nonprofit",
      owner: "",
      industry: "Community & Religion",
      locationCity: "Rotterdam",
      locationRegion: "South Holland",
      website: "https://fh-abalat.example.org",
      phone: "+31-10-1234567",
      email: "info@fh-abalat.example.org",
      description:
        "Demo organization for FH-Abalat attendance and membership management.",
      status: "verified",
      verified: true,
    },
  });

  const org2 = await prisma.organization.create({
    data: {
      name: "FH-Abalat Youth Group",
      type: "Nonprofit",
      owner: "Mr. Abate R.",
      industry: "Youth & Education",
      locationCity: "Rotterdam",
      locationRegion: "South Holland",
      website: "https://youth.fh-abalat.example.org",
      phone: "+31-10-7654321",
      email: "youth@fh-abalat.example.org",
      description: "Youth group under FH-Abalat for attendance tracking demo.",
      status: "active",
      verified: true,
    },
  });

  // -------- People (Members) --------
  const peopleData = [
    {
      fullName: "Abebe Kebede",
      phone: "+31-6-11111111",
      email: "abebe@example.com",
      currentOrganizationId: org1.id,
      jobTitle: "Member",
      skills: ["Teaching", "Choir"],
      experienceYears: 3,
      locationCity: "Rotterdam",
      locationRegion: "South Holland",
      employed: true,
      verified: true,
    },
    {
      fullName: "Betty Mulugeta",
      phone: "+31-6-22222222",
      email: "betty@example.com",
      currentOrganizationId: org1.id,
      jobTitle: "Volunteer",
      skills: ["Event Planning", "Logistics"],
      experienceYears: 2,
      locationCity: "Rotterdam",
      locationRegion: "South Holland",
      employed: false,
      verified: true,
    },
    {
      fullName: "Chala Tadesse",
      phone: "+31-6-33333333",
      email: "chala@example.com",
      currentOrganizationId: org1.id,
      jobTitle: "Member",
      skills: ["IT", "Media"],
      experienceYears: 4,
      locationCity: "The Hague",
      locationRegion: "South Holland",
      employed: true,
      verified: false,
    },
    {
      fullName: "Dawit Solomon",
      phone: "+31-6-44444444",
      email: "dawit@example.com",
      currentOrganizationId: org2.id,
      jobTitle: "Youth Leader",
      skills: ["Mentoring", "Teaching"],
      experienceYears: 5,
      locationCity: "Rotterdam",
      locationRegion: "South Holland",
      employed: true,
      verified: true,
    },
    {
      fullName: "Elsa Yonas",
      phone: "+31-6-55555555",
      email: "elsa@example.com",
      currentOrganizationId: org2.id,
      jobTitle: "Member",
      skills: ["Choir", "Art"],
      experienceYears: 1,
      locationCity: "Rotterdam",
      locationRegion: "South Holland",
      employed: false,
      verified: true,
    },
    {
      fullName: "Fasil Haile",
      phone: "+31-6-66666666",
      email: "fasil@example.com",
      currentOrganizationId: org1.id,
      jobTitle: "Member",
      skills: ["Logistics"],
      experienceYears: 0,
      locationCity: "Utrecht",
      locationRegion: "Utrecht",
      employed: true,
      verified: false,
    },
    {
      fullName: "Genet Alemu",
      phone: "+31-6-77777777",
      email: "genet@example.com",
      currentOrganizationId: org1.id,
      jobTitle: "Volunteer",
      skills: ["Teaching", "Kids Ministry"],
      experienceYears: 2,
      locationCity: "Rotterdam",
      locationRegion: "South Holland",
      employed: false,
      verified: true,
    },
    {
      fullName: "Hana Desta",
      phone: "+31-6-88888888",
      email: "hana@example.com",
      currentOrganizationId: org2.id,
      jobTitle: "Member",
      skills: ["Media", "Photography"],
      experienceYears: 3,
      locationCity: "Rotterdam",
      locationRegion: "South Holland",
      employed: true,
      verified: true,
    },
  ];

  const createdPeople = await prisma.person.createMany({
    data: peopleData,
  });

  // If you later add Attendance, EventTemplate, EventOccurrence, etc.,
  // you can extend this seed to create demo records linked to these people/orgs.

  console.log("Seed completed:");
  console.log(`- Admins: ${await prisma.admin.count()}`);
  console.log(`- Organizations: ${await prisma.organization.count()}`);
  console.log(`- People: ${await prisma.person.count()}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });