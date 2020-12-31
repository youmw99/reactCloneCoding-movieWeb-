import React from 'react';
import PropTypes from "prop-types"
//import Potato from "./Potato";

function Food({name, picture, rating}){
  //console.log(props);
  return <div>
      <h2>Potato {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture}/>
  </div>
}

//PropTypes를 통한 Type체크
//다양한 체크 방법이 있다.
//참조 https://ko.reactjs.org/docs/typechecking-with-proptypes.html
Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  //rating : PropTypes.number.isRequired
}
  //jsx를 통한 argument 생성
 /* 다양한 형태의 props
  return (
    <div className="App">
      <h1>Hello~!</h1>
      <Food fav="kimchi"
        something={true}
        papapapa={["hello",1,2,3,4,true]}
         />
    </div>
  );*/

const foodILike = [
{
id : 1,
name: "Kimchi",
image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
rating : 5
},
{
id : 2,
name: "bulgogi",
image: "https://www.google.com/search?q=%EB%B6%88%EA%B3%A0%EA%B8%B0&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk02ziUIXmsNvR7TuYKh1cpJGpdpH8g:1593509047151&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-p87lm6nqAhVbUd4KHVSWBBUQ_AUoAXoECBgQAw&biw=1440&bih=701&dpr=2#imgrc=kjZoAmvHGo-KfM"
},
{
id : 3,
name: "kimbap",
image: "https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk03dn_nrK6M5JlKKfD5krm8w3qTmGQ:1593509069629&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqn6rwm6nqAhXDQN4KHYLUA4EQ_AUoAXoECBgQAw&biw=1440&bih=701#imgrc=Xz3xQoYZw3bqEM"
},
{
id : 4,
name: "samgyetang",
image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
}];

function renderFood(dish){
  return <Food key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/>
}

class App extends React.Component{
  state = {
    count : 0,

  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render(){
    return <div>
            <h1>The number is {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
          </div>;
  }
}

export default App;
