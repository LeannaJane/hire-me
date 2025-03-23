import { useEffect, useState } from 'react';
import ApplicationModal from './ApplicationModal';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

export default function ApplicationTable({ applications }) {
    const [applicationList, setApplicationList] = useState([]);

    useEffect(() => {
        if(applications != null && applications.length > 0) {
            setApplicationList(applications);
        }
    }, []);

    const handleNewJobSubmit = (newApplication) => {
        console.log([...applicationList, newApplication])
        setApplicationList((prevList) => [...prevList, newApplication]);
        bootstrap.Modal.getInstance(document.getElementById("applicationTableModal")).hide();
    };

    const deleteApplication = async (id) => {
        const response = await axios.delete(`/job-application/${id}`);

        if (response.data.success) {
            let remainingApplications = applicationList.filter((application) => {
                return application.id != id;
            });

            setApplicationList(remainingApplications);
        }
    };

    useEffect(() => {
        console.log("Updated Application List:", applicationList);
    }, [applicationList]);

    return (
        <>
            <button className="btn btn-primary mb-3" type="button" data-bs-toggle="modal" data-bs-target="#applicationTableModal">New Application</button>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th>Stage</th>
                        <th>Inverview Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applicationList.map((application, index) => (
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{application.job_title}</td>
                            <td>{application.company_name}</td>
                            <td>{application.salary}</td>
                            <td>{application.application_date}</td>
                            <td>{application.stage}</td>
                            <td>{application.interview_datetime}</td>
                            <td>
                                <button className="btn btn-secondary mb-2 me-2 mt-2">View Job</button>
                                <button className="btn btn-primary mb-2 me-2 mt-2">Edit</button>
                                <button className="btn btn-danger mb-2 me-2 mt-2" onClick={() => deleteApplication(application.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ApplicationModal
                handleSubmit={handleNewJobSubmit}
            />
        </>
    );
}
