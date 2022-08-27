function rewindTime() {
  if (tachyonsToGet.gte(1)) {
    if (game.totalTachyons.equal(0) && game.alterationsUnlocked == false) {
      messageType = 2
      document.getElementById("cover").style.display = "block"
      setTimeout(function() {document.getElementById("cover").style.opacity = "1"}, 100)
      setTimeout(dialogOpen, 1500)
    }
    game.tachyons = game.tachyons.add(tachyonsToGet)
    game.totalTachyons = game.totalTachyons.add(tachyonsToGet)
    game.yoshis = new OmegaNum(0),
    game.yoshisPerSecond = new OmegaNum(0)
    game.yoshisPerClick = new OmegaNum(1)
    if (game.tachyonUpgradesBought[9]) game.automators = new OmegaNum(1)
    else game.automators = new OmegaNum(0)
    game.automatorCost = new OmegaNum(0)
    game.freeAutomators = new OmegaNum(0)
    game.automatorDoubles = new OmegaNum(0)
    game.automatorDoubleCost = new OmegaNum(0)
    game.unlocksBought = 0
    game.upgradesBought = [false, false, false, false, false, false, false, false, false]
    if (autobuyInterval !== undefined) {
      clearInterval(autobuyInterval)
    }
    document.getElementsByClassName("upgrade")[3].style.display = "none"
    document.getElementsByClassName("upgrade")[4].style.display = "none"
    document.getElementsByClassName("upgrade")[5].style.display = "none"
    document.getElementById("yoshisPerClickText").style.display = "none"
    if (game.tachyonUpgradesBought[2] == false) {
      document.getElementById("automatorsDiv").style.display = "none"
      document.getElementById("unlockAutomatorButton").style.display = "block"
      document.getElementById("unlockRnDButton").style.display = "none"
    }
    else {
      document.getElementById("unlockAutomatorButton").style.display = "none"
      document.getElementById("unlockRnDButton").style.display = "block"
      game.unlocksBought++
    }
    document.getElementById("autobuyButton").style.display = "none"
    document.getElementById("RnDDiv").style.display = "none"
    document.getElementById("RnDDivText").style.display = "none"
    document.getElementById("takeOverWorldButton").style.display = "none"
    document.getElementById("unlockCapitalismButton").style.display = "none"
  }
}

function buyTachyonUpgrade(x) {
  if (x==1 && game.tachyons.gte(tachyonUpgradeCosts[0]) && game.tachyonUpgradesBought[0] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[0])
    game.tachyonUpgradesBought[0] = true
  }
  else if (x==2 && game.tachyons.gte(tachyonUpgradeCosts[1]) && game.tachyonUpgradesBought[1] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[1])
    game.tachyonUpgradesBought[1] = true
  }
  else if (x==3 && game.tachyons.gte(tachyonUpgradeCosts[2]) && game.tachyonUpgradesBought[2] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[2])
    game.tachyonUpgradesBought[2] = true
  }
  else if (x==4 && game.tachyons.gte(tachyonUpgradeCosts[3]) && game.tachyonUpgradesBought[3] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[3])
    game.tachyonUpgradesBought[3] = true
    document.getElementsByClassName("upgrade")[6].style.display = "block"
    document.getElementsByClassName("upgrade")[7].style.display = "block"
    document.getElementsByClassName("upgrade")[8].style.display = "block"
  }
  else if (x==5 && game.tachyons.gte(tachyonUpgradeCosts[4]) && game.tachyonUpgradesBought[4] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[4])
    game.tachyonUpgradesBought[4] = true
    document.getElementsByClassName("tachyonUpgrade")[5].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[6].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[7].style.display = "block"
  }
  else if (x==6 && game.tachyons.gte(tachyonUpgradeCosts[5]) && game.tachyonUpgradesBought[5] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[5])
    game.tachyonUpgradesBought[5] = true
  }
  else if (x==7 && game.tachyons.gte(tachyonUpgradeCosts[6]) && game.tachyonUpgradesBought[6] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[6])
    game.tachyonUpgradesBought[6] = true
  }
  else if (x==8 && game.tachyons.gte(tachyonUpgradeCosts[7]) && game.tachyonUpgradesBought[7] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[7])
    game.tachyonUpgradesBought[7] = true
    if (game.unlocksBought > 2 && game.capitalismUnlocked == false && game.alterationsUnlocked == false) {
      document.getElementById("unlockCapitalismButton").style.display = "block"
    }
    else if (game.capitalismUnlocked) {
      game.unlocksBought++
    }
  }
  else if (x==9 && game.tachyons.gte(tachyonUpgradeCosts[8]) && game.tachyonUpgradesBought[8] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[8])
    game.tachyonUpgradesBought[8] = true
    document.getElementById("buyMaxUpgradesButton").style.display = "block"
  }
  else if (x==10 && game.tachyons.gte(tachyonUpgradeCosts[9]) && game.tachyonUpgradesBought[9] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[9])
    game.tachyonUpgradesBought[9] = true
  }
  else if (x==11 && game.tachyons.gte(tachyonUpgradeCosts[10]) && game.tachyonUpgradesBought[10] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[10])
    game.tachyonUpgradesBought[10] = true
  }
  else if (x==12 && game.tachyons.gte(tachyonUpgradeCosts[11]) && game.tachyonUpgradesBought[11] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[11])
    game.tachyonUpgradesBought[11] = true
    document.getElementById("unlockBlessingsButton").style.display = "block"
  }
  else if (x==13 && game.tachyons.gte(tachyonUpgradeCosts[12]) && game.tachyonUpgradesBought[12] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[12])
    game.tachyonUpgradesBought[12] = true
  }
  else if (x==14 && game.tachyons.gte(tachyonUpgradeCosts[13]) && game.tachyonUpgradesBought[13] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[13])
    game.tachyonUpgradesBought[13] = true
  }
  else if (x==15 && game.tachyons.gte(tachyonUpgradeCosts[14]) && game.tachyonUpgradesBought[14] != true) {
    game.tachyons = game.tachyons.sub(tachyonUpgradeCosts[14])
    game.tachyonUpgradesBought[14] = true
    document.getElementById("unlockAlterationsButton").style.display = "block"
  }
}

function tachyonsPerSecond() {
  if (game.tachyonUpgradesBought[10]) {
    game.tachyons = game.tachyons.add(tachyonsToGet.div(20))
    game.totalTachyons = game.totalTachyons.add(tachyonsToGet.div(20))
  }
}

setInterval(tachyonsPerSecond, 50)