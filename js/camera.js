import { isMobile } from "./mobile-check";

/**
 * Loads a the camera to be used in the demo
 *
 */
async function setupCamera(videoWidth, videoHeight) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error(
      "Browser API navigator.mediaDevices.getUserMedia not available"
    );
  }

  const video = document.getElementById("video");
  video.width = videoWidth;
  video.height = videoHeight;

  const mobile = isMobile();
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: "user",
      width: mobile ? undefined : videoWidth,
      height: mobile ? undefined : videoHeight
    }
  });
  video.srcObject = stream;

  return new Promise(resolve => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}

async function loadVideo(videoWidth, videoHeight) {
  const video = await setupCamera(videoWidth, videoHeight);
  video.play();

  return video;
}

export { setupCamera, loadVideo };
