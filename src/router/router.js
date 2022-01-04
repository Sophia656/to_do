import Login from "../components/Login";
import TaskPage from "../TaskPage";
import TrashPage from "../TrashPage";

export const privateRoutes = [
    {path: '/', element: <TaskPage />, exact: true},
    {path: '/trash', element: <TrashPage />, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: <Login />, exact: true},
]