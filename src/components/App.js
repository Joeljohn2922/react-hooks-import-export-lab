import React from "react";

function About(){ 
  return ( 
    <div id = "about"> 
    <h2>About</h2>
    </div>
  )
} 

function NavBar(){ 
  return ( 
    <div id = "navbar"> 
    <h2>NavBar</h2>
    </div>
  )
} 

function Home(){ 
  return ( 
    <div id = "home"> 
    <h2>Home</h2>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
