import Accept from "./Accept"
import Complete from "./Complete"
import Failed from "./Failed"
import NewTask from "./NewTask"
import PropTypes from 'prop-types';


const TaskList = ({ data }) => {
  
    return (
        <div id="tasklist" className="h-[50%] overflow-x-scroll flex items-center justify-start  mt-8 py-4 gap-5">

        {data.tasks.map((elem , idx)=>{
           
          if(elem.active){
            return <Accept key={idx} data={elem} />
          }
          if(elem.new){
            return <NewTask key={idx} data={elem} />
          }
          if(elem.Failed){
            return <Failed key={idx} data={elem}/>
          }
          if(elem.completed){
            return <Complete key={idx} data={elem} />
          }
        })}
           
        </div>
    )
}

TaskList.propTypes = {
  data: PropTypes.shape({
    tasks: PropTypes.array.isRequired
  }).isRequired
};

export default TaskList