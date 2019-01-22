import React, { Component } from 'react'

export default class App extends Component {
  
    flip(e){
        console.log(e);
        let front = document.querySelector('.front');
        let back = document.querySelector('.back');

        back.style.transform = "perspective(900px) rotateY(180deg)";
        front.style.transform = "perspective(900px) rotateY(0deg)";

        setTimeout(function () {
            back.style.transform = "perspective(900px) rotateY(0deg)";
            front.style.transform = "perspective(900px) rotateY(180deg)";
            
          }, 700)
    }

    render() {

    const json = [
        {
            "id": 0,
            "name":"react",
            "img":"./assets/react.png"
        },
        {
            "id": 1,
            "name":"vue",
            "img":"./assets/vue.png"
        }
    ]

    const slike = json.map((item) => {
        return(
            <div className="tile" key={item.id} onClick={this.flip}>
                <div className="front" >
                    <img src={item.img} alt="logo" ></img>
                </div>
                <div className="back">
                </div>
            </div>
        ) 
    })

    return (
      <div className="gameboard">
          {slike}
      </div>
    )
  }
}
