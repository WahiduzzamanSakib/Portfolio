
import { getProjectById } from "@/lib/api";
import ViewDetails from "./ViewDetails";

const ViewDetailsPage = async ({ params }) => {
    const { id } = await params;

    const project = await getProjectById(id);

    return (
        <ViewDetails project={project} />
    );
};

export default ViewDetailsPage;