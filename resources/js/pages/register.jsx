import { useState } from 'react';
import AuthForm from "../Components/auth_form";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {


        e.preventDefault();

        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (!csrfToken) {
            console.error('CSRF token not found');
            return;
        }

        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify({ email, password, name }),
        });

        if (response.ok) {
            console.log('User registered successfully');
        } else {
            const errorData = await response.json();
            console.error('Error registering user:', errorData.errors);
        }
    };

    return (
        <AuthForm
            title="Sign Up"
            fields={[
                { id: "name", label: "Full Name", type: "text" }, // Add the name field
                { id: "email", label: "Email Address", type: "email" },
                { id: "password", label: "Password", type: "password", autocomplete: "current-password" },
            ]}
            buttonText="Sign Up"
            onSubmit={handleSubmit}
            email={email}
            password={password}
            name={name}
            setEmail={setEmail}
            setPassword={setPassword}
            setName={setName}
        />
    );
}
