

const NewTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[330px] bg-red-500 rounded-xl p-4   ">

    <div className="flex justify-between items-center">
      <h3 className="bg-red-600 text-sm text-white px-3 py-1 rounded">High</h3>
      <h4 className="text-sm">{data.taskDate}</h4>
    </div>

    <h2 className="mt-2 text-xl font-bold">{data.taskTitle}</h2>
    <p className="mt-3 text-sm">{data.taskDescription}</p>
  <div className="flex justify-between p-4 gap-3">
    <button className="bg-green-600 px-3 py-2 rounded text-sm">Accept Task</button>

  </div>
  </div>

  )
}

export default NewTask