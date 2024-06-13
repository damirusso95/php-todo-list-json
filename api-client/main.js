const { createApp } = Vue

createApp({
    data() {
        return {
            list: []
        }
    },

    methods: {

    },
    mounted() {
        console.log('recupero dati dal server');

        axios.get("../Api.php").then(results => {
            console.log("risultati:" , results);
            this.list = results.data;

        });
    }
}).mount('#app')