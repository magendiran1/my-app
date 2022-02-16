// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Movielist } from './Movielist';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Switch, Link, Route, Redirect } from 'react-router-dom';
import { intialMovies } from './intialMovies';


function App() {

  const userList = [{
    name: "Magendiran sign dhoni",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6xeMiTwaIGhahUoPzJ0ENN71W2e2afeVbQ&usqp=CAU"
  },
  {
    name: "csk caption",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD79XiQYI1Gn5IxxRp3A0ZkVJx-jVHJoOjVw&usqp=CAU"
  },
  {
    name: "vijay",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUy0mx40zeeDoLbqTtVOeTwbX2jm32C0pNRQ&usqp=CAU"
  }]

  const [movies, setMovies] = useState(intialMovies)

  const [name, setName] = useState("")
  const [rating, setRating] = useState("")
  const [summary, setsummary] = useState("")
  const [Movie_pic, setMovie_pic] = useState("")

  const addMovies = () => {

    console.log({ name, rating, summary, Movie_pic })
    const newMovies = { name, rating, summary, Movie_pic }
    setMovies([...movies, newMovies])
    console.log(movies)
    resetForm();
  }


  const resetForm = () => {
    setName("");
    setMovie_pic("");
    setRating("");
    setsummary("");
  }


  return (
    <div className="App">

      <ul>
        <li><Link to="/Form">Movies Form </Link></li>
        <li><Link to="/MoviesList">MoviesList </Link></li>
        <li><Link to="/Color">Color Game</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>

      <Switch>
     

        <Route path="/Form">
          <div className='add-movie-form'>
            <TextField id="standard-basic" label="name" variant="standard" value={name} onChange={(event) => { setName(event.target.value) }} placeholder='enter a Name' />
            <TextField id="standard-basic" label="Rating" variant="standard" value={rating} onChange={(event) => { setRating(event.target.value) }} placeholder='enter a rating' />
            <TextField id="standard-basic" label="Summary" variant="standard" value={summary} onChange={(event) => { setsummary(event.target.value) }} placeholder='enter a movie summary' />
            <TextField id="standard-basic" label="Moive Poster" variant="standard" value={Movie_pic} onChange={(event) => { setMovie_pic(event.target.value) }} placeholder='enter movie pic' />
            {/* <button onClick={addMovies}>Add Movie</button> */}
            <Button variant="contained" onClick={addMovies}>Add Movie</Button>
          </div>
        </Route>
        <Route path="/MoviesList">
          <Movielist movies={movies} />
        </Route>
        <Route path='/flims' >
          <Redirect to="/MoviesList" />
        </Route>
        <Route path="/MoviesList/:id">
         Movies Details
       </Route>
        <Route path="/Color">
          <AddColor />
        </Route>
       
      
        <Route path="**" >
          <img style={{ width: "50%", margin: "51px 270px", objectFit: "cover" }} src='https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-p%C3%A1gina-no-encontrada-error-con-efecto-de-falla-en-la-pantalla-ilustraci%C3%B3n-vectorial-para-s.jpg' />
        </Route>

        <Route  path="/">
          <h1>Welcome To Our Application</h1>
        </Route>
      </Switch>


      {/* {userList.map(({name,pic})=> <Msg  name ={name} pic={pic}/>)} */}


    </div>
  );
}

function ColorBox({ clr }) {

  const styles = { width: "200px", height: "50px", backgroundColor: clr, border: "1px solid black", margin: "8px" }

  return (
    <div>
      <div style={styles}>

      </div>
    </div>

  )
}


function AddColor() {
  // const style ={background:"red"}

  const [color, setColor] = useState("");
  const [colors, setColors] = useState(["pink", "red", "yellow"])
  console.log(color, colors)
  const style = { background: color }
  return (
    <div>
      <input style={style} onChange={(e) => setColor(e.target.value)} placeholder=' enter a Color ' />
      <button onClick={() => setColors([...colors, color])} >Add Color</button>

      {colors.map((clr, index) => (

        <ColorBox key={index} clr={clr} />


      ))}

    </div>
  )
}


export default App;
