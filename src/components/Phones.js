import React from 'react';
import Phone from './Phone';

class Phones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: new Array(),
    };
  }

  componentDidMount() {
    async function fetchData(url) {
      const result = await fetch(url);
      const data = await result.json();
      return data;
    }

    const URL = 'http://localhost:3000/products';
    fetchData(URL)
      .then((data) =>
        this.setState({
          phones: data,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.phones);
    return (
      <div className="phones">
        {this.state.phones &&
          this.state.phones.map((phone) => (
            <div className="phone" key={phone.name}>
              <Phone array={phone} />
            </div>
          ))}
      </div>
    );
  }
}
export default Phones;
