export default function AuthForm({title, fields, buttonText}){
    return(
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>{title}</h1>
            <div style={{ width: "300px" }}>
                    {fields.map((field, index) => (
                        <div className="mb-4" key={index}>
                            <label
                            htmlFor={field.id} className="form-label">{field.label}</label>
                            <input
                                type={field.type}
                                className="form-control w-100 px-3 py-2"
                                id={field.id} />
                        </div>
                    ))}

                <button className="btn btn-light w-100 px-3 py-2 mt-4">{buttonText}</button>
            </div>


            <p className="text-center mt-4">
                {title === "Login" ? "Don't have an account?" : "Already have an account?"}
                <a href={title === "Login" ? "/register" : "/login"} className="ms-1">
                    {title === "Login" ? "Sign up" : "Login"}
                </a>
            </p>


        </div>
    )
}
