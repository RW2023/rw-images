
import { FC } from 'react';
import FeedbackForm from '@/components/FeedbackForm';

interface Props {}

const page: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex flex-col justify-text-center m-auto ">
      <FeedbackForm />
      <h2 className=" font-sans text-center text 2xl mt-1 flex flex-col">
        Submit Feedback Please!
      </h2>
      <p className='text-xl text-center flex flex-col'>Please submit and bugs, comments or suggestions 😊</p>
    </div>
  );
};

export default page;