import BigCalendar from "../Components/Calendar/BigCalendar";
import AuthLayout from "../Layouts/AuthLayout";

export default function Calendar({routes, user}) {
    return (
        <AuthLayout routes={routes}>
            <h1>Your Calendar</h1>
            <BigCalendar></BigCalendar>
        </AuthLayout>
    );
}
