// avvio vue

const root = new Vue (

    {
        el:'#app',
        data: {
            newtodo:'',
            todos: [
                {
                    testo:'correre',
                    line:true
                },
                {
                    testo: 'mangiare',
                    line:false
                },
            ],
        },
        methods: {
            addTodo() {
                this.todos.push(this.newtodo);
                this.newtodo = '';
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
            check(index) {
                this.todos[index].line = !this.todos[index].line
            }

        }
    }







);