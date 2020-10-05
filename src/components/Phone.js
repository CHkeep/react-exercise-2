import React from 'react';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: this.props,
    };
  }

  render() {
    return (
      <div key={this.phone.name}>
        <p className="phoneName">{this.phone.name}</p>
        <img src="../assets/product_image_placeholder.png" />
        <p className="phoneMoney">{this.phone.money}</p>
      </div>
    );
  }
}
export default Phone;
