var myTodo = angular.module('myTodo', []);
  angular.module('myTodo') 
  .controller( 'TodoCtrl', function(){
      
      var todoList = this;
      
      todoList.initializeNewTodo = function(){
        todoList.newTodo = {};
      }
      
      todoList.addTodo = function() {
          todoList.todo.push(todoList.newTodo);
          
          todoList.initializeNewTodo();
      };
      
      todoList.removeTodo  = function(start) {
          todoList.todo.splice(start,1);
      };
      
      todoList.todo = [];
      todoList.initializeNewTodo();
      
  });
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
  
