import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../actions'
let user

class Username extends Component {
  render() {
    return(
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          if (!user.value) return
          this.props.setUser(user.value)
        }}>
          <input placeholder='Enter username' ref={node => user = node} />
          <br/>
          <button>Chat</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Username)
