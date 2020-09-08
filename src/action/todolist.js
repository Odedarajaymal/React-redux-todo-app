import {v1 as uuid} from "uuid";

 export const Addtodo = ({notes=''}={})=>{
  return {
    type :'ADD_TODO',
   todos :{
      id: uuid(),
      notes
    }
  }
}



export  const Edittodo = (id,updated)=>{
  return {
    type :'EDIT_TODO',
    id,
    updated
  }
}

export  const remove = (id)=>{
  return {
    type :'DELETE_TODO',
    id
  }
}
export const search  = (text)=>{
 return {
   type :'SEARCH_TODO',
   text
 }
}