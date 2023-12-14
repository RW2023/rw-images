'use client';

import { FC } from 'react';
import SubHeading from '@/components/ui/SubHeading';

interface Props {}

const FeedbackForm: FC<Props> = (props): JSX.Element => {
  return (
    <div>
      <SubHeading title="Feedback Form" />
      <form className="form-control sm:w-5/6 w-full max-w-xs flex flex-col justify-center m-auto">
        <label className="label" htmlFor="name">
          <span className="label-text">
            <i className="fas fa-user mr-2"></i>Name
          </span>
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          className="input input-bordered w-full max-w-xs"
        />

        <label className="label" htmlFor="email">
          <span className="label-text">
            <i className="fas fa-envelope mr-2"></i>Email
          </span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="email@domain.com"
          className="input input-bordered w-full max-w-xs"
        />

        <label className="label" htmlFor="feedback">
          <span className="label-text">
            <i className="fas fa-comments mr-2"></i>Feedback
          </span>
        </label>
        <textarea
          id="feedback"
          placeholder="Your feedback"
          className="textarea textarea-bordered h-24"
        ></textarea>

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
