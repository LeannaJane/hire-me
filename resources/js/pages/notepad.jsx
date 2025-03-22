import AuthLayout from "../Layouts/AuthLayout";

export default function Notepad({routes, user}) {
    return (
        <AuthLayout routes={routes}>
            <h1>Your Notepad</h1>
        </AuthLayout>
    );
}
