import TasksList from './components/task/List.vue';
import TaskEdit from './components/task/Edit.vue';
import TaskCreate from './components/task/Add.vue';

export const routes = [
    {
        name: 'tasksList',
        path: '/tasks',
        component: TasksList
    },
    {
        name: 'taskEdit',
        path: '/tasks/:id/edit',
        component: TaskEdit
    },
    {
        name: 'taskAdd',
        path: '/tasks/add',
        component: TaskCreate
    }
]