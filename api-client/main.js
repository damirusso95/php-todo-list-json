const { createApp } = Vue

createApp({
    data() {
        return {
            list: [],
            newTask: ""
        }
    },
    methods: {
        addTask() {
            console.log("aggiungi task", this.newTask);

            const newActivity = {
                task: this.newTask
            };

            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                },
            };

            axios.post("../add.php", newActivity, config).then(results => {
                console.log("risultati:", results.data);
                this.list = results.data;


            });
        }
    },
    mounted() {
        console.log('recupero dati dal server');
        axios.get("../list.php").then(results => {
            console.log("risultati:", results.data);
            this.list = results.data;
        });
    }
}).mount('#app')
