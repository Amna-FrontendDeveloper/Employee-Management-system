import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTasks = () => {
    const [userData] = useContext(AuthContext)

    return (
        <div className="bg-[#1c1c1c] p-5  mt-5 rounded " >
            <div className="flex justify-between bg-emerald-500 text-2xl  mb-3 py-2 px-4 rounded">
                    <h2 className="w-1/5 text-black  rounded  ">Employee Name</h2>
                    <h3 className="w-1/5 text-black  rounded  ">New Task</h3>
                    <h5 className="w-1/5 text-black  rounded  ">Status</h5>
                    <h5 className="w-1/5 text-black  rounded   ">completed task</h5>
                    <h5 className="w-1/5 text-black  rounded   ">Failed Task</h5>
                </div>
           <div className=" ">
           {userData.map(function (elem ,idx) {

return <div key={idx} className="flex justify-between bg-emerald-800 mb-3 py-2 px-4 rounded">
    <h2 className="w-1/5 text-2xl ">{elem.name}</h2>
    <h3 className="w-1/5 text-2xl text-red-500">{elem.taskSummary.new}</h3>
    <h5 className="w-1/5 text-2xl text-purple-500">{elem.taskSummary.active}</h5>
    <h5 className="w-1/5 text-2xl text-green-500">{elem.taskSummary.completed}</h5>
    <h5 className="w-1/5 text-2xl text-red-700">{elem.taskSummary.failed}</h5>
</div>
})}

           </div>
        </div>
    )

}
export default AllTasks