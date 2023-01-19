import React from 'react'
import "./home.css";
import noteImage from "../images/notes.png";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

function Home() {


        const [view, setView] = React.useState('list');

        const handleChange = (event, nextView) => {
            setView(nextView);
        };
    
    return (
        <div className='container'>
            <div className='row aside-main'>
                <aside className='col-md-3' style={{ backgroundColor: "#FFFFFFCC"}}>
                    <div className='aside-header'><span className='noteImg'><img src={noteImage} alt="" /></span> DAILY NOTE TRACKER</div>
                    <ToggleButtonGroup
                        orientation="vertical"
                        value={view}
                        exclusive
                        onChange={handleChange}
                    >   
                        <ToggleButton className='toggle-window'  value="notes" aria-label="notes">
                            <div className='dailyNotes-innerDiv'>
                                <span className='dailyNotes-innerDiv-icon'><CollectionsBookmarkIcon /></span><p className='daily-notes same'>Daily Notes</p>
                            </div>
                        </ToggleButton>
                        <ToggleButton className='toggle-window' value="bookmarks" aria-label="bookmarks">
                            <div className='bookmark-innerDiv'> 
                                <span className='bookmark-icon'><BookmarkAddIcon /></span><p className='bookmarks same'>BookMarks</p>
                            </div>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </aside>
                <div className='col-md-9'>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
