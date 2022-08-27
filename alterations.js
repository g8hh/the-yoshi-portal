function alterationReset() {
  game.tachyons = game.tachyons.add(tachyonsToGet)
  game.totalTachyons = game.totalTachyons.add(tachyonsToGet)
  game.yoshis = new OmegaNum(0),
  game.yoshisPerSecond = new OmegaNum(0)
  game.yoshisPerClick = new OmegaNum(1)
  game.automators = new OmegaNum(0)
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
  document.getElementsByClassName("upgrade")[6].style.display = "none"
  document.getElementsByClassName("upgrade")[7].style.display = "none"
  document.getElementsByClassName("upgrade")[8].style.display = "none"
  document.getElementById("yoshisPerClickText").style.display = "none"
  document.getElementById("automatorsDiv").style.display = "none"
  document.getElementById("unlockAutomatorButton").style.display = "block"
  document.getElementById("unlockRnDButton").style.display = "none"
  document.getElementById("autobuyButton").style.display = "none"
  document.getElementById("RnDDiv").style.display = "none"
  document.getElementById("RnDDivText").style.display = "none"
  document.getElementById("takeOverWorldButton").style.display = "none"
  document.getElementById("unlockCapitalismButton").style.display = "none"
  document.getElementById("buyMaxUpgradesButton").style.display = "none"
  game.tachyons = new OmegaNum(0)
  game.totalTachyons = new OmegaNum(0)
  game.tachyonUpgradesBought = [false, false, false, false, true, false, false, true, false, false, false, true, false, false, true]
  game.capitalismUnlocked = false
  game.money = new OmegaNum(0)
  game.taxesEvaded = new OmegaNum(0)
  game.capitalismMoneyBought = new OmegaNum(0)
  game.capitalismMoneyCost = new OmegaNum(3000)
  game.capitalismYoshisBought = new OmegaNum(0)
  game.capitalismYoshisCost = new OmegaNum(50000)
  game.capitalismTachyonsBought = new OmegaNum(0)
  game.capitalismTachyonsCost = new OmegaNum(150000)
  game.capitalismMaxBought = new OmegaNum(0)
  game.capitalismMaxCost = new OmegaNum(1e26)
  game.capitalismMax = new OmegaNum(1e18)
  game.capitalismUpgradesBought = [false, false, true, false, false, false, false, false, false, true]
  game.blessingTime = new OmegaNum(0)
}

function changeAlterationSrc(x) {
  document.getElementsByClassName("alterationMainImage")[0].style.display = "none"
  document.getElementsByClassName("alterationMainImage")[1].style.display = "none"
  document.getElementsByClassName("alterationMainImage")[2].style.display = "none"
  document.getElementsByClassName("alterationMainImage")[3].style.display = "none"
  document.getElementsByClassName("alterationMainImage")[4].style.display = "none"
  if (x>0) {
    document.getElementsByClassName("alterationMainImage")[x].style.display = "block"
  }
  else {
    document.getElementsByClassName("alterationMainImage")[game.currentAlteration].style.display = "block"
  }
  switch (x) {
    case 0:
      document.getElementById("alterationName").innerHTML = ""
      document.getElementById("alterationInfo").innerHTML = ""
      break
    case 1:
      document.getElementById("alterationName").innerHTML = "Spirit Phone [" + romanNumerals[game.alterationsBeaten[0]] +"]"
      if (game.alterationUpgradesBought[1] == true) {
        document.getElementById("alterationInfo").innerHTML = "Each bought tachyon upgrade square roots Yoshi gain<br>Goal: " + format(alterationRequirements[0][game.alterationsBeaten[0]].pow(0.5), 3) + " Yoshis<br>Reward: Increases tachyon upgrade 1 hardcap and scaling"
      }
      else {
        document.getElementById("alterationInfo").innerHTML = "Each bought tachyon upgrade square roots Yoshi gain<br>Goal: " + format(alterationRequirements[0][game.alterationsBeaten[0]], 3) + " Yoshis<br>Reward: Increases tachyon upgrade 1 hardcap and scaling"
      }
      break
    case 2:
      document.getElementById("alterationName").innerHTML = "1991 [" + romanNumerals[game.alterationsBeaten[1]] +"]"
      document.getElementById("alterationInfo").innerHTML = "Money gain is always 0<br>Goal: " + format(alterationRequirements[1][game.alterationsBeaten[1]], 3) + " Yoshis<br>Reward: Money boosts tachyon gain<br>(Currently x^<span id='alteration2Boost'>1.00</span>)"
      break
    case 3:
      document.getElementById("alterationName").innerHTML = "Godot [" + romanNumerals[game.alterationsBeaten[2]] +"]"
      document.getElementById("alterationInfo").innerHTML = "Yoshi, tachyon and money gain is severely decreased<br>Goal: " + format(alterationRequirements[2][game.alterationsBeaten[2]], 3) + " Yoshis<br>Reward: Increases Blue blessing hardcap"
      break
    case 4:
      document.getElementById("alterationName").innerHTML = "Block Game [" + romanNumerals[game.alterationsBeaten[3]] +"]"
      document.getElementById("alterationInfo").innerHTML = "Blessings have no effect<br>Goal: " + format(alterationRequirements[3][game.alterationsBeaten[3]], 3) + " Yoshis<br>Reward: Blessing time decreases slower and increases faster"
      break
    default:
      document.getElementById("alterationName").innerHTML = ""
      document.getElementById("alterationInfo").innerHTML = ""
      break
  }
}

function startAlteration(x) {
  if (confirm("Are you sure you want to start an alteration?")) {
    alterationReset()
    game.currentAlteration = x
    document.getElementById("endAlterationButton").style.display = "block"
    if (x==1) {
      document.getElementById("currentAlterationInfo").innerHTML = "Current alteration:<br>Spirit Phone [" + romanNumerals[game.alterationsBeaten[0]] +"] "
    }
    else if (x==2) {
      document.getElementById("currentAlterationInfo").innerHTML = "Current alteration:<br>1991 [" + romanNumerals[game.alterationsBeaten[1]] +"] "
    }
    else if (x==3) {
      document.getElementById("currentAlterationInfo").innerHTML = "Current alteration:<br>Godot [" + romanNumerals[game.alterationsBeaten[2]] +"] "
    }
    else if (x==4) {
      document.getElementById("currentAlterationInfo").innerHTML = "Current alteration:<br>Block Game [" + romanNumerals[game.alterationsBeaten[3]] +"] "
    }
  }
}

function endAlteration() {
  if (confirm("Are you sure you want to end this alteration?")) {
    alterationReset()
    game.currentAlteration = 0
    document.getElementById("endAlterationButton").style.display = "none"
    document.getElementById("currentAlterationInfo").innerHTML = "Current alteration:<br>None"
    document.getElementsByClassName("alterationMainImage")[0].style.display = "block"
    document.getElementsByClassName("alterationMainImage")[1].style.display = "none"
    document.getElementsByClassName("alterationMainImage")[2].style.display = "none"
    document.getElementsByClassName("alterationMainImage")[3].style.display = "none"
    document.getElementsByClassName("alterationMainImage")[4].style.display = "none"
  }
}

function completeAlteration() {
  game.alterationsBeaten[game.currentAlteration - 1]++
  alterationReset()
  game.currentAlteration = 0
  document.getElementById("endAlterationButton").style.display = "none"
  document.getElementById("completeAlterationButton").style.display = "none"
  document.getElementById("currentAlterationInfo").innerHTML = "Current alteration:<br>None"
  document.getElementsByClassName("alterationMainImage")[0].style.display = "block"
  document.getElementsByClassName("alterationMainImage")[1].style.display = "none"
  document.getElementsByClassName("alterationMainImage")[2].style.display = "none"
  document.getElementsByClassName("alterationMainImage")[3].style.display = "none"
  document.getElementsByClassName("alterationMainImage")[4].style.display = "none"
}

function buyAlterationUpgrade(x) {
  if (x==1 && game.yoshis.gte(alterationUpgradeCosts[0]) && game.alterationUpgradesBought[0] != true) {
    game.yoshis = game.yoshis.sub(alterationUpgradeCosts[0])
    game.alterationUpgradesBought[0] = true
    setInterval(buyCapitalismMoney, 1000)
    setInterval(buyCapitalismYoshis, 1000)
    setInterval(buyCapitalismTachyons, 1000)
    setInterval(buyCapitalismMax, 1000)
  }
  else if (x==2 && game.yoshis.gte(alterationUpgradeCosts[1]) && game.alterationUpgradesBought[1] != true) {
    game.yoshis = game.yoshis.sub(alterationUpgradeCosts[1])
    game.alterationUpgradesBought[1] = true
  }
  else if (x==3 && game.yoshis.gte(alterationUpgradeCosts[2]) && game.alterationUpgradesBought[2] != true) {
    game.yoshis = game.yoshis.sub(alterationUpgradeCosts[2])
    game.alterationUpgradesBought[2] = true
    messageType = 5
    document.getElementById("cover").style.display = "block"
    setTimeout(function() {document.getElementById("cover").style.opacity = "1"}, 100)
    setTimeout(dialogOpen, 1500)
  }
}