import React,{ Component }from 'react'
import {connect} from 'react-redux'
import {Edittodo} from '../action/todolist'

class Edit extends Component {
    constructor(props) {
        super(props)
       this.state = {
            notes:this.props.todo.notes
        }
    }
    

    handleChange = (name) =>(event)=>{
        this.setState({[name]:event.target.value})
    }
    submit = (e) =>{
       e.preventDefault()
       const {notes} = this.state
       this.props.dispatch(Edittodo(this.props.todo.id,{notes}))
       this.props.history.push('/')
    }
    render() {
        const {notes} = this.state
    return(
        <div className='container'>
                 <div className='col-md-12'> 
                 <h1 className="text-primary mt-5">Edit options</h1>
                 <from>
                 <div className='from-group mt-3' >
                    <input onChange={this.handleChange('notes')} value={notes} type='text' className='from-control' style={{width: '100%',padding:'5px'}} name='options' placeholder='Add options' />
                    <button onClick={this.submit} type="button" class="btn btn-raised btn-primary mt-3">Add options</button> 
                    </div>
                 </from>
                 </div>
                 
        </div>
    )
    }
}


const mapStateToProps = (state,props)=>{
    return {
        todo: state.todos.find(todo =>todo.id === props.match.params.id)
    }
}

export default connect(mapStateToProps) (Edit)