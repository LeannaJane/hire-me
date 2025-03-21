import AuthForm from "../Components/auth_form";

export default function Login() {
    return (
        <AuthForm
        title= "Login"
        fields={[
            {id:"email", label: "Email Address", type: "email"},
            {id:"password", label:"Password", type:"password"},
        ]}

        buttonText="Login"
        />
    );
}
