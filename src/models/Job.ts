import { Company } from './Company';

export class Job {
  id: number;
  title: string;
  description: string;
  company: Company;
  created_at: Date;
  updated_at: Date;
}
