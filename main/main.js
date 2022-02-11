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
            }

        },
    }







);