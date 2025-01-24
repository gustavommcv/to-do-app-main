import { useRouteLoaderData } from 'react-router-dom';
import TaskForm from '../../../components/TaskForm/TaskForm';

function TaskDetails() {

  const data = useRouteLoaderData('event-details');
  const task = data.task;
  const statuses = data.statuses;

  if (!task) { return "ERROR: YOU MUST PROVIDE A TASK"; }

  return <div className='task-page'>
    <TaskForm statuses={statuses} task={task} method="put">Task Details:</TaskForm>
  </div>
}

export default TaskDetails;
