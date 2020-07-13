import React, { Component } from 'react';
import './style.css';

const TAB_DATA = [
  ["tab 1", "lorem ipsum dolor sit amet"],
  ["tab 2", "Curabitur in augue erat. Vestibulum in fermentum ante, sit amet consectetur neque. Maecenas tempor nisl sollicitudin, blandit sapien ut, fermentum metus."],
  ["tab 3", "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam aliquam, nisi vitae maximus tincidunt, justo leo auctor neque, et fermentum ante libero ac libero."],
  ["tab 4", "lorem fdfd"]
];

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  clickHandler = (e) => {
    this.setState({
      active: parseInt(e.currentTarget.attributes.num.value)
    })
  }

  render() {
    let content = "";
    const tabs = TAB_DATA.map(([label, text], i) => {
      content = this.state.active === i ? text : content;
      return (
        <li
          className={this.state.active === i ? "tab active" : "tab"}
          key={label}
          num={i}
          onClick={this.clickHandler}>
          {label}
        </li>
      );
    });
    return (
      <section className="tabs">
        <menu>
          <ul>
            {tabs}
          </ul>
        </menu>
        <div>
          {content}
        </div>
      </section>
    )
  }
}
export default Tabs;