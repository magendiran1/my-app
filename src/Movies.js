import { useState } from 'react';
import { Counter } from './Counter';


import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom';


export function Movies({ name, rating, summary, Movie_pic ,index}) {

  // const id =useParams()
  const history =useHistory();
  const [show, Hide] = useState(true)
  // const styles = { display: show ? "block" : "none" }
  return (
    <Card className="movie-container">
  
      <img className="movie-poster" src={Movie_pic} alt={name} />
      <div className="movie-spec">
        <h3 className="movie-name">{name}
     
          <IconButton onClick={() => Hide(!show)} aria-label="Hide" color='primary'>
            
            {/* {show ? "Hide Description" : "Show Description"} */}
            {show ?  <ExpandLessIcon /> :  <ExpandMoreIcon />}
          </IconButton>
          <InfoIcon onClick={()=>history.push(`/MoviesList/${index}`)}  color='primary'/> 
        </h3>
        <p className="movie-rating">✨{rating}</p>
      </div>

      {/* <button onClick={()=>Hide(!show)} style={{width:"150px",height:"50px"
 ,marginBottom:"10px"}} >{ show ? "Hide":"show" } Description</button> */}
      {/* <p style={styles} className="movie-summary">{summary}</p> */}
      {show ? <p className="movie-summary">{summary}</p> : null}
      <Counter />
    
    </Card>
  );
}
