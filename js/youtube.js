   // 2. This code loads the IFrame Player API code asynchronously.
   var tag = document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  
   function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
       videoId: 'mOFoh9FUR8w',
       playerVars:{
         autoplay:true,
         loop:true,
         playlist:'mOFoh9FUR8w',
       },
       events: {
            onReady: function(event) {
                event.target.mute() 
            }
       }
     });
   }