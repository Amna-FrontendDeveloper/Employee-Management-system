import PropTypes from 'prop-types';

const Failed = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[350px] bg-green-500 rounded-xl p-5  ">

    <div className="flex justify-between items-center">
      <h3 className="bg-red-600 text-sm text-white px-3 py-1 rounded">High</h3>
      <h4 className="text-sm">{data.taskDate}</h4>
    </div>

    <h2 className="mt-2 text-xl font-bold">{data.taskTitle}</h2>
    <p className="mt-3 text-sm">{data.taskDiscription}</p>
  <div className="mt-3">
    <button className="bg-yellow-600 mt-10 w-full py-2 px-1 rounded">Failed</button>

  </div>
  </div>
  )
}

Failed.propTypes = {
  data: PropTypes.shape({
    taskDate: PropTypes.string.isRequired,
    taskTitle: PropTypes.string.isRequired,
    taskDiscription: PropTypes.string.isRequired
  }).isRequired
};

export default Failed