import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            {id: 1, text: 'dddd', done: true},
            {id: 2, text: 'aaaa', done: false}
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {	//Getter 也可以接受其他 getter 作为第二个参数
            return getters.doneTodos.length
        },
        getTodoById: (state) => (id) => {		//Getter 返回一个函数，来实现给 getter 传参
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations: {			//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。mutation 必须是同步函数
        increment(state, n) {
            state.count += n
        }
    },
    actions: {			//提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。
        incrementAsync(context, n) {
            context.commit('increment', n)
        }
    }
})
export default store
