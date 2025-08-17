export type project_type = {
    id: number;
    title: string;
    description: string;
    image: string;
    links: string;
    tech_stack: string[];
};

declare const projects: project_type[];

export default projects;