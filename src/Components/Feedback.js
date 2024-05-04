import React from 'react'

export default function Feedback(props) {
  const { mode } = props;
  const { fname, lname, feedback } = props.details;
  return (
    props.isSubmit &&
    <>
      <div className={`card text-center mt-4 bg-${mode} mb-2`}>
        <div className="card-header bg-warning ">
          Thanks For Your Feedback <b>{fname + " " + lname}</b>
        </div>
        <div className="card-body">
          <p className={`card-text text-${mode === 'dark' ? 'light' : 'dark'}`}>{feedback}.<br/><i>In Future</i> We will Consider Your Feedback.</p>
        </div>
      </div>
    </>
  )
}
