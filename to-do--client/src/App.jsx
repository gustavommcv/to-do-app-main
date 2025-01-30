import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/shared/Layout";
import TaskCreate from "./pages/Task/TaskCreate/TaskCreatePage";
import tasksLoader from "./util/loaders/tasksLoader";
import detailsLoader from "./util/loaders/detailsLoader";
import statusesLoader from "./util/loaders/statusesLoader";
import newTaskAction from "./util/actions/newTaskAction";
import editTaskAction from './util/actions/editTaskAction';
import deleteTaskAction from "./util/actions/deleteTaskAction";
import patchTaskAction from "./util/actions/patchTaskAction";
import ThemeContextProvider from "./context/themeContextProvider";
import TaskDetailsPage from "./pages/Task/TaskDetails/TaskDetailsPage";
import ErrorPage from "./pages/shared/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import TasksHomePage from "./pages/Task/TasksHomePage/TasksHomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import loginAction from "./util/actions/loginAction";
import signupAction from "./util/actions/signupAction";
import { checkAuthLoader, tokenLoader } from "./util/loaders/authLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'tasks',
        loader: checkAuthLoader,
        children: [
          {
            index: true,
            element: <TasksHomePage />,
            loader: tasksLoader,
          },
          {
            path: ':taskId',
            id: 'event-details',
            loader: detailsLoader,
            action: editTaskAction,
            element: <TaskDetailsPage />,
            children: [
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
        ]
      },
      {
        path: 'login',
        element: <AuthPage mode="login" />,
        action: loginAction
      },
      {
        path: 'signup',
        element: <AuthPage mode="signup" />,
        action: signupAction
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
