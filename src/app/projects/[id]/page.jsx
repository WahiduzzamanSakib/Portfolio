import ViewDetails from "./ViewDetails";
import projects from "../../../../public/projects.json";

const ViewDetailsPage = async ({ params }) => {
    const { id } = await params;

    const project = projects.find(
        (item) => item.id === id
    );

    return (
        <ViewDetails project={project} />
    );
};

export default ViewDetailsPage;