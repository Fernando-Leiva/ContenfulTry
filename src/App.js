
import './App.css';
import React from 'react';
import { getContent } from './helpers/contentModel';

function App() {
  const [post, setPost] = React.useState(); 
  const [show, setShow] = React.useState(false)
  const handleClick = () =>{
    setShow(!show)
  }
  React.useEffect(async()=>{
    const data = await getContent()
    setPost(data)
      
  },[])
  console.log(post)
  return (
    <div className="App">
        <h1>{post && post.title}</h1> 
        {show && <img src={post.image} alt="BigCo Inc. logo" />  }
        <button onClick={handleClick}>Click me</button> 
        <h4>{post && post.subTitle}</h4>
    </div>
  );
}

export default App;
