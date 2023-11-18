import { useState, useRef } from 'react';

export const Audio = ({ src, name }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="h-8" id="bottone" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h2 className="text-slate-50">{name}</h2>
      <audio ref={audioRef}>
        <source src={src} type="audio/mp3" />
      </audio>
    </div>
  );
};
{/* <audio controls>
  <source src="musica.mp3" type="audio/mp3">
  <source src="musica2.ogg" type="audio/ogg">
Il browser non supporta il tag audio
</audio> */}