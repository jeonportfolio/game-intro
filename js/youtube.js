   // 2. This code loads the IFrame Player API code asynchronously.
   var tag = document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  
   function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
       videoId: 'V_oRJZbSuk0',
       playerVars:{
         autoplay:true,
         loop:true,
         playlist:'V_oRJZbSuk0',
       },
       events: {
            onReady: function(event) {
                event.target.mute() 
            }
       }
     });
   }