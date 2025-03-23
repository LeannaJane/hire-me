import { useState } from "react";
import AuthForm from "../Components/auth_form";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (!csrfToken) {
            console.error('CSRF token not found');
            return;
        }

        const requestData = { email, password };

        try {
            const response = await axios.post('/login', requestData, {
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                    'Content-Type': 'application/json',
                }
            });

            if (response.data.success) {
                window.location.href = response.data.redirect;
            }
        } catch (error) {
            if (error.response) {
                console.error('Error logging in:', error.response.data);
            } else {
                console.error('Request failed:', error.message);
            }
        }
    };

    return (
        <AuthForm
            title="Login"
            fields={[
                { id: "email", label: "Email Address", type: "email", value: email, onChange: (e) => setEmail(e.target.value) },
                { id: "password", label: "Password", type: "password", value: password, onChange: (e) => setPassword(e.target.value) }
            ]}
            buttonText="Login"
            onSubmit={handleSubmit}
        />
    );
}
