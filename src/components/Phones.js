import React from 'react';
import Phone from './Phone';
import './phone.scss';

class Phones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [],
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
      .then((data) => {
        const map = {};
        data.forEach((d) => {
          if (map[d.category]) {
            map[d.category].push(d);
          } else {
            map[d.category] = [d];
          }
        });
        const c = Object.keys(map);
        const cs = [];
        c.forEach((i) => {
          cs.push({
            title: i,
            data: map[i],
          });
        });
        console.log(cs);
        this.setState({
          phones: cs,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.phones);
    return (
      <div className="categary">
        {this.state.phones.map((c) => {
          console.log('c', c);
          return (
            <div key={c.title}>
              <p className="title">{c.title}</p>
              {c.data.map((phone) => {
                return (
                  <div className="phones" key={phone.name}>
                    <Phone phone={phone} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Phones;
