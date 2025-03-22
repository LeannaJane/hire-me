import AuthLayout from "../Layouts/AuthLayout";

export default function JobApplications({routes, user}) {
    return (
        <AuthLayout routes={routes}>
            <h1>Your Applications</h1>
        </AuthLayout>
    );
}
