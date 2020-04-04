import React from "react";
import { Link } from "react-router-dom";
import {
  PlayButton,
  Timer,
  VolumeControl,
  Progress
} from "react-soundplayer/components";
import { withCustomAudio } from "react-soundplayer/addons";
import SoundFile from "../assets/test_audio.mp3";

export default function Home() {
  const streamUrl = SoundFile;
  const trackTitle = "Ksmtk - Reborn";

  const SoundPlayer = withCustomAudio(props => {
    const { trackTitle } = props;
    return (
      <div>
        <PlayButton {...props} />
        <h2>{trackTitle}</h2>
        <Timer {...props} />
        <Progress {...props} />
        <VolumeControl {...props} />
      </div>
    );
  });

  return (
    <div className="home-container">
      <div className="welcome">welcome</div>
      <Link to="/player/albums">Go to player</Link>
      <SoundPlayer
        streamUrl={streamUrl}
        trackTitle={trackTitle}
        preloadType="auto"
      />
    </div>
  );
}
