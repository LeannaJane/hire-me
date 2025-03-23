import moment from 'moment';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function ApplicationModal({ handleSubmit }) {

    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [salary, setSalary] = useState('');
    const [stage, setStage] = useState('');
    const [jobUrl, setJobUrl] = useState('');
    const [applicationDate, setApplicationDate] = useState(new Date());
    const [interviewDate, setInterviewDate] = useState(new Date());

    const [errors, setErrors] = useState({});

    const handleCreateApplication = async (e) => {
        e.preventDefault();
        setErrors({});

        const newJob = {
            "job_title": jobTitle,
            "company_name": company,
            "salary": salary,
            "stage": stage,
            "job_link": jobUrl,
            "application_date": dateFormat(applicationDate),
            "interview_date": dateFormat(interviewDate)
        }

        const response = await axios.post("/job-application", newJob);

        if(response.data.success) {
            handleSubmit(response.data.application);
        } else {
            setErrors(response.data.errors);
        }
    }

    const dateFormat = (date) => {
        return moment(date).format("YYYY-MM-DD HH:mm:ss")
    }
    // Application popup model.
    return (
        <div id="applicationTableModal" className="modal modal-lg fade" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <label htmlFor="companyName" className="form-label">Company</label>
                                <input type="text" className="form-control" id="companyName" value={company.value} onChange={(e) => setCompany(e.target.value)}/>
                            </div>
                            <div className="col-md-6 mb-2">
                                <label htmlFor="jobTitle" className="form-label">Job Title</label>
                                <input type="text" className="form-control" id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}/>
                            </div>
                            <div className="col-md-6 mb-2">
                                <label htmlFor="salary" className="form-label">Salary</label>
                                <input type="text" className="form-control" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label htmlFor="applicationDate" className="form-label">Application Date</label>
                                <DatePicker className="form-control" id="applicationDate" selected={applicationDate} onChange={(date) => setApplicationDate(date)} />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label htmlFor="applicationStage" className="form-label">Stage</label>
                                <select className="form-select" id="applicationStage" value={stage} onChange={(e) => setStage(e.target.value)}>
                                    <option value="" disabled>Select Stage</option>
                                    <option value="1">Applied</option>
                                    <option value="2">Interview Stage 1</option>
                                    <option value="3">Interview Stage 2</option>
                                    <option value="4">Assessment</option>
                                    <option value="5">Offer</option>
                                    <option value="6">Accepted</option>
                                    <option value="7">No Response</option>
                                    <option value="8">Rejected</option>
                                    <option value="9">Rejected by applicant</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-2">
                                <label htmlFor="interviewDate" className="form-label">Interview Date</label>
                                <DatePicker className="form-control" id="interviewDate" selected={interviewDate} onChange={(date) => setInterviewDate(date)} />
                            </div>
                            <div className="col-md-12 mb-2">
                                <label htmlFor="jobUrl" className="form-label">Link to Job Application</label>
                                <input className="form-control" type="text" value={jobUrl} id="jobUrl" onChange={(e) => setJobUrl(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={(e) => handleCreateApplication(e)}>Create Application</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
