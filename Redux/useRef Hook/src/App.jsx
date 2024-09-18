import { useRef } from "react";

export default function App() {
  const video = useRef(null);

  const play = () => {
    const player = video.current;
    player.play();
  };

  const pause = () => {
    const player = video.current;
    if(!player.paused){
      player.pause();
    }
  };

  const mute = () => {
    const player = video.current;
    player.muted = !player.muted;  
  };

  const playAfterSelect = (e) => {
    const input = e.target;
    const file = input.files[0];

    if (file && file.type === "video/mp4") {
      const url = URL.createObjectURL(file);
      const player = video.current;
      player.src = url;
      player.play();
      console.log(`Video URL: ${url}`);
    } else {
      alert("Please select a valid MP4 video file.");
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen min-w-screen bg-gray-800">
        <div className="my-24">
          <video ref={video} controls src="https://www.w3schools.com/html/mov_bbb.mp4" className="w-full h-full"></video>
          <input 
          type="file" 
          accept=".mp4" 
          onChange={playAfterSelect}
          className="my-5 rounded bg-white p-3 w-96"
          />
          <div className="flex justify-center items-center gap-3 my-8">
            <button
              onClick={play}
              type="button"
              className="py-2 bg-indigo-500 my-5 rounded px-5 text-white font-medium">
              Play
            </button>
            <button
              onClick={pause}
              type="button"
              className="py-2 bg-green-500 my-5 rounded px-5 text-white font-medium">
              Pause
            </button>
            <button
              onClick={mute}
              type="button"
              className="py-2 bg-pink-500 my-5 rounded px-5 text-white font-medium">
              Mute
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
