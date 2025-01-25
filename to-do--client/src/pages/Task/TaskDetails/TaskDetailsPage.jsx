import { useActionData, useRouteLoaderData } from 'react-router-dom';
import TaskForm from '../../../components/TaskForm/TaskForm';

function TaskDetailsPage() {

  const actionData = useActionData();

  console.log(actionData)

  const data = useRouteLoaderData('event-details');
  const task = data.task;
  const statuses = data.statuses;

  if (!task) { return "ERROR: YOU MUST PROVIDE A TASK"; }

  return <div className='task-page'>
    <TaskForm statuses={statuses} task={task} method="put" errors={actionData?.errors}>Task Details:</TaskForm>
  </div>
}

export default TaskDetailsPage;
