export default function ProfileSection({ setIsOpen }) {
    // The bottom of the sidebar, with a settings, and profile.

    return (
        <div className="position-absolute bottom-0 start-0 end-0 p-3 border-top border-white">
            <div className="d-flex align-items-center justify-content-between">
                {/* Profile Image Placeholder */}
                <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center"
                        style={{ width: "40px", height: "40px" }}>
                        <i className="bi bi-person text-white"></i>
                    </div>

                    {/* User & Settings */}
                    <div className="ms-2">
                        <a href="/settings" className="text-white text-decoration-none">
                            Settings
                        </a>
                    </div>
                </div>

                {/* Collapsing Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="btn btn-sm btn-outline-light"
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "white",
                        border: "1px solid white",
                    }}
                >
                    X {/* Close Sidebar */}
                </button>
            </div>
        </div>
    );
}
