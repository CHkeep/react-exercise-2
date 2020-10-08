import React from 'react';
import './phone.scss';
import URL from '../assets/product_image_placeholder.png';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      phone: {},
    };
  }

  render() {
    // console.log(this.props.phone)
    return (
      <div key={this.props.phone.name} className="phone">
        <p className="phoneName">{this.props.phone.name}</p>
        <img src={URL} className="img" />
        <span className="phoneMoney">{this.props.phone.price}</span>
        <Button type="primary" onClick={this.props.handleAdd}>add to cart</Button>
      </div>
    );
  }
}
export default Phone;
