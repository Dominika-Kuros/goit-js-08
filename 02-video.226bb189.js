!function(){var e="videoplayer-current-time",t=document.querySelector("#vimeo-player"),n=new Player(t);n.on("timeupdate",throttle((function(){localStorage.setItem(e,seconds)}),1e3)),n.setCurrentTime(JSON.parse(localStorage.getItem(e))).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.226bb189.js.map
