import React, {useState, useEffect} from "react";
import { Container, Snackbar} from "@material-ui/core"
import Header from "./components/Header";
import SendTweet from "./components/SendTweet";
import ListTweets from "./components/ListTweets";

import {TWEETS_STORAGE} from './utils/constants';

function App() {
const [toastProps, setToastProps] = useState({
  open: false,
  text: null
})
const [allTweets, setAllTweets] = useState([]);
const [reloadTweets, setReloadTweets] = useState(false)

useEffect(()=>{
  // getItem para recuperar información
  const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
  // parse convierte una cadena de texto JSON en un objeto JavaScript
  const AllTweetsArray = JSON.parse(AllTweetsStorage);
  console.log(JSON.parse(AllTweetsStorage))
  setAllTweets(AllTweetsArray);
  setReloadTweets(false)
}, [reloadTweets])
// AL poner arriba el reloadTweets, cada vez que cambie ese estado se renderiza la página
const deleteTweet = (i) => {
  allTweets.splice(i, 1);
  setAllTweets(allTweets);
  //Transformamos allTweets, que es un objeto,en una cadena de texto JSON. Setitem para guardar en ls
  localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
  console.log(JSON.stringify(allTweets))
  // hacemos que se recargue la página cuando se elimina un Tweet
  setReloadTweets(true)

}

  return (
   <Container className='tweets-simulator' maxWidth={false} >
     <Header />
     <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
     <ListTweets allTweets={allTweets} deleteTweet={deleteTweet}/>
     <Snackbar
     anchorOrigin={{
       vertical: 'top',
       horizontal: 'right'
     }}
     open={toastProps.open}
     autoHideDuration={1000}
     message={<span id="message-id">{toastProps.text}</span>}
     >


     </Snackbar>
   </Container>
  );
}

export default App;
