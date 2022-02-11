// avvio vue

const root = new Vue (

    {
        el:'#app',
        data: {
            newtodo:'',
            todos: ['correre', 'lavare', 'mangiare'],

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
                this.todos(index).done = !this.todos(index).done
            }

        }
    }







);