import React, { useState } from 'react';
import "./noteInput.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';


function NoteInput() {


    let date = new Date();

    const [noteFromUser, setNoteFromUser] = useState('');
    const [currentNote, setCurrentNote] = useState([]);


    let fullDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    function noteTrackHandler(e) {
        setNoteFromUser(e.target.value);
    }

    function sendNoteBtnHandler(e) {
        setCurrentNote([...currentNote, noteFromUser]);
    }


    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        </Box>
    );


    return (
        <div className='notesInput-innerDiv'>
            <div className='result-div'>
                {
                    currentNote.map((key, index) => {
                        return (
                            <Card sx={{ minWidth: 275 }} key={index} className="cardComponent">
                                <CardContent>
                                    <Typography variant="body2">
                                        {key}
                                    </Typography>
                                </CardContent>
                                <p className='pTag-time' size="small">{fullDate}</p>
                            </Card>
                        )
                    })
                }
            </div>

            <div className='input-div'>
                <input type="text" className='notes-input' placeholder='Type a Daily Note...' onChange={noteTrackHandler} /><span className='send-icon' onClick={sendNoteBtnHandler} ><SendIcon /></span>
            </div>
        </div>
    )
}

export default NoteInput
