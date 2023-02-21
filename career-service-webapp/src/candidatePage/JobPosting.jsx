
import React from 'react'
import './css/Candidate.css';
import JobApplication from './JobApplication';

export default function JobPosting({
  jobNum,
  title,
  employer,
  date,
  description,
  deadline,
  status,
  hideJobPosting,
  jobApplicationBtnClicked,
  isApplicationBtnClicked,
}) {
  return (

    <div className='JobPostingComponent' >
      <button onClick={hideJobPosting}>Hide Job Posting </button>
      <p>Job Number: {jobNum}</p>
      <p>Title: {title}</p>
      <p>Employer: {employer}</p>
      <p>Date: {date}</p>
      <p>Description: {description}</p>
      <p>Deadline: {deadline}</p>
      <p>Status: {status}</p>
      <button style={{ backgroundColor: isApplicationBtnClicked ? "lightgray" : "green" }} onClick={jobApplicationBtnClicked}>{isApplicationBtnClicked ? "Hide Job Application": "Job Application"}</button>
      {isApplicationBtnClicked ? <JobApplication status /> : null}
    </div>
  );
}
