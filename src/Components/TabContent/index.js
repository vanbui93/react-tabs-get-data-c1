import React, { Component } from 'react'

const TabPanel = ({ content }) => 
  <div className="TabPanel">
    <p>{content}</p>
  </div>;
class TabContent extends Component {
    render() {
        return (
            <div>
                {TabPanel}
            </div>
        )
    }
}
export default TabContent;