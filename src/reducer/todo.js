

export default (state=[], action)=>{
     switch(action.type){
      case 'ADD_TODO':
        return [
          ...state,
             action.todos
            
        ]
        case 'EDIT_TODO':
          return state.map((todo)=>{
            if(todo.id === action.id){
                return {
                  ...todo,
                  ...action.updated
                }
                }else{
                 return todo
            }
          }) 
         case 'DELETE_TODO':
           return state.filter((todos)=>todos.id !== action.id)
           case 'SEARCH_TODO':
             return state.filter((todos)=>{
               if(todos.notes.includes(action.text)){
                  return todos
               }else if(action.text === ''){
                    return {...state}
               }
             }) 
        default:
        return state
    }
}