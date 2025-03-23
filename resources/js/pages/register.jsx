import { useState } from "react";
import AuthForm from "../Components/auth_form";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post('/register', {
            'email': email,
            'password': password,
            'name': name
        });

        if (response.data.success) {
            window.location.href = response.data.redirect;
        }
    };

    return (
        <AuthForm
            title="Sign Up"
            fields={[
                { id: "name", label: "Full Name", type: "text", value: name, onChange: (e) => setName(e.target.value) },
                { id: "email", label: "Email Address", type: "email", value: email, onChange: (e) => setEmail(e.target.value) },
                { id: "password", label: "Password", type: "password", value: password, onChange: (e) => setPassword(e.target.value) }
            ]}
            buttonText="Sign Up"
            onSubmit={handleSubmit}
        />
    );
}
