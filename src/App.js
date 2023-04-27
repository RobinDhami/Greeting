
import React from 'react';
import "./index.css"



const App=()=>{
  let curDate = new Date(2023,10,13,13,25);
curDate =curDate.getHours();
let greetings ='';
const css ={

};

if (curDate >= 1 && curDate< 12){
  greetings ='Good Morning';
  css.color= 'green';
} else if (curDate >= 13 && curDate <14){
  greetings ='Good Afternon';
  css.color='red';
} 
else if (curDate >= 15 && curDate <18){
  greetings ='Good Evening';
  css.color='orange';
}
 else {
  greetings='Good Night';
  css.color='#0D4671';
 }

 return( 
  <>
<div className='app'>
<h1 >Hello sir, <span style={css}>{greetings}</span></h1>
</div>
</>
);
};
export default App;

