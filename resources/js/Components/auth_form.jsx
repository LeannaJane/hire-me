export default function AuthForm({
    title,
    fields,
    buttonText,
    onSubmit,
}) {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>{title}</h1>
            <div style={{ width: "300px" }}>
                <form onSubmit={onSubmit}>
                    {fields.map((field, index) => (
                        <div className="mb-4" key={index}>
                            <label htmlFor={field.id} className="form-label">{field.label}</label>
                            <input
                                type={field.type}
                                className="form-control w-100 px-3 py-2"
                                id={field.id}
                                value={field.value} // Dynamic value binding
                                onChange={field.onChange} // Dynamic onChange handler
                                autoComplete={field.autocomplete || 'off'} // Optional autoComplete
                            />
                        </div>
                    ))}
                    <button type="submit" className="btn btn-light w-100 px-3 py-2 mt-4">{buttonText}</button>
                </form>
            </div>

            <p className="text-center mt-4">
                {title === "Login" ? "Don't have an account?" : "Already have an account?"}
                <a href={title === "Login" ? "/register" : "/login"} className="ms-1">
                    {title === "Login" ? "Sign up" : "Login"}
                </a>
            </p>
        </div>
    );
}
