var myTodo = angular.module('myTodo' ,[])
  angular.module('myTodo') 
      .controller( 'TodoCtrl' , function(){
         
        var todoList = this;
      
         todoList.initializeNewTodo = function(){
            todoList.newTask = {};
         };
         
         todoList.addTodo = function(){
             todoList.todo.push(todoList.newTask);
             todoList.initializeNewTodo();
         };
      
            todoList.todo = [];
            todoList.initializeNewTodo(); 
            
      });
 
