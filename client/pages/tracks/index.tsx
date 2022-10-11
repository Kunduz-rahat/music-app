import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import TrackList from "../../components/TrackList";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const Index = () => {
  const router = useRouter()
  const tracks:ITrack[] =[{
    _id:'1', 
    name:'track',
    artist:'eminen',
    text:'dsfsfs',
    listens:5,
    audio:'https://sefon.pro/mp3/732898-rasa-pogudim/', 
    picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXbm2a_x4fJpCGdH00XCIshHICrVnJTy3S52tzazW&s'
  }]
  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{width:900}}>
			<Box p={3}>
			<Grid container justifyContent='space-between'>
            <h1>Список треков</h1>
            <Button onClick={()=> router.push('/tracks/create')}>Загрузить...</Button>
          </Grid>
			</Box>
          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
