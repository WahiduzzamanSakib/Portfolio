import { getProjects } from "@/lib/api";
import ViewDetails from "./ViewDetails";
// import projects from "../../../../public/projects.json";

const ViewDetailsPage = async ({ params }) => {
    const projects = await getProjects();
    const { id } = await params;

    const project = projects.find(
        (item) => item.id === id
    );

    return (
        <ViewDetails project={project} />
    );
};

export default ViewDetailsPage;