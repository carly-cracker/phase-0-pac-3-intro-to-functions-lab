function shout(hello){
    return hello.toUpperCase()
}

function whisper(CARLOS){
    return CARLOS.toLowerCase()
}
console.log(shout)
console.log(whisper)

function logShout(boo){
    console.log( boo.toUpperCase())
}

function logWhisper(CARLOS){
    console.log( CARLOS.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    }
  }
