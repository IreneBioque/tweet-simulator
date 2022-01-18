 // Tweet

import React from 'react'
import './Tweet.scss'
import { Card, CardContent } from '@material-ui/core';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import moment from 'moment';



const Tweet = (props) => {
    const {tweet:{name, tweet, time} , i, deleteTweet} = props;
// Esta función ejecuta la función recibida por props con el argumentos del index
    const deleteFunc = () => {
        deleteTweet(i);
    }

    return (
        <Card className="tweet">
            <CardContent>
                <div className='tweet__header' >
                    <h5>{name}</h5>
                    <DeleteTwoToneIcon onClick={deleteFunc} />
                </div>
                    <p>{tweet}</p>
                    <div className='tweet__date-add-tweet' >
                        {/* Formato de fecha en string: Día, mes, año hora y minutos */}
                        {moment(time).format('DD/MM/YYYY HH:mm')}
                    </div>
            </CardContent>
        </Card>
    )
}

export default Tweet