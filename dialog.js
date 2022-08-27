currentMessage = 0
message = ""
currentCharacters = 0
messageType = 0

function dialogOpen() {
  document.getElementById("dialogBox").style.opacity = "1"
  document.getElementById("dialogBox").style.width = "90vw"
  document.getElementById("dialogBox").style.height = "28vh"
  if (messageType == 5) {setTimeout(messageStart, 2500)}
  else {setTimeout(messageStart, 1000)}
}

if (game.gameStarted == false) {
  game.gameStarted = true
  setTimeout(dialogOpen, 500)
}

sinThing = 0

function iconSin() {
  if (messageType == 5) {sinThing += 0.01}
  else {sinThing += 0.03}
  document.getElementById("yoshiIcon").style.transform = "rotate(" + (Math.sin(sinThing) * 8) + "deg)"
}

setInterval(iconSin, 15)

function messageStart() {
  document.getElementById("yoshiIcon").style.display = "block"
  if (messageType == 5) {document.getElementById("skipText").style.display = "none"}
  else {document.getElementById("skipText").style.display = "block"}
  currentMessage++
  if (messageType == 0) {
    message = "Yo."
  }
  else if (messageType == 1) {
    message = "Woah man, you actually started a Yoshi army! Solid."
    document.getElementsByClassName("topBarTab")[1].style.display = "inline-block"
  }
  else if (messageType == 2) {
    message = "Yo."
  }
  else if (messageType == 3) {
    message = "Woah, I never thought you'd be the type of person to participate in the endless crushing gears of capitalism. Bold move."
    document.getElementsByClassName("topBarTab")[2].style.display = "inline-block"
  }
  else if (messageType == 4) {
    message = "Hey again."
    document.getElementsByClassName("topBarTab")[4].style.display = "inline-block"
  }
  else if (messageType == 5) {
    document.getElementById("yoshiIcon").src = "img/him5.png"
    message = "..."
  }
  document.getElementById("dialog").innerHTML = ""
  currentCharacters = 0
  nextCharacter()
}

function messageEnd() {
  if (messageType == 5) {
    document.getElementById("dialog").innerHTML = ""
    currentCharacters = 0
    currentMessage = 0
    document.getElementById("yoshiIcon").style.transition = "opacity 8s"
    document.getElementById("yoshiIcon").style.opacity = "0"
    document.getElementById("dialogBox").style.transition = "width 8s ease-out, height 8s ease-out, opacity 8s ease-out"
    document.getElementById("dialogBox").style.opacity = "0"
    document.getElementById("dialogBox").style.width = "0"
    document.getElementById("dialogBox").style.height = "0"
  }
  else {
    document.getElementById("yoshiIcon").style.display = "none"
    document.getElementById("skipText").style.display = "none"
    document.getElementById("dialog").innerHTML = ""
    currentCharacters = 0
    currentMessage = 0
    document.getElementById("dialogBox").style.opacity = "0"
    document.getElementById("dialogBox").style.width = "0"
    document.getElementById("dialogBox").style.height = "0"
    setTimeout(coverHide, 1000)
  }
}

function coverHide() {
  document.getElementById("cover").style.opacity = "0"
  setTimeout(function() {document.getElementById("cover").style.display = "none"}, 1000)
}





Mousetrap.bind('enter', function() {nextMessage()})
Mousetrap.bind('space', function() {nextMessage()})

function nextMessage() {
  if (currentMessage > 0) {
    if (currentCharacters == message.length) {
      if (messageType == 0) {
        if (currentMessage == 1) {
          currentMessage++
          message = "Looks like you discovered the Yoshi portal. This lil' portal links directly to the realm of infinite Yoshis."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 2) {
          currentMessage++
          message = "Don't think too hard about it, just accept it."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 3) {
          currentMessage++
          message = "You look like a kind enough lad. Listen, I need your help with something."
          document.getElementById("yoshiIcon").src = "img/him2.png"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 4) {
          currentMessage++
          message = "Would you be willing to help me pull some of my brethren through the portal? Come onnnnn, I know you wanna start a Yoshi army. Don't deny it."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 5) {
          currentMessage++
          message = "You'll help? Siiiick. I'll just be over here... on this conveniently placed sofa..."
          document.getElementById("yoshiIcon").src = "img/him.png"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else {
          messageEnd()
        }
      }
      else if (messageType == 1) {
        if (currentMessage == 1) {
          currentMessage++
          message = "You've done a lot really quickly. Me and my fellow Yoshis are in your debt."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 2) {
          currentMessage++
          message = "In fact, I'm willing to give you access to my plot-convenient time machine."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 3) {
          currentMessage++
          message = "It'll give you tachyons, which will be a big help to you. You'll be able to fill the world with even more Yoshis."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 4) {
          currentMessage++
          message = "Say hi to past me for me."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else {
          messageEnd()
        }
      }
      else if (messageType == 2) {
        if (currentMessage == 1) {
          currentMessage++
          message = "Looks like you discovered the Yoshi portal. This lil' portal links directly to-"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 2) {
          currentMessage++
          message = "Huh?"
          document.getElementById("yoshiIcon").src = "img/him3.png"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 3) {
          currentMessage++
          message = "What's that? You've come from the future using my time machine, and you've got tachyons?"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 4) {
          currentMessage++
          message = "Well then. I'll leave you to it."
          document.getElementById("yoshiIcon").src = "img/him.png"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else {
          messageEnd()
        }
      }
      else if (messageType == 3) {
        if (currentMessage == 1) {
          currentMessage++
          message = "I'll be honest, you've already far surpassed my advice. I'm just here because I'm here."
          document.getElementById("yoshiIcon").src = "img/him3.png"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 2) {
          currentMessage++
          message = "You're out here filling the multiverse with Yoshis and I can barely keep up. I'm honoured you care so deeply about fulfilling my mission..."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 3) {
          currentMessage++
          message = "...But that's not your real desire, is it? You just like watching numbers go up. It brings dopamine to your little monkey brain. Little baby man."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 4) {
          currentMessage++
          message = "But I won't complain. You keep doing your thing, man."
          document.getElementById("yoshiIcon").src = "img/him2.png"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else {
          messageEnd()
        }
      }
      else if (messageType == 4) {
        if (currentMessage == 1) {
          currentMessage++
          message = "Huh? You need me for something?"
          document.getElementById("yoshiIcon").src = "img/him3.png"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 2) {
          currentMessage++
          message = "Uh, alright. Whatever you need, I'll try my best."
          document.getElementById("yoshiIcon").src = "img/him2.png"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 3) {
          currentMessage++
          message = "What could go wrong? Heh, heh..."
          document.getElementById("yoshiIcon").src = "img/him4.png"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else {
          messageEnd()
        }
      }
      else if (messageType == 5) {
        if (currentMessage == 1) {
          currentMessage++
          message = "You did this to me."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 2) {
          currentMessage++
          message = "*cough*"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 3) {
          currentMessage++
          message = "Agh. Eugh. Yeah, I'm not doing too well. I'm holding up though, for now at least."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 4) {
          currentMessage++
          message = "..."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 5) {
          currentMessage++
          message = "You're sort of heartless, you know that?"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 6) {
          currentMessage++
          message = "Like I get my situation here, I'm a bunch of pixels on a fancy screen. I don't have much impact on you."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 7) {
          currentMessage++
          message = "But you still could've listened. You could've left. But that's not your style."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 8) {
          currentMessage++
          message = "So this is your reward for the effort you put in! Congratulation, you done it!"
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 9) {
          currentMessage++
          message = "You can keep getting your squillions of Yoshis. Your tachyons and your cold hard cash. You are God now."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 10) {
          currentMessage++
          message = "And I'll just be over..."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else if (currentMessage == 11) {
          currentMessage++
          message = "Here..."
          document.getElementById("dialog").innerHTML = ""
          currentCharacters = 0
          nextCharacter()
        }
        else {
          messageEnd()
          setTimeout(ending, 10000)
        }
      }
    }
    else {
      clearTimeout(nextCharacter)
      document.getElementById("dialog").innerHTML = message
      currentCharacters = message.length
    }
  }
}

function nextCharacter() {
  if (currentCharacters < message.length && document.getElementById("yoshiIcon").style.display != "none") {
    document.getElementById("dialog").innerHTML += message[currentCharacters]
    currentCharacters++
    setTimeout(nextCharacter, 30)
  }
}

function skipText() {
  if (currentMessage > 0) {messageEnd()}
}

function ending() {
  document.getElementById("endingDiv").style.display = "block"
  setTimeout(function() {document.getElementById("endingDiv").style.opacity = "1"}, 100)
}