import React, { Component } from 'react'
import  { connect} from 'react-redux'
import {Addtodo,remove,search} from '../action/todolist'
import {Link} from 'react-router-dom'

class Addoptions extends Component {
    state = {
        notes:'',
        error:''
    }
    handleChange = (name)=>(event)=>{
        this.setState({[name]:event.target.value})
    }
    submit = (e)=>{
      e.preventDefault()
      const{notes} = this.state
      if(notes === ''){
          this.setState({error:'please add notes'})
      }else{
          this.props.dispatch(Addtodo({notes}))
          this.setState({notes:'',error:''})
      }

    }
    render() {        
         const {notes,error} = this.state
        return (
             <div className="container">
                  <div >
                  <input onChange={(e)=>this.props.dispatch(search(e.target.value))} value={this.props.todo.notes} type="text" className="from-control mt-3" style={{padding:'5px'}} placeholder="Search"/>
                 <h1 className="text-primary mt-3">Add options</h1>
                    <h1>{error}</h1>
                 <from className="col-md-12">
                 <div className='from-group mt-3' >
                    <input onChange={this.handleChange('notes')} value={notes} type='text' className='from-control' style={{width: '100%',padding:'5px'}}name='options' placeholder='Add options' />
                    <button onClick={this.submit} type="button" class="btn btn-raised btn-primary  mt-3 mr-3">Add options</button> 
                    </div>
                 </from>
                  </div>
                 {this.props.todo.map((tod)=>(
                                    <div className='mt-3' style={{width: '100%'}} >
                                    <table className="table table-dark">
                                          <thead>
                                              <tr>
                                              <th scope="col" className="text-primary" >options</th>
                                              <th scope="col"className="text-primary" >Edit</th>
                                              <th scope="col" className="text-primary">Delete</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody>
                                                          <tr>
                                                         <td>{tod.notes}</td>
                                                          <td>
                                                          <Link to={`/edit/${tod.id}`} className="material-icons text-primary">
                                                                create
                                                                </Link>
                                                          </td>
                                                          <td>
                                                          <button onClick={()=>this.props.dispatch(remove(tod.id))} className ="material-icons text-primary">
                                                                delete
                                                            </button>
                                                          </td>
                                                          </tr>
                                                      
                                                      </tbody>
                                            </table>                  
                                    </div>
                 )

                 )}
            </div>
        )
    }
}
  const mapStateToProps = (state) =>{
      return {
          todo: state.todos
      }
  }
export default connect(mapStateToProps)(Addoptions)