import React, {useState} from 'react'
import './SendTweet.scss'
import { Fab } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import moment  from 'moment';
import ModalContainer from '../ModalContainer';
import FormSendTweet from '../FormSendTweet';
import {TWEETS_STORAGE} from '../../utils/constants'



const SendTweet = (props) => {
    const {setToastProps} = props;
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    };
    const closeModal = () => {
        setIsOpenModal(false);
    };
    
    const sendTweet = (e, formValue) => {
        e.preventDefault();
        const {name, tweet } = formValue;
        let AllTweetsArray = [];


        if(!name || !tweet ){
            setToastProps({
                open: true,
                text: 'Todos los campos son obligatorios'
            })
        } else {
            formValue.time = moment();
            AllTweetsArray.push(formValue)
            localStorage.setItem(TWEETS_STORAGE,  JSON.stringify(AllTweetsArray));
            setToastProps({
                open: true,
                text: 'Tweet enviado correctamente'
            })
            closeModal();
        }
        AllTweetsArray = [];
    }

    return (
        <div className='send-tweet'>
        <Fab 
        className='send-tweet__open-modal'
        color="primary"
        aria-label="add"
        onClick={openModal}
        >
            <AddIcon/>
        </Fab>

        <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal} >
           <FormSendTweet sendTweet={sendTweet} />
        </ModalContainer>
        </div>
    )
}

export default SendTweet