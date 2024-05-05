import React from 'react'

export default function Feedback(props) {
  const { mode } = props;
  const { from_name, lname, message } = props.details;
  return (
    props.isSubmit &&
    <>
      <div className={`card text-center mt-4 bg-${mode} mb-2`}>
        <div className="card-header bg-warning ">
          Thanks For Your Feedback <b>{from_name + " " + lname}</b>
        </div>
        <div className="card-body">
          <p className={`card-text text-${mode === 'dark' ? 'light' : 'dark'}`}>{message}.<br/><i>In Future</i> We will Consider Your Feedback.</p>
        </div>
      </div>
    </>
  )
}
