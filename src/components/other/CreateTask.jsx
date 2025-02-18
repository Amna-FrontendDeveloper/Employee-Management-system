import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"


const CreateTask = () => {
  const [userData,setuserData] = useContext(AuthContext)
  const [taskTitle, settaskTitle] = useState('')
  const [taskDiscription, settaskDiscription] = useState('')
  const [taskCategory, settaskCategory] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')


const [newtask, setNewtask] = useState({})


  const submitHandler = (e)=>{
    e.preventDefault()


    setNewtask({taskTitle,
      taskDiscription,
      taskDate,
      taskCategory,
      assignTo,
      newTask:true,
      active:true,
      completed:false,
      failed:false})

const data = userData
// console.log(data);

data.forEach(function(elem){
  if(assignTo == elem.name ){
    elem.tasks.push(newtask)
    console.log(elem);
    elem.taskSummary.active =  elem.taskSummary.active + 1
  }
 
})
localStorage.setItem('Employees',JSON.stringify(data))
setuserData(data)
console.log(data)

settaskTitle('')
settaskDiscription('')
setassignTo('')
settaskCategory('')
  settaskDate('')


  }
  return (
<div className="p-5 bg-[#1c1c1c] rounded mt-5">


<form onSubmit={(e)=>{
  submitHandler(e)

}} className="flex flex-wrap items-start justify-between">
  <div className="w-1/2">
    <div> <h3 className="mb-0.5  text-gray-100 text-sm" >Task Title</h3>
      <input
      value={taskTitle}
      onChange={(e)=>{
        settaskTitle(e.target.value)
      }}
      
      className="py-1 outline-none rounded-b-xl mb-2 mt-1 w-3/4 px-3 bg-transparent border-[1px] border-gray-400" type="text" placeholder="Make a UI Design" /></div>
    <div>
      <h3  className="mb-0.5 text-gray-100 text-sm" > Date</h3>
      <input 
        value={taskDate}
        onChange={(e)=>{
          settaskDate(e.target.value)
        }}
      className="py-1 outline-none rounded-b-xl w-3/4 px-3 bg-transparent border-[1px] border-gray-400 mt-1 mb-2"  type="date" name="" id="" />
    </div>
    <div>
      <h3  className="mb-0.5 text-gray-100 text-sm" >Assign to</h3>
      <input 
        value={assignTo}
        onChange={(e)=>{
          setassignTo(e.target.value)
        }}
      className="py-1 outline-none rounded-b-xl w-3/4 px-3 bg-transparent border-[1px] border-gray-400 mt-1 mb-2" type="text" placeholder="employe Name" />
    </div>
    <div>
      <h3  className="mb-0.5 text-gray-100 text-sm" >Category</h3>
      <input 
        value={taskCategory}
        onChange={(e)=>{
          settaskCategory(e.target.value)
        }}
      className="py-1 outline-none rounded-b-xl w-3/4 px-3 bg-transparent border-[1px] border-gray-400 mt-1 mb-2" type="text" placeholder="designe,de etc" />
    </div>
  </div>
   <div className="w-2/5 flex flex-col items-start">
     <h3 className="text-sm text-gray-100 mb-0.5">Discription</h3>
    <textarea
      value={taskDiscription}
      onChange={(e)=>{
        settaskDiscription(e.target.value)
      }}
    className="w-full h-44 text-sm py-2 px-4 rounded outline-none rounded-b-xl border-[1px] border-gray-400  bg-transparent  " name="" id="" cols="30" rows="10"></textarea>
    <button className="bg-emerald-500 hover:bg-emerald-800 py-3 px-6 mt-3 rounded-3xl">Create Task</button>
  </div>
     
</form>

</div>
  )
}

export default CreateTask