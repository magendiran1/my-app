import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {



  const [like, setLike] = useState(0);
  const [dislike, setdislike] = useState(0);


  return (
    <div>
      {/* <button onClick={() => setLike(like + 1)}>👍 {like}</button> */}
      <IconButton aria-label="delete" size="large"  color='success' onClick={() => setLike(like + 1)}>
      <Badge badgeContent={like}  color="success">
 👍
 </Badge>
</IconButton>
<IconButton aria-label="delete" size="large" color='error' onClick={() => setdislike(dislike +1)}>
<Badge badgeContent={dislike} color="error">
 👎
</Badge>
</IconButton>




      {/* <button onClick={() => setdislike(dislike - 1)}>👎 {dislike}</button> */}
    </div>
  );
}
