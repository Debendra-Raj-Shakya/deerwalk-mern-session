import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

function App() {

const [a,setA]=React.useState(false)

useEffect(() => {
  setA(true)
  return () => {
    cleanup
  };
}, [submitData]);


  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <div className="navright">
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">blog</a>
          <a href="#about">speakers</a>
          <a href="#about">pages</a>
          <a href="#about">contact</a>
          <a href="#about">let make it</a>
        </div>
      </div>
      <div className="imgbg">
        <img src="./a.png" alt=""/>
        <h1>hello world</h1>
        <div className="todo">
        <Todo submitData={submitData}/>

        </div>
      </div>

    </>
  );
}

export default App;
