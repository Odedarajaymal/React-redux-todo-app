import React from 'react'

const Header = ()=>{
    return(
        <nav>
            <div class="nav nav-tabs bg-dark" id="nav-tab" role="tablist">
                 <h1 style={{fontSize:'35px'}} className='text-white ml-5 font-weight-bold '> Todo List</h1>
            </div>
        </nav>    
    )
}

export default Header