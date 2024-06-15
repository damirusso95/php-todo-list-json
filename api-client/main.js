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
        }
    },
    mounted() {
        console.log('recupero dati dal server');
        axios.get("../Api.php").then(results => {
            console.log("risultati:", results);
            this.list = results.data;
        });
    }
}).mount('#app')
