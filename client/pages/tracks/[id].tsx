import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage = () => {
  const router = useRouter();
  const track: ITrack = {
    _id: "1",
    name: "track",
    artist: "eminen",
    text: "dsfsfs",
    listens: 5,
    audio: "https://sefon.pro/mp3/732898-rasa-pogudim/",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXbm2a_x4fJpCGdH00XCIshHICrVnJTy3S52tzazW&s",
		comments:[]
  };
  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        style={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      >
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} width={200} height={200} />
        <div style={{ marginLeft: 30 }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель- {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова в треке</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="Комментарий" fullWidth multiline rows={4} />
        <Button style={{ marginLeft: "auto" }}>
          Отправить
        </Button>
      </Grid>
      <div>
        {track.comments.map(comment => (
          <div>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};
export default TrackPage;
