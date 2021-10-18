// Script do Video do Youtube
let video = document.getElementById("videoAtual").value;

if (video.search("embed") == -1) {
  if (video.search("v=") !== -1) {
    video = video.substring(video.indexOf("?v=") + 3);
  } else if (video.search("be/") != -1) {
    video = video.substring(video.indexOf(".be/") + 3);
  }
  video = "https://www.youtube.com/embed/" + video;
} else {
  video = video.replaceAll('"', "-");
  video = video.slice(video.indexOf("embed/"), video.indexOf("- title"));
  video = "https://www.youtube.com/" + video;
}
document.getElementById("video").src = video;
