import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/user'
import Sidebar from '../../components/Sidebar' // eslint-disable-line

class Startpage extends Component {
  constructor(props) {
    super(props)

    const { auth, history } = this.props
    const { isAuthenticated } = auth

    if (!isAuthenticated()) {
      history.push('/login')
    }
  }

  render() {
    return (
      <div id="startpage">
        <Sidebar />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  openRequest: url => dispatch(actions.openRequest(url)),
})

function mapStateToProps(state) {
  return {
    openData: state.userReducer.openData,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Startpage)
