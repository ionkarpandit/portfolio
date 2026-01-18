export default interface Company {
    name: string;
    role?: string;
    startDate: string;
    endDate: string;
    logoUrl: string;
    isCurrent: boolean,
    designation:string;
    responsibilities?: string[];
    technologies?: string[];
    points: string[];
    projects: { title: string; description: string }[];
}