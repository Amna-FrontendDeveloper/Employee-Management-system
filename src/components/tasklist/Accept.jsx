import { useState } from 'react';
import PropTypes from 'prop-types';

const Accept = ({data}) => {
  const [text, setText] = useState('Mark as failed');

  const handleClick = () => {
    setText('Failed');
  };
  const [Ctext, setCText] = useState('Mark as completed');

  const handlecClick = () => {
    setCText('completed');
  };
  return (
    <div className="flex-shrink-0 h-full w-[330px] bg-[#2E4053] rounded-xl p-4 ">
      <div className="flex justify-between items-center">
        <h3 className="bg-[#F5F5DC] text-sm text-[#333333] px-3 py-1 rounded">{data.taskCategory}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-2 text-xl font-bold">{data.taskTitle}</h2>
      <p className="mt-3 text-sm">{data.taskDiscription}</p>
      <div className="flex justify-between p-4 gap-3">
      <button 
          className="bg-[#34C759] px-3 py-2 rounded mt-12 text-sm" 
          onClick={handlecClick}
        >
          {Ctext}
        </button>
        <button 
          className="bg-red-500 px-3 py-2 rounded mt-12 text-sm" 
          onClick={handleClick}
        >
          {text}
        </button>
      </div>
    </div>
  )
}

Accept.propTypes = {
  data: PropTypes.shape({
    taskCategory: PropTypes.string.isRequired,
    taskDate: PropTypes.string.isRequired,
    taskTitle: PropTypes.string.isRequired,
    taskDiscription: PropTypes.string.isRequired
  }).isRequired
};

export default Accept

