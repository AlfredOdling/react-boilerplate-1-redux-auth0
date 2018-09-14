import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from '../actions/user'

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: [{ label: 'DASHBOARD' }, { label: 'USER INSIGHTS' }, { label: 'SETTINGS' }],
    }
  }

  renderNavItems() {
    const { navItems } = this.state

    const itemsToRender = navItems.map(item => (
      <div className="nav-item" key={item.label}>
        <div className="nav-inner-item">
          <p>{item.label}</p>
        </div>
      </div>
    ))

    return itemsToRender
  }

  render() {
    return (
      <div id="sidebar">
        <div id="sidebar-background" />

        <div id="sidebar-header">
          <p>LOGO</p>
        </div>

        <div id="sidebar-nav">{this.renderNavItems()}</div>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     // open_request: url => dispatch(actions.openRequest()),
//   }
// }

function mapStateToProps(state) {
  return {
    // openData: state.user.openData,
  }
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Sidebar)
