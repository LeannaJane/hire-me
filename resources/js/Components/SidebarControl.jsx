import { useState } from "react";
import MenuItem from "./MenuItem";
import ProfileSection from "./ProfileSection";

export default function SidebarControl({ routes }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div
                className="position-relative"
                style={{
                    width: isOpen ? "250px" : "0px",
                    backgroundColor: "#121212",
                    transition: "width 0.3s ease-in-out",
                    overflow: "hidden",
                    height: "100vh",
                    zIndex: 10,
                }}
            >
                {/* Sidebar Content */}
                <div
                    className="text-white p-4"
                    style={{
                        borderRight: "1px solid white",
                        height: "100%",
                        opacity: isOpen ? 1 : 0,
                        transition: "opacity 0.3s ease-in-out",
                    }}
                >
                    {isOpen && <h2 className="fs-4 fw-bold">Hire Me</h2>}
                    <ul className="nav flex-column mt-4">
                        {routes.map((route, index) => (
                            <MenuItem key={index} url={route.url} isActive={route.isActive}>
                                {isOpen ? route.label : <i className="bi bi-circle"></i>} {/* Show icon when collapsed */}
                            </MenuItem>
                        ))}
                    </ul>
                </div>

                {/* Profile Section */}
                {isOpen && <ProfileSection setIsOpen={setIsOpen} />}
            </div>

            {/* Button to open the sidebar when collapsed */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="btn btn-sm btn-outline-light position-fixed"
                    style={{
                        bottom: "20px",
                        left: "20px",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        zIndex: 1000,
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "white",
                        border: "1px solid white",
                    }}
                >
                    {">"} {/* Open sidebar button */}
                </button>
            )}
        </div>
    );
}
