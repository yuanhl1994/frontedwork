import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import scape from './resources/scape.png';
import ipad from './resources/ipad.jpg';
import pc from './resources/PC.jpg';
import moblie from './resources/moblie.png';

import axios from './axios';

import './App.css';

function App() {
  const [imgSrc,setImgSrc] = useState('')
  
  const changeSize = ()=>{
    let ua = navigator.userAgent;
      let isAndriod = /(?:Android)/.test(ua) 
      let isIphone = /(?:iPhone)/.test(ua)
      if(isAndriod || isIphone) {
        setImgSrc(moblie)
      } else if(/(?:iPad|PlayBook)/.test(ua)) {
        setImgSrc(ipad)
      } else if(!isAndriod && !isIphone ) {
        setImgSrc(pc)
      }
  }
  useEffect(()=>{
    changeSize()
    window.addEventListener('resize',changeSize) 
      
    return ()=>{
      window.removeEventListener('resize',changeSize)
    }
  },[])

  
  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontSize:20,color:'#000'}}>
         <p>let ajax = new XMLHttpRequest()</p>
         <p>if get:</p>
         <p>ajax.open('get','getStar.php?starName='+name);</p>
         <p>else post:</p>
         <p>xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");</p>
         <p>ajax.open('post','getStar.php?starName='+name);</p>

         <p>xhr.send();</p>
          <p>
          {`xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
              console.log(xhr.responseText);
            } 
          }`}</p>
        </p>
        <div>
          <img className="scape" src={scape}></img>
        </div>
        <div>
          <img className="psd-img" src={imgSrc}></img>
        </div>
      </header>
    </div>
  );
}

export default App;
