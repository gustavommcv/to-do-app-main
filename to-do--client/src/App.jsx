import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/shared/Layout";
import HomePage from "./pages/HomePage/HomePage";
import TaskDetails from "./pages/Task/TaskDetails/TaskDetailsPage";
import TaskCreate from "./pages/Task/TaskCreate/TaskCreatePage";
import tasksLoader from "./util/loaders/tasksLoader";
import detailsLoader from "./util/loaders/detailsLoader";
import statusesLoader from "./util/loaders/statusesLoader";
import newTaskAction from "./util/actions/newTaskAction";
import editTaskAction from './util/actions/editTaskAction';
import deleteTaskAction from "./util/actions/deleteTaskAction";
import ErrorPage from "./pages/shared/ErrorPage";
import patchTaskAction from "./util/actions/patchTaskAction";
import ThemeContextProvider from "./context/themeContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: tasksLoader,
        element: <HomePage />,
      },
      {
        path: ':taskId',
        id: 'event-details',
        loader: detailsLoader,
        action: editTaskAction,
        children: [
          {
            path: '',
            element: <TaskDetails />,
          },
          {
            path: "delete",
            action: deleteTaskAction
          },
          {
            path: "patch",
            action: patchTaskAction
          }
        ]
      },
      {
        path: "create",
        id: 'statuses',
        loader: statusesLoader,
        element: <TaskCreate />,
        action: newTaskAction
      },
    ],
  },
]);

function App() {
  
  return <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>;
}

export default App;
