import React, { useState } from 'react'
import "./home.css";
import noteImage from "../images/notes.png";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkInput from '../components/bookmarkInput/BookmarkInput';
import NoteInput from '../components/noteInput/NoteInput';

function Home() {

    const [viewNoteInput, setViewNoteInput] = useState(true);
    const [viewBookmarkInput, setViewBookmarkInput] = useState(false);
    

    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    function notesBtnHandler(e) {
        setViewNoteInput(true);
        setViewBookmarkInput(false)
    }
    
    function bookmarkBtnHandler(e) {
        setViewBookmarkInput(true);
        setViewNoteInput(false);
        
    }

    return (
        <div className='container'>
            <div className='row aside-main'>
                <aside className='col-md-3' style={{ backgroundColor: "#FFFFFFCC"}}>
                    <div className='aside-header'><span className='noteImg'><img src={noteImage} alt="" /></span> DAILY NOTE TRACKER</div>
                    <ToggleButtonGroup
                        orientation="vertical"
                        value={view}
                        exclusive
                        onClick={handleChange}
                    >   
                        <ToggleButton className='toggle-window'  value="notes" aria-label="notes" onClick={notesBtnHandler}>
                            <div className='dailyNotes-innerDiv'>
                                <span className='dailyNotes-innerDiv-icon'><CollectionsBookmarkIcon /></span><p className='daily-notes same'>Daily Notes</p>
                            </div>
                        </ToggleButton>
                        <ToggleButton className='toggle-window' value="bookmarks" aria-label="bookmarks" onClick={bookmarkBtnHandler}>
                            <div className='bookmark-innerDiv'> 
                                <span className='bookmark-icon'><BookmarkAddIcon /></span><p className='bookmarks same'>BookMarks</p>
                            </div>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </aside>
                <div className='col-md-9' style={{height: '100%'}}>
                    {viewNoteInput ? <NoteInput /> : ''}
                    {viewBookmarkInput ? <BookmarkInput /> : ''}
                    {/* <NoteInput /> */}
                    {/* <BookmarkInput /> */}
                </div> 
            </div>
        </div>
    );
};

export default Home;
