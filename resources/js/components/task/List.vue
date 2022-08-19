<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name: "taskAdd"}' class="btn btn-primary" title="Create"><i class="fa-solid fa-plus"></i></router-link>
            <button type="button" @click="deleteCompleted()" class="btn btn-danger">Delete all completed</button>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Tasks list</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="col-sm-1">ID</th>
                                    <th class="col-sm-2">Title</th>
                                    <th>Description</th>
                                    <th class="col-sm-1">Completed</th>
                                    <th class="col-sm-1">Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="tasks">
                                <tr v-for="(task, key) in tasks" :key="key" :class="{ completed: task.completed == 1 }">
                                    <td>{{ task.id }}</td>
                                    <td>{{ task.title }}</td>
                                    <td>{{ task.text }}</td>
                                    <td>
                                        <input type="checkbox" :checked="task.completed == 1" @click="makeCompleted(task)">
                                    </td>
                                    <td class="d-flex justify-content-between gap-2">
                                        <router-link :to='{name: "taskEdit", params: {id: task.id}}' class="btn btn-success" title="Edit">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </router-link>
                                        <button type="button" @click="deleteTask(task.id)" class="btn btn-danger" title="Delete">
                                            <i class="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            tasks: []
        }
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        async getTasks() {
            await this.axios.get('/api/tasks').then(response => {
                this.tasks = response.data;
            }).catch(error => {
                console.log(error);
                this.tasks = [];
            })
        },
        deleteTask(id) {
            if(confirm('Are you sure to delete this task?')) {
                this.axios.delete(`/api/tasks/${id}`).then(response => {
                    this.getTasks();
                }).catch(error => {
                    console.log(error);
                })
            }
        },
        deleteCompleted() {
            if(confirm('Are you sure to delete all completed tasks?')) {
                this.axios.delete(`/api/tasks/`).then(response => {
                    this.getTasks();
                }).catch(error => {
                    console.log(error);
                })
            }
        },
        async makeCompleted(currentTask) {
            currentTask.completed = !currentTask.completed;
            try {
                const data = await this.axios.put(`/api/tasks/${currentTask.id}`, currentTask);
            }
            catch (err) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
    .completed {
        background-color: #E8FFDE;
    }
</style>