const e=document.querySelector("#vimeo-player"),t=new Player(e);t.on("timeupdate",throttle((()=>{localStorage.setItem("videoplayer-current-time",seconds)}),1e3)),t.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time"))).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.f10ba389.js.map
