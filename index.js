function shout(string) {
    // todo
    return string.toUpperCase();

  }
  function whisper(string){
      return string.toLowerCase();
  }
   function logShout(hello){
       console.log(hello.toUpperCase());
   }

   function logWhisper(HELLO){
       console.log(HELLO.toLowerCase());
   }

   function sayHiToHeadphonedRoommate(string){
       if( string.toLowerCase()){
       return "I can\'t hear you!"  
   } 
   else if(string.toUpperCase()){
       
       return"YES INDEED";
   }  

    else if(string==="Let's have dinner together!" ) {
       return"I would love to!";
   }
  
   
}
