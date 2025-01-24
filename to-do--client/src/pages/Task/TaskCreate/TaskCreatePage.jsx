import { useRouteLoaderData } from 'react-router-dom';
import TaskForm from '../../../components/TaskForm/TaskForm';

export default function TaskCreate() {
  
  const statuses = useRouteLoaderData('statuses');

  return <div className='task-page'>
    <TaskForm statuses={statuses} method="post" >Create Task:</TaskForm>
  </div>
}
