import AuthForm from "../Components/auth_form";

export default function Register() {
    return (
        <AuthForm
        title="Sign Up"
        fields={[
            {id:"email", label: "Email Address", type: "email"},
            {id:"password", label:"Password", type:"password"},
        ]}

        buttonText="Sign Up"
        />

    );
}
