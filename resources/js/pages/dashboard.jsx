import AuthLayout from "../Layouts/AuthLayout";

export default function Dashboard({routes, user}) {
    return (
        <AuthLayout routes={routes}>
                <h1 className="text-2xl font-bold">Welcome {user.name}</h1>
                <p>Welcome to your job tracking dashboard.</p>
        </AuthLayout>
    );
}
