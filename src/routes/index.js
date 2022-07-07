
import App from "../components/App";
import FindSmileFace from "../components/FindSmileFace";
import SuspensionBall from '../components/SuspensionBall'

const rootRoutes = [
    {
        name: '',
        path: '/',
        component: App
    },
    {
        name: 'toDoList',
        path: '/toDoList',
        component: App
    },
    {
        name: 'findSmileFace',
        path: '/findSmileFace',
        component: FindSmileFace,
    },
    {
        name: 'suspensionBall',
        path: '/suspensionBall',
        component: SuspensionBall,
    }
]

export {
    rootRoutes
}