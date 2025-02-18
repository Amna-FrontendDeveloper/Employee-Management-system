import PropTypes from 'prop-types';

const Complete = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[330px] bg-emerald-950 rounded-xl p-4   ">

    <div className="flex justify-between items-center">
      <h3 className="bg-yellow-500 text-sm text-black px-3 py-1 rounded">{data.taskCategory}</h3>
      <h4 className="text-sm">{data.taskDate}</h4>
    </div>

    <h2 className="mt-2 text-xl font-bold">{data.taskTitle}</h2>
    <p className="mt-3 text-sm">{data.taskDiscription}</p>
  <div className="mt-3">
    <button className="bg-[#FFC107] text-[#333333] w-full py-2 px-1 rounded mt-12">Completed</button>

  </div>
  </div>
  )
}

Complete.propTypes = {
  data: PropTypes.shape({
    taskCategory: PropTypes.string.isRequired,
    taskDate: PropTypes.string.isRequired,
    taskTitle: PropTypes.string.isRequired,
    taskDiscription: PropTypes.string.isRequired
  }).isRequired
};

export default Complete