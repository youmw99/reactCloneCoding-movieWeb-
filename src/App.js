import React from 'react';
//import Potato from "./Potato";

function Food({fav}){
  //console.log(props);
  return <h1>Potato {fav}</h1>
}

function App() {
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
  return (
    <div className="App">
      <h1>Hello~!</h1>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="bulgogi"/>
      <Food fav="sushi"/>
    </div>
  );
}

export default App;
