Có nhiều cách để tạo tabs sử dụng reactjs<br>
Tham khảo thêm tại https://freefrontend.com/react-tabs/

- Ở ví dụ này sử dụng cách tạo 1 mãng các tab, sau đó render ra
```js
const TAB_DATA = [
  ["tab 1", "lorem ipsum dolor sit amet"],
  ["tab 2", "Curabitur in augue erat. Vestibulum in fermentum ante, sit amet consectetur neque. Maecenas tempor nisl sollicitudin, blandit sapien ut, fermentum metus."],
  ["tab 3", "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam aliquam, nisi vitae maximus tincidunt, justo leo auctor neque, et fermentum ante libero ac libero."],
  ["tab 4", "lorem fdfd"]
];
```

Trong **Tabs** component set state của active là **0**
```js
constructor(props) {
  super(props);
  this.state = {
    active: 0
  }
}
```
Trong **Tabs** component render map và render dữ liệu ra, <br>
kiểm tra nếu active = i, thì thêm `class="tab active"` vào <li> <br>
kiểm tra nếu active = i, thì hiển thị `text` ra, ngược lại active = 0 thì hiển thị `content` , default `content = ""`


```js
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

```