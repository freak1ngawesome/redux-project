import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

const Counter = ({count, inc, dec, rnd}) => {
  return(
    <div className="jumbotron">
      <h1 >{count}</h1>
      <button onClick={dec} className="btn btn-primary">DEC</button>
      <button onClick={inc} className="btn btn-primary">INC</button>
      <button onClick={rnd} className="btn btn-primary">RND</button>
    </div>
  )
}


const mapStateToProps = (state) =>{
  return{
    count: state
  }
}

export default connect(mapStateToProps, actions)(Counter)
