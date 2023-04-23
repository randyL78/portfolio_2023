export interface Education {
  institution: string;
  startDate: string;
  endDate?: string;
  title: string;
  focus: string;
  description: string;
  location?: string;
  gpa?: number;
}