import PropTypes from 'prop-types';
localStorage.clear()
const Task_List_Numbers = ({data}) => {

  return (
    <div className="flex screen mt-12 gap-5 justify-between">
        <div className="rounded-xl w-[40%] py-6 px-9 bg-red-400" >
            <h2 className="text-3xl font-semibold">{data.taskSummary.new}</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400" >
            <h2 className="text-3xl font-semibold">{data.taskSummary.completed}</h2>
            <h3 className="text-xl font-medium">Completed Task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400" >
            <h2 className="text-3xl font-semibold">{data.taskSummary.active}</h2>
            <h3 className="text-xl font-medium">Accepted Task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-pink-400" >
            <h2 className="text-3xl font-semibold">{data.taskSummary.failed}</h2>
            <h3 className="text-xl font-medium">Failed Task</h3>
        </div>
    </div>
  )
}

Task_List_Numbers.propTypes = {
    data: PropTypes.shape({
        taskSummary: PropTypes.shape({
            new: PropTypes.number.isRequired,
            completed: PropTypes.number.isRequired,
            active: PropTypes.number.isRequired,
            failed: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
};

export default Task_List_Numbers