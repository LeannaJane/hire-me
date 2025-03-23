import { useEffect, useState } from 'react';
import ApplicationModal from './ApplicationModal';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import moment from 'moment';

export default function ApplicationTable({ applications }) {
    const [applicationList, setApplicationList] = useState([]);
    const [editingApplication, setEditingApplication] = useState(null);

    useEffect(() => {
        if (applications != null && applications.length > 0) {
            console.log(applications);
            setApplicationList(applications);
        }
    }, [applications]);

    const handleNewJobSubmit = (newApplication) => {
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

    const editApplication = (id) => {
        axios.get(`/job-application/${id}`)
            .then(response => {
                const applicationData = response.data.application;
                setEditingApplication(applicationData);
                const modal = new bootstrap.Modal(document.getElementById("applicationTableModal"));
                modal.show();
            })
            .catch(error => {
                console.error("There was an error fetching the application data:", error);
            });
    };

    const dateFormat = (date, timeFormat = false) => {
        if (date === undefined || date === null || date == '') {
            return '';
        }

        if (timeFormat) {
            return moment(date).format("DD/MM/YYYY HH:mm");
        }

        return moment(date).format("DD/MM/YYYY");
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
                            <td>{dateFormat(application.application_date)}</td>
                            <td>{application.stage_name}</td>
                            <td>{dateFormat(application.interview_date, true)}</td>
                            <td>
                                <button className="btn btn-secondary my-2 me-2">View Job</button>
                                <button className="btn btn-primary my-2 me-2"  onClick={() => editApplication(application.id)}>Edit</button>
                                <button className="btn btn-danger my-2 me-2" onClick={() => deleteApplication(application.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ApplicationModal
                handleSubmit={handleNewJobSubmit}
                applicationData={editingApplication}
            />
        </>
    );
}
