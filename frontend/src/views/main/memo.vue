<template>
	<div class="memo">
		<h1 class="memo__title">Memo</h1>

	</div>
</template>
<script>
	export default {
    name: 'app',
    methods: {
      addTodo(e) {
        e.preventDefault();
        const todo = {
          text: document.querySelector('input.input-todo').value,
          completed: false
        };
        this.todos.push(todo);
      },
      compeleteTodo(index) {
        this.todos[index].completed = !this.todos[index].completed;
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      }
    },
    data() {
      return {
        todos: [
          {
            text: 'test-todo1',
            completed: false
          },
          {
            text: 'test-todo2',
            completed: true
          },
          {
            text: 'test-todo3',
            completed: false
          }
        ]
      }
    }
  }
</script>
<style scoped>
.memo {
  width: 100%;
  height: 100%;
  background-color: #f1f3f5;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.memo__title {
  font-size: 40px;
  font-style: normal;
  font-family: ProductSansM;
  color: #000000;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 0;
  margin-bottom: 0;
  padding: 0;
}
.memo_text{
	width: 250px;
	height: 30px;
	resize: none;
	border: 1px solid #6C63FF;
	margin: 10px auto;
    border-radius: 10px;
}
.save_button{
	width: 130px;
	height: 30px;
	border: 1px solid #6C63FF;
	background-color: #6C63FF;
	color: #f8f9fa;
}
</style>