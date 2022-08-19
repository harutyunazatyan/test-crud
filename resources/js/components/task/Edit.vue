<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Task</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" v-model="task.title">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="task.text">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Edit",
    data() {
        return {
            task: {
                title: '',
                text: '',
                _method: 'patch'
            }
        }
    },
    mounted() {
        this.showTask();
    },
    methods: {
        async showTask() {
            await this.axios.get(`/api/tasks/${this.$route.params.id}`).then(response => {
                const { title, text } = response.data;
                this.task.title = title;
                this.task.text = text;
            }).catch(error => {
                console.log(error);
            })
        },
        async update() {
            await this.axios.post(`/api/tasks/${this.$route.params.id}`, this.task).then(response => {
                this.$router.push({path: '/tasks'});
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
</script>