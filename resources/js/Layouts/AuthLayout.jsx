import SidebarControl from "../Components/SidebarControl";

export default function AuthLayout({ routes, children }) {
    return (
        <div className="d-flex vh-100 overflow-hidden">
            {/* Sidebar Component */}
            <SidebarControl routes={routes} />

            {/* Main Content */}
            <div className="flex-grow-1 p-4 overflow-auto">
                {children}
            </div>
        </div>
    );
}
