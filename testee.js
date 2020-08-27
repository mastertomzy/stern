var vid = document.getElementById("player");
function onetwo() {isSupp = vid.canPlayType("video/mp4");
if (isSupp == "") {vid.src = "";} else {vid.src = "https://nl25.seedr.cc/media/play_hls_lq/ece97aa138e082ff717ba33f5a46d0b99036fb38.m3u8?DVR";}vid.load();} 
