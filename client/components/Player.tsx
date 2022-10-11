import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import styles from '../styles/Player.module.scss'
import { ITrack } from "../types/track";
import TrackProgress from "./TrackProgress";

const Player = () => {
	const track :ITrack={  _id: "1",
	name: "track",
	artist: "eminen",
	text: "dsfsfs",
	listens: 5,
	audio: "https://sefon.pro/mp3/732898-rasa-pogudim/",
	picture:
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXbm2a_x4fJpCGdH00XCIshHICrVnJTy3S52tzazW&s",
	  comments:[]}
  const active = false;
  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {!active ? <PlayArrow /> : <Pause />}
      </IconButton>
		<Grid container direction='column' style={{width:200, margin:'0 20 px'}}>
			<div>{track.name}</div>
			<div style={{fontSize:14, color:'gray'}}>{track.artist}</div>
		</Grid>
		<TrackProgress left={0} right={100} onChange={()=>({})}/>
		<VolumeUp style={{marginLeft:'auto'}}/>
		<TrackProgress left={0} right={100} onChange={()=>({})}/>
    </div>
  );
};

export default Player;
