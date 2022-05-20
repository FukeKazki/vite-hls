import './style.css';
import Hls from 'hls.js';

const video = document.querySelector<HTMLVideoElement>('#video')!;

if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(
    'https://play-210-236-224-126.whowatch.tv/hls/172.16.0.32/live-http-origin/111274896_2high/media-u2av8rjsl_ao_sfm4s_2248.0_m3u8'
  );
  hls.attachMedia(video);

  hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
  video.volume = 0;
  hls.on(Hls.Events.ERROR, (_, data) => console.error(data));
}
