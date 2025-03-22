export default function MenuItem({ url, isActive, children }) {
    return (
        <li className="nav-item">
            <a href={url} className={`nav-link text-white ${isActive ? "active bg-primary" : ""}`}>
                {children}
            </a>
        </li>
    );
}
