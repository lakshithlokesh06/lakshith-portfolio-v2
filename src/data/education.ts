import type { Education, EducationId } from "@/types/journey";
export const education: Record<EducationId, Education> = {
  puc: {
    id: "puc",
    institution: "St. Joseph’s Pre-University College",
    program: "PUC — CSBA",
    shortProgram: "PUC — CSBA",
    startYear: 2021,
    endYear: 2023,
    status: "Completed",
    subjects: [
      "Computer Science",
      "Statistics",
      "Business Studies",
      "Accountancy",
    ],
  },
  bca: {
    id: "bca",
    institution: "Jain (Deemed-to-be University)",
    program: "Bachelor of Computer Applications",
    shortProgram: "BCA — Data Analytics",
    specialization: "Data Analytics",
    location: "Bengaluru",
    status: "Completed",
    cgpa: "8.172",
  },
  msc: {
    id: "msc",
    institution: "Chanakya University",
    program: "MSc Data Science",
    shortProgram: "MSc — Data Science",
    location: "Bengaluru",
    startYear: 2026,
    status: "Current",
  },
};
export function educationPeriod(item: Education): string | undefined {
  if (item.startYear && item.endYear)
    return `${item.startYear}–${item.endYear}`;
  if (item.startYear) return `Since ${item.startYear}`;
  return undefined;
}
