import { useActionData, useRouteLoaderData } from 'react-router-dom';
import TaskForm from '../../../components/TaskForm/TaskForm';

export default function TaskCreate() {
  
  const statuses = useRouteLoaderData('statuses');

  const actionData = useActionData();

  console.log(actionData)

  return <div className='task-page'>
    <TaskForm statuses={statuses} method="post" errors={actionData?.errors} >Create Task:</TaskForm>
  </div>
}
