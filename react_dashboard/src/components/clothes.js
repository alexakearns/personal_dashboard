import React, { Component } from 'react'

export class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getWarmer() {
    const corsProxy = "https://cors-anywhere.herokuapp.com/"
    const warmerJSON = "https://therapy-box.co.uk/hackathon/clothing-api.php?username=swapnil"
    fetch(corsProxy + warmerJSON)
    .then((response) => response.json())
    .then((data) => {
      let objects = data.payload
      console.log(objects)
      
      let counts = {}
let val

for(let i=0;i < objects.length; i++)
{
  val = objects[i].clothe;
  if(typeof counts[val] === 'undefined')
  {
    counts[val] = 1;
  }
  else
{
  counts[val] += 1;
}
}
console.log(counts)
    })
    .catch(error => console.log(error))
  }

  // countItem(objects, clothe) {
  //   return objects.reduce(function (acc, obj) {
  //     let key = obj[clothe]
  //     if (!acc[key]) {
  //       acc[key] = []
  //     }
  //     acc[key].push(obj)
  //     return acc
  //   }, {})
  // }

  componentDidMount() {
    this.getWarmer()
  }


  render() {
    return(
      <div>
        <h1>CLOTHES!!!</h1>
      </div>
    );
  };
};

export default Clothes;