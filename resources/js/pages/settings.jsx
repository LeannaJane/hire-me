import AuthLayout from "../Layouts/AuthLayout";

export default function Settings({routes, user}) {
     return (
        <AuthLayout routes={routes}>
            <h1>Your Settings</h1>
        </AuthLayout>
    );
}
