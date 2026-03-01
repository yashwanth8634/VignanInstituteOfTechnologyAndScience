import { departments } from "../../../../data/departments";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const department = departments[resolvedParams.id as keyof typeof departments];
    const title = department ? department.name : "Department";

    return {
        title: `${title.trim()} Department | VITS`,
        description: `Information and details about the ${title} at Vignan Institute of Technology and Science.`,
    };
}

export default function DepartmentLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}  
