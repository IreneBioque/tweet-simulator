// ListTweets

import React from 'react'
import './ListTweets.scss'
import { Grid } from '@material-ui/core';
import Tweet from '../Tweet'

const ListTweets = (props) => {
    const {allTweets, deleteTweet} = props;

    // Si no existe el array en ls o no tiene nada dentro (no hace falta poner false, con ! es suficiente)
if(!allTweets || allTweets.length === 0){
    return (
        <div className='list-tweets-empty' >
            <h2>No hay Tweets</h2>
        </div>
        )
}

    return (
     
        <Grid container spacing={3} className='list-tweets' >
        {allTweets.map((tweet, i) => {
            return (
            <Grid key={i} item xs={4}>
                <Tweet tweet={tweet} i={i} deleteTweet={deleteTweet}/>
            </Grid>
            )
        })}
    </Grid>
    )
}

export default ListTweets