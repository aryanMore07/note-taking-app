import React, { useState } from 'react';
import "./bookmarkInput.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SendIcon from '@mui/icons-material/Send'

function BookmarkInput() {

    const [inputUser, setInputUser] = useState('');
    const [currentNote, setCurrentNote] = useState([]);

    let date = new Date();

    let fullDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    function sendBookmarkBtnHandler() {
        setCurrentNote([...currentNote, inputUser]);

    }
    return (
        <div className='bookmarkInput-div'>
            <div className='result-div'>
                {
                    currentNote.map((key,index) => {
                        return (
                            <Card sx={{ minWidth: 275 }} key={index} className="cardComponent">
                                <CardContent>
                                    <a href={key} target='blank'>{key}</a>
                                </CardContent>
                                <p className='pTag-time' size="small">{fullDate}</p>
                            </Card>
                        )
                    })
                }
            </div>

            <div className='input-bookmark-div'>
                <input type="text" className='notes-input' placeholder='Add a bookmark...' onChange={(e) => {
                    setInputUser(e.target.value);
                }} /><span className='send-icon' onClick={sendBookmarkBtnHandler} ><SendIcon /></span>
            </div>
        </div>
    )
}

export default BookmarkInput
