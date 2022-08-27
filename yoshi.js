function usePortal() {
  game.yoshis = game.yoshis.add(game.yoshisPerClick)
}

function unlockAutomators() {
  if (game.yoshis.gte(30)) {
    game.yoshis = game.yoshis.sub(30)
    game.unlocksBought++
    document.getElementById("unlockAutomatorButton").style.display = "none"
    document.getElementById("unlockRnDButton").style.display = "block"
    document.getElementById("automatorsDiv").style.display = "block"
  }
}

function buyAutomator() {
  if (game.yoshis.gte(game.automatorCost)) {
    game.yoshis = game.yoshis.sub(game.automatorCost)
    game.automators = game.automators.add(1)
  }
}

function yoshisPerSecond() {
  game.yoshis = game.yoshis.add(game.yoshisPerSecond.div(20))
}

setInterval(yoshisPerSecond, 50)

function doubleAutomators() {
  if (game.yoshis.gte(game.automatorDoubleCost)) {
    game.yoshis = game.yoshis.sub(game.automatorDoubleCost)
    game.automatorDoubles = game.automatorDoubles.add(1)
  }
}

function unlockRnD() {
  if (game.yoshis.gte(150000)) {
    game.yoshis = game.yoshis.sub(150000)
    game.unlocksBought++
    document.getElementById("unlockRnDButton").style.display = "none"
    if (game.totalTachyons.equal(0) && game.alterationsUnlocked == false) {
      document.getElementById("takeOverWorldButton").style.display = "block"
    }
    else {
      game.unlocksBought++
    }
    document.getElementById("RnDDiv").style.display = "grid"
    document.getElementById("RnDDivText").style.display = "block"
    if (game.tachyonUpgradesBought[7] && game.capitalismUnlocked == false && game.alterationsUnlocked == false) {
      document.getElementById("unlockCapitalismButton").style.display = "block"
    }
    else if (game.capitalismUnlocked) {
      game.unlocksBought++
    }
  }
}

function buyUpgrade(x) {
  if (x==1 && game.yoshis.gte(upgradeCosts[0]) && game.upgradesBought[0] != true) {
    game.yoshis = game.yoshis.sub(upgradeCosts[0])
    game.upgradesBought[0] = true
  }
  else if (x==2 && game.yoshis.gte(upgradeCosts[1]) && game.upgradesBought[1] != true) {
    game.yoshis = game.yoshis.sub(upgradeCosts[1])
    game.upgradesBought[1] = true
  }
  else if (x==3 && game.yoshis.gte(upgradeCosts[2]) && game.upgradesBought[2] != true) {
    game.yoshis = game.yoshis.sub(upgradeCosts[2])
    game.upgradesBought[2] = true
    document.getElementsByClassName("upgrade")[3].style.display = "block"
    document.getElementsByClassName("upgrade")[4].style.display = "block"
    document.getElementsByClassName("upgrade")[5].style.display = "block"
  }
  else if (x==4 && game.yoshis.gte(upgradeCosts[3]) && game.upgradesBought[3] != true) {
    game.yoshis = game.yoshis.sub(upgradeCosts[3])
    game.upgradesBought[3] = true
    document.getElementById("yoshisPerClickText").style.display = "block"
  }
  else if (x==5 && game.yoshis.gte(upgradeCosts[4]) && game.upgradesBought[4] != true) {
    game.yoshis = game.yoshis.sub(upgradeCosts[4])
    game.upgradesBought[4] = true
  }
  else if (x==6 && game.yoshis.gte(upgradeCosts[5]) && game.upgradesBought[5] != true) {
    game.yoshis = game.yoshis.sub(upgradeCosts[5])
    game.upgradesBought[5] = true
    autobuyInterval = setInterval(autobuy, 50)
    document.getElementById("autobuyButton").style.display = "block"
  }
  else if (x==7 && game.yoshis.gte(upgradeCosts[6]) && game.upgradesBought[6] != true) {
    game.yoshis = game.yoshis.sub(upgradeCosts[6])
    game.upgradesBought[6] = true
  }
  else if (x==8 && game.yoshis.gte(upgradeCosts[7]) && game.upgradesBought[7] != true) {
    game.yoshis = game.yoshis.sub(upgradeCosts[7])
    game.upgradesBought[7] = true
  }
  else if (x==9 && game.yoshis.gte(upgradeCosts[8]) && game.upgradesBought[8] != true) {
    game.yoshis = game.yoshis.sub(upgradeCosts[8])
    game.upgradesBought[8] = true
  }
}

function buyMaxUpgrades() {
  if (document.getElementById("RnDDiv").style.display == "grid") {
    for (i=1; i<10; i++) {
      buyUpgrade(i)
    }
  }
}

function takeOverWorld() {
  if (game.yoshis.gte(1e10)) {
    game.yoshis = game.yoshis.sub(1e10)
    game.unlocksBought++
    document.getElementById("takeOverWorldButton").style.display = "none"
    if (game.totalTachyons.lte(0) && game.alterationsUnlocked == false) {
      messageType = 1
      document.getElementById("cover").style.display = "block"
      setTimeout(function() {document.getElementById("cover").style.opacity = "1"}, 100)
      setTimeout(dialogOpen, 1500)
    }
  }
}

function unlockCapitalism() {
  if (game.yoshis.gte(1e125)) {
    game.yoshis = game.yoshis.sub(1e125)
    game.unlocksBought++
    document.getElementById("unlockCapitalismButton").style.display = "none"
    game.capitalismUnlocked = true
    setInterval(evadeTaxes, 500)
    messageType = 3
    document.getElementById("cover").style.display = "block"
    setTimeout(function() {document.getElementById("cover").style.opacity = "1"}, 100)
    setTimeout(dialogOpen, 1500)
  }
}

function unlockBlessings() {
  if (game.yoshis.gte("1e1010000")) {
    game.yoshis = game.yoshis.sub("1e1010000")
    game.unlocksBought++
    document.getElementById("unlockBlessingsButton").style.display = "none"
    game.blessingsUnlocked = true
    document.getElementsByClassName("topBarTab")[3].style.display = "inline-block"
  }
}

function unlockAlterations() {
  if (game.yoshis.gte("1e1e15")) {
    game.unlocksBought++
    document.getElementById("unlockAlterationsButton").style.display = "none"
    game.alterationsUnlocked = true
    messageType = 4
    document.getElementById("cover").style.display = "block"
    setTimeout(function() {document.getElementById("cover").style.opacity = "1"}, 100)
    setTimeout(dialogOpen, 1500)
  }
}