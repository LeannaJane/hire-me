export default function Welcome() {

    return (
        <div className="container py-4">
            <div className="d-flex flex-column align-items-center">
                <h1 className="">Hire Me</h1>
                <p className="">A tool to help you stay organised, motivated, and in control of your job applications</p>
                <img src="https://placehold.co/600x400" alt="Hire Me" />
                <a href="/register" className="btn btn-light mt-4 px-5 fw-bold">Get Started</a>
                <p className="mt-3">Already have an account?</p>
                <a href="/login" className="text-white">Login</a>
            </div>
        </div>
    )
}
