// avvio vue

const root = new Vue (

    {
        el:'#app',
        data: {
            newtodo:'',
            todos: [

                {
                    testo:'correre',
                    line:false,

                },
                {
                    testo:'mangiare',
                    line:false,
                   

                },
                {
                    testo:'lavorare',
                    line:false,

                },
                {
                    testo:'dormire',
                    line:false,

                },
            ],
        
        },
        methods: {
            addTodo() {
                this.todos.push({
                    testo:this.newtodo,
                    line:false,
                });
                this.newtodo = '';
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            
            },
            check(index) {
                this.todos[index].line = !this.todos[index].line
    
            },

        },
    }

);