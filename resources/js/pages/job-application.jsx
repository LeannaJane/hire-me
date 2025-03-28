import ApplicationTable from "../Components/ApplicationTable";
import AuthLayout from "../Layouts/AuthLayout";

export default function JobApplications({routes, user, applications}) {
    return (
        <AuthLayout routes={routes}>
            <h1 className="mb-4 fs-4 fw-bold ">Your Applications</h1>
            <ApplicationTable applications={applications}></ApplicationTable>
        </AuthLayout>
    );
}
