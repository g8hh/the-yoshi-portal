function reset() {
	game = {
    gameStarted: false,
    autosaveEnabled: true,

    yoshis: new OmegaNum(0),
    yoshisPerSecond: new OmegaNum(0),
    yoshisPerClick: new OmegaNum(1),
    automators: new OmegaNum(0),
    automatorCost: new OmegaNum(0),
    freeAutomators: new OmegaNum(0),
    automatorDoubles: new OmegaNum(0),
    automatorDoubleCost: new OmegaNum(0),
    unlocksBought: 0,
    upgradesBought: [false, false, false, false, false, false, false, false, false],
    autobuyEnabled: true,

    tachyons: new OmegaNum(0),
    totalTachyons: new OmegaNum(0),
    tachyonUpgradesBought: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],

    capitalismUnlocked: false,
    money: new OmegaNum(0),
    taxesEvaded: new OmegaNum(0),
    capitalismMoneyBought: new OmegaNum(0),
    capitalismMoneyCost: new OmegaNum(3000),
    capitalismYoshisBought: new OmegaNum(0),
    capitalismYoshisCost: new OmegaNum(50000),
    capitalismTachyonsBought: new OmegaNum(0),
    capitalismTachyonsCost: new OmegaNum(150000),
    capitalismMaxBought: new OmegaNum(0),
    capitalismMaxCost: new OmegaNum(1e26),
    capitalismMax: new OmegaNum(1e18),
    capitalismUpgradesBought: [false, false, false, false, false, false, false, false, false, false],

    blessingsUnlocked: false,
    blessingsEnabled: 1,
    activeBlessings: [],
    maxBlessings: 1,
    blessingTime: new OmegaNum(0),
    lightCoins: 0,
    totalLightCoins: 0,
    blessingUpgradesBought: [],
    blessingUpgrade4Bought: false,
    blessingBoost4: new OmegaNum(1),
    blessingBoost5: new OmegaNum(1),
    blessingBoost6: new OmegaNum(1),
    blessingBoost7: new OmegaNum(1),

    alterationsUnlocked: false,
    currentAlteration: 0,
    alterationsBeaten: [0, 0, 0, 0],
    alterationUpgradesBought: [false, false],
  }

  autobuyInterval = null
  currentTab = 1

  //Constants
  upgradeCosts = [100000, 500000, 4e6, 7.5e6, 3e7, 2.5e8, 2e15, 3e17, 1e24]
  tachyonUpgradeCosts = [1, 1, 2, 4, 10, 10, 50, 250, 6000, 15000, 60000, 5e9, 5e21, 1e23, 1e37]
  capitalismUpgradeCosts = [5e6, 7.5e8, 6e10, 1e12, 2.5e12, 2e14, 1.5e16, 1e26, 1e29, 1e34]
  alterationUpgradeCosts = [ExpantaNum("1e1.02e15"), ExpantaNum("1e1.025e15"), ExpantaNum("1e1.03e15")]
  lightCoinRequirements = [new OmegaNum("1e2.2e6"), new OmegaNum("1e7e6"), new OmegaNum("1e8.5e7"), new OmegaNum("1e1.1e8"), new OmegaNum("1e1.4e8"), new OmegaNum("1e2.5e8"), new OmegaNum("1e4.5e8"), new OmegaNum("1e6e8"), new OmegaNum("1e9e8"), new OmegaNum("1e2.5e9"), new OmegaNum("1e1e11"), new OmegaNum("1e1e15"), new OmegaNum(Infinity)]
  romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", 'X']
  alterationRequirements = [[new OmegaNum("1e51500000"), new OmegaNum("1e1.04e8"), new OmegaNum("1e1e16")],
  [new OmegaNum("1e85000000"), new OmegaNum("1e85500000"), new OmegaNum("1e1e16")],
  [new OmegaNum("1e3400000"), new OmegaNum("1e3900000"), new OmegaNum("1e1e16")],
  [new OmegaNum("1e5250000"), new OmegaNum("1e58000000"), new OmegaNum("1e1e16")]]
}

function hardReset() {
  if (confirm("Are you SURE you want to hard reset? You will lose everything!")) {
    reset()
    save()
    location.reload()
  }
}

function save() {
  if (document.getElementById("cover").style.display == "none") {
	  localStorage.setItem("yoshiPortalSave", JSON.stringify(game))
  }
}

function autosave() {
  if (game.autosaveEnabled) localStorage.setItem("yoshiPortalSave", JSON.stringify(game))
}

setInterval(autosave, 5000)

function exportGame() {
  save()
  navigator.clipboard.writeText(btoa(JSON.stringify(game))).then(function() {
    alert("Copied to clipboard!")
  }, function() {
    alert("Error copying to clipboard, try again...")
  });
}

function importGame() {
  loadgame = JSON.parse(atob(prompt("Input your save here:")))
  if (loadgame && loadgame != null && loadgame != "") {
    reset()
    loadGame(loadgame)
  }
  else {
    alert("Invalid input.")
  }
}

function load() {
	reset()
	let loadgame = JSON.parse(localStorage.getItem("yoshiPortalSave"))
	if (loadgame != null) {
		loadGame(loadgame)
	}
}

load()

function loadGame(loadgame) {
  //Sets each variable in 'game' to the equivalent variable in 'loadgame' (the saved file)
  if (typeof loadgame.gameStarted != "undefined") game.gameStarted = loadgame.gameStarted
  if (typeof loadgame.autosaveEnabled != "undefined") game.autosaveEnabled = loadgame.autosaveEnabled
	if (typeof loadgame.yoshis != "undefined") game.yoshis = new OmegaNum(loadgame.yoshis)
  if (typeof loadgame.yoshisPerSecond != "undefined") game.yoshisPerSecond = new OmegaNum(loadgame.yoshisPerSecond)
  if (typeof loadgame.yoshisPerClick != "undefined") game.yoshisPerClick = new OmegaNum(loadgame.yoshisPerClick)
  if (typeof loadgame.automators != "undefined") game.automators = new OmegaNum(loadgame.automators)
  if (typeof loadgame.automatorCost != "undefined") game.automatorCost = new OmegaNum(loadgame.automatorCost)
  if (typeof loadgame.freeAutomators != "undefined") game.freeAutomators = new OmegaNum(loadgame.freeAutomators)
  if (typeof loadgame.automatorDoubles != "undefined") game.automatorDoubles = new OmegaNum(loadgame.automatorDoubles)
  if (typeof loadgame.automatorDoubleCost != "undefined") game.automatorDoubleCost = new OmegaNum(loadgame.automatorDoubleCost)
  if (typeof loadgame.unlocksBought != "undefined") game.unlocksBought = loadgame.unlocksBought
  if (typeof loadgame.upgradesBought != "undefined") game.upgradesBought = loadgame.upgradesBought
  if (typeof loadgame.autobuyEnabled != "undefined") game.autobuyEnabled = loadgame.autobuyEnabled
  if (typeof loadgame.tachyons != "undefined") game.tachyons = new OmegaNum(loadgame.tachyons)
  if (typeof loadgame.totalTachyons != "undefined") game.totalTachyons = new OmegaNum(loadgame.totalTachyons)
  if (typeof loadgame.tachyonUpgradesBought != "undefined") game.tachyonUpgradesBought = loadgame.tachyonUpgradesBought
  if (typeof loadgame.capitalismUnlocked != "undefined") game.capitalismUnlocked = loadgame.capitalismUnlocked
  if (typeof loadgame.taxesEvaded != "undefined") game.taxesEvaded = new OmegaNum(loadgame.taxesEvaded)
  if (typeof loadgame.money != "undefined") game.money = new OmegaNum(loadgame.money)
  if (typeof loadgame.capitalismMoneyBought != "undefined") game.capitalismMoneyBought = new OmegaNum(loadgame.capitalismMoneyBought)
  if (typeof loadgame.capitalismMoneyCost != "undefined") game.capitalismMoneyCost = new OmegaNum(loadgame.capitalismMoneyCost)
  if (typeof loadgame.capitalismYoshisBought != "undefined") game.capitalismYoshisBought = new OmegaNum(loadgame.capitalismYoshisBought)
  if (typeof loadgame.capitalismYoshisCost != "undefined") game.capitalismYoshisCost = new OmegaNum(loadgame.capitalismYoshisCost)
  if (typeof loadgame.capitalismTachyonsBought != "undefined") game.capitalismTachyonsBought = new OmegaNum(loadgame.capitalismTachyonsBought)
  if (typeof loadgame.capitalismTachyonsCost != "undefined") game.capitalismTachyonsCost = new OmegaNum(loadgame.capitalismTachyonsCost)
  if (typeof loadgame.capitalismMaxBought != "undefined") game.capitalismMaxBought = new OmegaNum(loadgame.capitalismMaxBought)
  if (typeof loadgame.capitalismMaxCost != "undefined") game.capitalismMaxCost = new OmegaNum(loadgame.capitalismMaxCost)
  if (typeof loadgame.capitalismMax != "undefined") game.capitalismMax = new OmegaNum(loadgame.capitalismMax)
  if (typeof loadgame.capitalismUpgradesBought != "undefined") game.capitalismUpgradesBought = loadgame.capitalismUpgradesBought
  if (typeof loadgame.blessingsUnlocked != "undefined") game.blessingsUnlocked = loadgame.blessingsUnlocked
  if (typeof loadgame.blessingsEnabled != "undefined") game.blessingsEnabled = loadgame.blessingsEnabled
  if (typeof loadgame.activeBlessings != "undefined") game.activeBlessings = loadgame.activeBlessings
  if (typeof loadgame.maxBlessings != "undefined") game.maxBlessings = loadgame.maxBlessings
  if (typeof loadgame.blessingTime != "undefined") game.blessingTime = new OmegaNum(loadgame.blessingTime)
  if (typeof loadgame.lightCoins != "undefined") game.lightCoins = loadgame.lightCoins
  if (typeof loadgame.totalLightCoins != "undefined") game.totalLightCoins = loadgame.totalLightCoins
  if (typeof loadgame.blessingUpgradesBought != "undefined") game.blessingUpgradesBought = loadgame.blessingUpgradesBought
  if (typeof loadgame.blessingUpgrade4Bought != "undefined") game.blessingUpgrade4Bought = loadgame.blessingUpgrade4Bought
  if (typeof loadgame.blessingBoost4 != "undefined") game.blessingBoost4 = new OmegaNum(loadgame.blessingBoost4)
  if (typeof loadgame.blessingBoost5 != "undefined") game.blessingBoost5 = new OmegaNum(loadgame.blessingBoost5)
  if (typeof loadgame.blessingBoost6 != "undefined") game.blessingBoost6 = new OmegaNum(loadgame.blessingBoost6)
  if (typeof loadgame.blessingBoost7 != "undefined") game.blessingBoost7 = new OmegaNum(loadgame.blessingBoost7)
  if (typeof loadgame.alterationsUnlocked != "undefined") game.alterationsUnlocked = loadgame.alterationsUnlocked
  if (typeof loadgame.currentAlteration != "undefined") game.currentAlteration = loadgame.currentAlteration
  if (typeof loadgame.alterationsBeaten != "undefined") game.alterationsBeaten = loadgame.alterationsBeaten
  if (typeof loadgame.alterationUpgradesBought != "undefined") game.alterationUpgradesBought = loadgame.alterationUpgradesBought

  //Shows and edits buttons based on progress when loading
  if (game.gameStarted) {
    document.getElementById("yoshiIcon").style.display = "none"
    document.getElementById("skipText").style.display = "none"
    document.getElementById("dialog").innerHTML = ""
    currentCharacters = 0
    currentMessage = 0
    document.getElementById("dialogBox").style.opacity = "0"
    document.getElementById("dialogBox").style.width = "0"
    document.getElementById("dialogBox").style.height = "0"
    document.getElementById("cover").style.opacity = "0"
    document.getElementById("cover").style.display = "none"
  }
  if (game.autosaveEnabled == false) {
    document.getElementById("autosaveState").innerHTML = "Enable autosave"
  }
  if (game.autobuyEnabled == false) {
    document.getElementById("autobuyButton").innerHTML = "Turn autobuy on"
  }
  if (game.unlocksBought > 0) {
    document.getElementById("unlockAutomatorButton").style.display = "none"
    document.getElementById("unlockRnDButton").style.display = "block"
    document.getElementById("automatorsDiv").style.display = "block"
  }
  if (game.unlocksBought > 1) {
    document.getElementById("unlockRnDButton").style.display = "none"
    document.getElementById("takeOverWorldButton").style.display = "block"
    document.getElementById("RnDDiv").style.display = "grid"
    document.getElementById("RnDDivText").style.display = "block"
  }
  if (game.unlocksBought > 2 || game.totalTachyons.gte(1)) {
    document.getElementById("takeOverWorldButton").style.display = "none"
    document.getElementsByClassName("topBarTab")[1].style.display = "inline-block"
  }
  if (game.upgradesBought[2]) {
    document.getElementsByClassName("upgrade")[3].style.display = "block"
    document.getElementsByClassName("upgrade")[4].style.display = "block"
    document.getElementsByClassName("upgrade")[5].style.display = "block"
  }
  if (game.upgradesBought[3]) {
    document.getElementById("yoshisPerClickText").style.display = "block"
  }
  if (game.upgradesBought[5]) {
    autobuyInterval = setInterval(autobuy, 50)
    document.getElementById("autobuyButton").style.display = "block"
  }
  if (game.tachyonUpgradesBought[3]) {
    document.getElementsByClassName("upgrade")[6].style.display = "block"
    document.getElementsByClassName("upgrade")[7].style.display = "block"
    document.getElementsByClassName("upgrade")[8].style.display = "block"
  }
  if (game.tachyonUpgradesBought[4]) {
    document.getElementsByClassName("tachyonUpgrade")[5].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[6].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[7].style.display = "block"
  }
  if (game.tachyonUpgradesBought[7]) {
    if (game.unlocksBought > 2 && game.capitalismUnlocked == false && game.alterationsUnlocked == false) {
      document.getElementById("unlockCapitalismButton").style.display = "block"
    }
  }
  if (game.tachyonUpgradesBought[8]) {
    document.getElementById("buyMaxUpgradesButton").style.display = "block"
  }
  if (game.capitalismUnlocked || game.alterationsUnlocked == true) {
    document.getElementById("unlockCapitalismButton").style.display = "none"
    document.getElementsByClassName("topBarTab")[2].style.display = "inline-block"
    setInterval(evadeTaxes, 500)
  }
  if (game.capitalismUpgradesBought[2]) {
    document.getElementsByClassName("tachyonUpgrade")[8].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[9].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[10].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[11].style.display = "block"
  }
  if (game.capitalismUpgradesBought[9]) {
    document.getElementsByClassName("tachyonUpgrade")[12].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[13].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[14].style.display = "block"
  }
  if (game.tachyonUpgradesBought[11]) {
    if (game.unlocksBought > 3 && game.blessingsUnlocked == false) {
      document.getElementById("unlockBlessingsButton").style.display = "block"
    }
  }
  if (game.blessingsUnlocked) {
    document.getElementById("unlockBlessingsButton").style.display = "none"
    document.getElementsByClassName("topBarTab")[3].style.display = "inline-block"
  }
  for (i=1;i<8;i++) {
    if (game.activeBlessings.includes(i)) document.getElementsByClassName("blessing")[i-1].style.border = "0.3vw solid white"
  }
  if (game.blessingUpgrade4Bought) {
    document.getElementsByClassName("capitalismButton")[3].style.display = "block"
    document.getElementsByClassName("capitalismUpgrade")[7].style.display = "block"
    document.getElementsByClassName("capitalismUpgrade")[8].style.display = "block"
    document.getElementsByClassName("capitalismUpgrade")[9].style.display = "block"
  }
  if (game.tachyonUpgradesBought[14]) {
    if (game.unlocksBought > 4 && game.alterationsUnlocked == false) {
      document.getElementById("unlockAlterationsButton").style.display = "block"
    }
  }
  if (game.alterationsUnlocked) {
    document.getElementById("unlockAlterationsButton").style.display = "none"
    document.getElementsByClassName("topBarTab")[4].style.display = "inline-block"
    document.getElementsByClassName("alterationMainImage")[0].style.display = "none"
    document.getElementsByClassName("alterationMainImage")[1].style.display = "none"
    document.getElementsByClassName("alterationMainImage")[2].style.display = "none"
    document.getElementsByClassName("alterationMainImage")[3].style.display = "none"
    document.getElementsByClassName("alterationMainImage")[4].style.display = "none"
    document.getElementsByClassName("alterationMainImage")[game.currentAlteration].style.display = "block"
  }
  if (game.currentAlteration == 1) {
    document.getElementById("endAlterationButton").style.display = "block"
    document.getElementById("currentAlterationInfo").innerHTML = "Current alteration:<br>Spirit Phone [" + romanNumerals[game.alterationsBeaten[0]] +"] "
  }
  else if (game.currentAlteration == 2) {
    document.getElementById("endAlterationButton").style.display = "block"
    document.getElementById("currentAlterationInfo").innerHTML = "Current alteration:<br>1991 [" + romanNumerals[game.alterationsBeaten[1]] +"] "
  }
  else if (game.currentAlteration == 3) {
    document.getElementById("endAlterationButton").style.display = "block"
    document.getElementById("currentAlterationInfo").innerHTML = "Current alteration:<br>Godot [" + romanNumerals[game.alterationsBeaten[2]] +"] "
  }
  else if (game.currentAlteration == 4) {
    document.getElementById("endAlterationButton").style.display = "block"
    document.getElementById("currentAlterationInfo").innerHTML = "Current alteration:<br>Block Game [" + romanNumerals[game.alterationsBeaten[3]] +"] "
  }
  else {
    document.getElementById("endAlterationButton").style.display = "none"
    document.getElementById("currentAlterationInfo").innerHTML = "Current alteration:<br>None"
  }
  if (game.alterationUpgradesBought[0]) {
    setInterval(buyCapitalismMoney, 1000)
    setInterval(buyCapitalismYoshis, 1000)
    setInterval(buyCapitalismTachyons, 1000)
    setInterval(buyCapitalismMax, 1000)
  }
}

function updateSmall() {
  tachyonBoost = OmegaNum(5).pow(game.totalTachyons.sqrt()).pow(3 ** game.alterationsBeaten[0] + 5 * game.alterationsBeaten[0]).floor()
  if (tachyonBoost.gte(OmegaNum("1e1e8").pow(3 ** game.alterationsBeaten[0]))) {
    tachyonBoost = OmegaNum("1e1e8").pow(3 ** game.alterationsBeaten[0])
    document.getElementById("tachyonBoostHardcap").style.display = "inline-block"
  }
  else {document.getElementById("tachyonBoostHardcap").style.display = "none"}
  tachyonBoost2 = OmegaNum(300).pow(game.tachyons.pow(0.3)).floor()
  if (tachyonBoost2.gte("1e1e10")) {
    tachyonBoost2 = OmegaNum("1e1e10")
    document.getElementById("tachyonBoostHardcap2").style.display = "inline-block"
  }
  else {document.getElementById("tachyonBoostHardcap2").style.display = "none"}
  capitalismYoshiBoost = OmegaNum(1.08).pow(game.capitalismYoshisBought.sqrt())
  capitalismTachyonBoost = OmegaNum(1.2).pow(game.capitalismTachyonsBought.sqrt())
  if (game.currentAlteration == 4) {game.blessingsEnabled = 0}
  else {game.blessingsEnabled = 1}

  //CALCULATIONS FOR YOSHIS/SECOND
  game.yoshisPerSecond = new OmegaNum(2).pow(game.automatorDoubles).mul(game.automators.add(game.freeAutomators)).mul(5)
  if (game.upgradesBought[7]) game.yoshisPerSecond = game.yoshisPerSecond.mul(game.yoshis.add(1).log10().add(1))
  if (game.tachyonUpgradesBought[0]) game.yoshisPerSecond = game.yoshisPerSecond.mul(tachyonBoost)
  if (game.tachyonUpgradesBought[6]) game.yoshisPerSecond = game.yoshisPerSecond.mul(tachyonBoost2)
  game.yoshisPerSecond = game.yoshisPerSecond.pow(capitalismYoshiBoost)
  if (game.currentAlteration != 4) {game.yoshisPerSecond = game.yoshisPerSecond.pow(game.blessingBoost5.pow(game.blessingsEnabled))}
  if (game.capitalismUpgradesBought[3]) game.yoshisPerSecond = game.yoshisPerSecond.pow(1.4)
  if (game.capitalismUpgradesBought[5]) game.yoshisPerSecond = game.yoshisPerSecond.pow(game.money.add(10).log10().pow(0.1))
  if (game.activeBlessings.includes(1) && game.currentAlteration != 4) game.yoshisPerSecond = game.yoshisPerSecond.pow(OmegaNum(1).add(game.blessingTime.div(50).mul(game.blessingBoost6.pow(game.blessingsEnabled))))
  if (game.blessingUpgradesBought.includes(6)) game.yoshisPerSecond = game.yoshisPerSecond.mul("1e1e6")
  if (game.blessingUpgradesBought.includes(7)) game.yoshisPerSecond = game.yoshisPerSecond.pow(1.1 ** game.totalLightCoins)
  if (game.currentAlteration == 1) {
    for (i=0; i<game.tachyonUpgradesBought.length; i++) {
      if (game.tachyonUpgradesBought[i] == true) {game.yoshisPerSecond = game.yoshisPerSecond.pow(0.5)}
    }
  }
  if (game.currentAlteration == 3) {game.yoshisPerSecond = game.yoshisPerSecond.pow(0.1)}
  if (game.yoshisPerSecond.gte("1e1000")) {
    game.yoshisPerSecond = game.yoshisPerSecond.pow(0.5).mul("1e500")
    document.getElementById("yoshiSoftcapText").style.display = "block"
  }
  else {document.getElementById("yoshiSoftcapText").style.display = "none"}
  if (game.yoshisPerSecond.gte("1e1000000")) {
    game.yoshisPerSecond = game.yoshisPerSecond.pow(0.2).mul("1e800000")
    document.getElementById("yoshiSoftcapText2").style.display = "block"
  }
  else {document.getElementById("yoshiSoftcapText2").style.display = "none"}
  if (game.yoshisPerSecond.gte("1e5e7")) {
    game.yoshisPerSecond = game.yoshisPerSecond.pow(0.05).mul("1e4.8e7")
    document.getElementById("yoshiSoftcapText3").style.display = "block"
  }
  else {document.getElementById("yoshiSoftcapText3").style.display = "none"}
  if (game.yoshisPerSecond.gte("1e1e15")) {
    game.yoshisPerSecond = game.yoshisPerSecond.pow(0.05).mul("1e9.5e14")
    document.getElementById("yoshiSoftcapText4").style.display = "block"
  }
  else {document.getElementById("yoshiSoftcapText4").style.display = "none"}
  
  doublerPriceIncrease = new OmegaNum(3).sub(game.tachyonUpgradesBought[1] * 0.3)
  game.automatorCost = new OmegaNum(1.5).pow(game.automators).mul(20).floor()
  game.freeAutomators = game.automatorDoubles.mul(3 * game.upgradesBought[1] + 3 * game.upgradesBought[6] + 15 * game.upgradesBought[8])
  if (game.upgradesBought[3]) {game.yoshisPerClick = game.yoshisPerSecond.div(4).add(1)}
  game.automatorDoubleCost = doublerPriceIncrease.pow(game.automatorDoubles).mul(100).div(1 + game.upgradesBought[0] * 4).div(1 + game.upgradesBought[4] * 4).floor()

  //CALCULATIONS FOR TACHYON GAIN
  if (game.yoshis.gte(1e10)) {
    if (game.tachyonUpgradesBought[5]) {
      tachyonsToGet = game.yoshis.div(1e7).log10().pow(0.7).mul(capitalismTachyonBoost).div(2).mul(game.yoshis.log10().pow(0.4)).pow(1 + game.capitalismUpgradesBought[6] * 0.2)
    }
    else {
      tachyonsToGet = game.yoshis.div(1e7).log10().pow(0.7).mul(capitalismTachyonBoost).div(2).pow(1 + game.capitalismUpgradesBought[6] * 0.2)
    }
    if (game.currentAlteration == 3) {tachyonsToGet = tachyonsToGet.pow(0.1)}
    if (game.activeBlessings.includes(2) && game.currentAlteration != 4) tachyonsToGet = tachyonsToGet.pow(OmegaNum(1).add(game.blessingTime.mul(1 + game.blessingUpgradesBought.includes(2)).div(100)))
    if (game.blessingUpgradesBought.includes(9)) tachyonsToGet = tachyonsToGet.mul(3)
    if (game.tachyonUpgradesBought[13]) tachyonsToGet = tachyonsToGet.mul(20)
    tachyonsToGet = tachyonsToGet.pow(game.money.add(10).log10().pow(0.05).pow(game.alterationsBeaten[1]))
    tachyonsToGet = tachyonsToGet.floor()
  }
  else {
    tachyonsToGet = new OmegaNum(0)
  }

  //CALCULATIONS FOR MONEY GAIN
  if (game.currentAlteration != 2) {
    moneyToGain = OmegaNum(2).pow(game.capitalismMoneyBought).mul(game.yoshis.add(1).log10()).mul(1 + 9 * game.blessingUpgradesBought.includes(11)).floor()
    if (game.currentAlteration == 3) {moneyToGain = moneyToGain.pow(0.25)}
    if (game.capitalismUpgradesBought[0]) moneyToGain = moneyToGain.mul(game.money.add(10).log10().div(2))
    if (game.activeBlessings.includes(3) && game.currentAlteration != 4) moneyToGain = moneyToGain.pow(OmegaNum(1).add(game.blessingTime.div(100)))
    if (game.blessingUpgradesBought.includes(1)) moneyToGain = moneyToGain.pow(1 + 0.1 * game.lightCoins)
  }
  else {moneyToGain = OmegaNum(0)}
  game.capitalismMoneyCost = new OmegaNum(3).pow(game.capitalismMoneyBought).mul(3000).div(1 + game.capitalismUpgradesBought[1] * 4).div(1 + game.capitalismUpgradesBought[4] * 4)
  game.capitalismYoshisCost = new OmegaNum(4).pow(game.capitalismYoshisBought).mul(50000)
  game.capitalismTachyonsCost = new OmegaNum(4).pow(game.capitalismTachyonsBought).mul(150000)
  game.capitalismMaxCost = new OmegaNum(10).pow(game.capitalismMaxBought).mul(1e20)
  game.capitalismMax = new OmegaNum(10).pow(game.capitalismMaxBought).mul(1e18)

  if (game.activeBlessings.length == 0 && game.blessingsUnlocked && (game.blessingUpgradesBought.includes(4) == false || game.capitalismUpgradesBought[8] == true) && (game.blessingUpgradesBought.includes(11) == false || game.tachyonUpgradesBought[12] == true)) {
    blessingTimeToAdd = OmegaNum(0.06).mul(game.blessingBoost4.pow(game.blessingsEnabled)).mul(OmegaNum(0.8).pow(game.blessingTime))
    if (game.blessingUpgradesBought.includes(5)) blessingTimeToAdd = blessingTimeToAdd.mul(2)
    if (game.blessingUpgradesBought.includes(10)) blessingTimeToAdd = blessingTimeToAdd.mul(game.money.add(1).log10().div(13))
    blessingTimeToAdd = blessingTimeToAdd.mul(2 ** game.alterationsBeaten[3])
    game.blessingTime = game.blessingTime.add(blessingTimeToAdd)
  }
  else if (game.blessingTime.gt(0)) {
    game.blessingTime = game.blessingTime.sub(0.015 * 0.75 ** game.alterationsBeaten[3])
    if (game.blessingTime.lt(0)) game.blessingTime = new OmegaNum(0)
  }
  else {
    game.activeBlessings = []
    for (i=0; i<7; i++) {
      document.getElementsByClassName("blessing")[i].style.border = "0.3vw solid black"
    }
  }
  if (game.activeBlessings.includes(4)) game.blessingBoost4 = game.blessingBoost4.add(game.blessingTime.div(20000).div(game.blessingBoost4.pow(2)).mul(1 + 2 * game.blessingUpgradesBought.includes(8)).mul(1 + 2 * game.blessingUpgradesBought.includes(12)))
  if (game.activeBlessings.includes(5)) game.blessingBoost5 = game.blessingBoost5.add(game.tachyons.add(1).log10().div(50000).div(game.blessingBoost5.pow(2.5)).mul(1 + 3 * (game.capitalismUpgradesBought[7] == true)).mul(1 + 2 * game.blessingUpgradesBought.includes(12)))
  if (game.activeBlessings.includes(6)) game.blessingBoost6 = game.blessingBoost6.add(game.blessingTime.div(30000).div(game.blessingBoost6.pow(1.5)).mul(1 + 2 * game.blessingUpgradesBought.includes(4)).mul(1 + 2 * game.blessingUpgradesBought.includes(12)))
  if (game.activeBlessings.includes(7)) game.blessingBoost7 = game.blessingBoost7.add(game.blessingTime.div(25000).div(game.blessingBoost7.pow(5)).mul(1 + (game.capitalismUpgradesBought[7] == true)).mul(1 + 2 * game.blessingUpgradesBought.includes(12)))
  if (game.blessingBoost4.gt(6)) game.blessingBoost4 = OmegaNum(6)
  if (game.blessingBoost5.gt(4.5 + game.alterationsBeaten[2])) game.blessingBoost5 = OmegaNum(4.5 + game.alterationsBeaten[2])
  if (game.blessingBoost6.gt(7.5)) game.blessingBoost6 = OmegaNum(7.5)
  if (game.blessingBoost4.gte(6)) {$("#blessing4Hardcap").html("&nbsp;(hardcapped)")}
  else {$("#blessing4Hardcap").html("")}
  if (game.blessingBoost5.gte(4.5 + game.alterationsBeaten[2])) {$("#blessing5Hardcap").html("&nbsp;(hardcapped)")}
  else {$("#blessing5Hardcap").html("")}
  if (game.blessingBoost6.gte(7.5)) {$("#blessing6Hardcap").html("&nbsp;(hardcapped)")}
  else {$("#blessing6Hardcap").html("")}
  if (game.yoshis.gte(lightCoinRequirements[game.totalLightCoins].pow(OmegaNum(1).div(game.blessingBoost7.pow(game.blessingsEnabled))))) {
    game.lightCoins++
    game.totalLightCoins++
  }

  if (game.alterationUpgradesBought[1] == true && game.currentAlteration == 1) {
    if (game.yoshis.gte(alterationRequirements[0][game.alterationsBeaten[0]].pow(0.5))) {
      document.getElementById("completeAlterationButton").style.display = "block"
    }
    else {document.getElementById("completeAlterationButton").style.display = "none"}
  }
  else {
    if (game.currentAlteration > 0 && game.yoshis.gte(alterationRequirements[game.currentAlteration - 1][game.alterationsBeaten[game.currentAlteration - 1]])) {
      document.getElementById("completeAlterationButton").style.display = "block"
    }
    else {document.getElementById("completeAlterationButton").style.display = "none"}
  }

  $("#yoshis").html(format(game.yoshis, 0))
  $("#yoshis2").html(format(game.yoshis, 0))
  $("#yoshis3").html(format(game.yoshis, 0))
  $("#yoshisPerSecond").html(format(game.yoshisPerSecond, 0))
  $("#yoshisPerSecond2").html(format(game.yoshisPerSecond, 0))
  $("#yoshisPerClick").html(format(game.yoshisPerClick, 0))
  $("#automators").html(format(game.automators, 0))
  $("#automatorCost").html(format(game.automatorCost, 0))
  if (game.freeAutomators.gte(1)) {
    $("#freeAutomators").html(" (+" + format(game.freeAutomators, 0) + ")")
  }
  else {
    $("#freeAutomators").html("")
  }
  $("#automatorDoubleCost").html(format(game.automatorDoubleCost, 0))
  $("#tachyonsToGet").html(format(tachyonsToGet, 0))
  if (tachyonsToGet.eq(0)) {
    document.getElementById("rewindText").style.color = "#b0b0b0"
  }
  else {
    document.getElementById("rewindText").style.color = "white"
  }
  $("#tachyons").html(format(game.tachyons, 0))
  $("#totalTachyons").html(format(game.totalTachyons, 0))
  $("#tachyonBoost").html(format(tachyonBoost, 0))
  $("#tachyonBoost2").html(format(tachyonBoost2, 0))
  $("#taxesEvaded").html(format(game.taxesEvaded, 0))
  $("#money").html("$" + format(game.money, 0))
  $("#moneyToGain").html(format(moneyToGain.mul(2), 0))
  $("#capitalismMoneyCost").html(format(game.capitalismMoneyCost, 0))
  $("#capitalismYoshisCost").html(format(game.capitalismYoshisCost, 0))
  $("#capitalismYoshiBoost").html(format(capitalismYoshiBoost, 3))
  $("#capitalismTachyonsCost").html(format(game.capitalismTachyonsCost, 0))
   $("#capitalismMaxCost").html(format(game.capitalismMaxCost, 0))
  $("#capitalismTachyonBoost").html(format(capitalismTachyonBoost, 3))
  $("#moneySelfBoost").html(format(game.money.add(10).log10().div(2), 3))
  $("#moneyYoshiBoost").html(format(game.money.add(10).log10().pow(0.1), 3))
  $("#blessingTime").html(format(game.blessingTime, 2))
  $("#blessingBoost1").html(format(OmegaNum(1).add(game.blessingTime.div(50).mul(game.blessingBoost6.pow(game.blessingsEnabled))).pow(game.blessingsEnabled), 2))
  $("#blessingBoost2").html(format(OmegaNum(1).add(game.blessingTime.mul(1 + game.blessingUpgradesBought.includes(2)).div(100)).pow(game.blessingsEnabled), 2))
  $("#blessingBoost3").html(format(OmegaNum(1).add(game.blessingTime.div(100)).pow(game.blessingsEnabled), 2))
  $("#blessingBoost4").html(format(game.blessingBoost4.pow(game.blessingsEnabled), 2))
  $("#blessingBoost5").html(format(game.blessingBoost5.pow(game.blessingsEnabled), 2))
  $("#blessingBoost6").html(format(game.blessingBoost6.pow(game.blessingsEnabled), 2))
  $("#lightCoinRequirement").html(format(lightCoinRequirements[game.totalLightCoins].pow(OmegaNum(1).div(game.blessingBoost7.pow(game.blessingsEnabled))), 2))
  $("#lightCoins").html(format(game.lightCoins, 0))
  $("#totalLightCoins").html(format(game.totalLightCoins, 0))
  $("#BU1Boost").html(format((1 + 0.1 * game.lightCoins), 2))
  $("#BU7Boost").html(format(OmegaNum(1.1 ** game.totalLightCoins), 2))
  $("#BU10Boost").html(format(game.money.add(1).log10().div(13), 2))
  $("#alteration2Boost").html(format(game.money.add(10).log10().pow(0.05).pow(game.alterationsBeaten[1]), 2))
  if (game.capitalismMoneyCost.gte(1e18)) {$("#capitalismMax1").html(" (MAX)")}
  else {$("#capitalismMax1").html("")}
  if (game.capitalismYoshisCost.gte(game.capitalismMax)) {$("#capitalismMax2").html(" (MAX)")}
  else {$("#capitalismMax2").html("")}
  if (game.capitalismTachyonsCost.gte(game.capitalismMax)) {$("#capitalismMax3").html(" (MAX)")}
  else {$("#capitalismMax3").html("")}
}

setInterval(updateSmall, 15)

function updateLarge() {
  for (i=0; i<upgradeCosts.length; i++)
  if (game.upgradesBought[i] != true && game.yoshis.lt(upgradeCosts[i])) {
    document.getElementsByClassName("upgrade")[i].style.color = "#e08080"
  } 
  else if (game.upgradesBought[i] != true && game.yoshis.gte(upgradeCosts[i])) {
    document.getElementsByClassName("upgrade")[i].style.color = "white"
  }
  else {
    document.getElementsByClassName("upgrade")[i].style.color = "#909090"
  }

  for (i=0; i<tachyonUpgradeCosts.length; i++)
  if (game.tachyonUpgradesBought[i] != true && game.tachyons.lt(tachyonUpgradeCosts[i])) {
    document.getElementsByClassName("tachyonUpgrade")[i].style.color = "#e08080"
  } 
  else if (game.tachyonUpgradesBought[i] != true && game.tachyons.gte(tachyonUpgradeCosts[i])) {
    document.getElementsByClassName("tachyonUpgrade")[i].style.color = "white"
  }
  else {
    document.getElementsByClassName("tachyonUpgrade")[i].style.color = "#909090"
  }

  for (i=0; i<capitalismUpgradeCosts.length; i++)
  if (game.capitalismUpgradesBought[i] != true && game.money.lt(capitalismUpgradeCosts[i])) {
    document.getElementsByClassName("capitalismUpgrade")[i].style.color = "#e05050"
  } 
  else if (game.capitalismUpgradesBought[i] != true && game.money.gte(capitalismUpgradeCosts[i])) {
    document.getElementsByClassName("capitalismUpgrade")[i].style.color = "white"
  }
  else {
    document.getElementsByClassName("capitalismUpgrade")[i].style.color = "#707070"
  }

  for (i=0; i<alterationUpgradeCosts.length; i++)
  if (game.alterationUpgradesBought[i] != true && game.yoshis.lt(alterationUpgradeCosts[i])) {
    document.getElementsByClassName("alterationUpgrade")[i].style.color = "#e05050"
  } 
  else if (game.alterationUpgradesBought[i] != true && game.yoshis.gte(alterationUpgradeCosts[i])) {
    document.getElementsByClassName("alterationUpgrade")[i].style.color = "white"
  }
  else {
    document.getElementsByClassName("alterationUpgrade")[i].style.color = "#707070"
  }
}

setInterval(updateLarge, 50)

//Most of this is stolen straight from break_eternity.js
function autobuy() {
  if (game.autobuyEnabled) {
    maxBuyableDoublersStart = new OmegaNum(100).div(1 + game.upgradesBought[0] * 4).div(1 + game.upgradesBought[4] * 4).mul(doublerPriceIncrease.pow(game.automatorDoubles))
    maxBuyableDoublers = OmegaNum.floor(game.yoshis.div(maxBuyableDoublersStart).mul(doublerPriceIncrease.sub(1)).add(1).log10().div(doublerPriceIncrease.log10()))
    maxBuyableDoublersCost = new OmegaNum(100).div(1 + game.upgradesBought[0] * 4).div(1 + game.upgradesBought[4] * 4).mul(doublerPriceIncrease.pow(game.automatorDoubles)).mul(OmegaNum.sub(1, doublerPriceIncrease.pow(maxBuyableDoublers))).div(OmegaNum.sub(1, doublerPriceIncrease))
    if (maxBuyableDoublers.gte(1)) {
      game.yoshis = game.yoshis.sub(maxBuyableDoublersCost)
      game.automatorDoubles = game.automatorDoubles.add(maxBuyableDoublers)
    }

    maxBuyableAutomatorsStart = new OmegaNum(20).mul(new OmegaNum(1.5).pow(game.automators))
    maxBuyableAutomators = OmegaNum.floor(game.yoshis.div(maxBuyableAutomatorsStart).mul(new OmegaNum(1.5).sub(1)).add(1).log10().div(new OmegaNum(1.5).log10()))
    maxBuyableAutomatorsCost = new OmegaNum(20).mul(new OmegaNum(1.5).pow(game.automators)).mul(OmegaNum.sub(1, new OmegaNum(1.5).pow(maxBuyableAutomators))).div(OmegaNum.sub(1, 1.5))
    if (maxBuyableAutomators.gte(1)) {
      game.yoshis = game.yoshis.sub(maxBuyableAutomatorsCost)
      game.automators = game.automators.add(maxBuyableAutomators)
    }
  }
}

function toggleAutobuy() {
  if (game.autobuyEnabled) {
    game.autobuyEnabled = false
    document.getElementById("autobuyButton").innerHTML = "Turn autobuy on"
  }
  else {
    game.autobuyEnabled = true
    document.getElementById("autobuyButton").innerHTML = "Turn autobuy off"
  }
}

//The end of the game
function endGame() {
  if (confirm("You're about to rewind back the beginning. Yoshi won't remember anything, but you won't forget. Are you sure you want to proceed?")) {
    reset()
    save()
    location.reload()
  }
}

//Formatting stuff I stole
function E(x){return new OmegaNum(x)};
function format(ex, acc = 3) {
  ex = E(ex);
  if (ex.isNaN()) return "NaN";
  if (ex.isInfinite()) return "Infinity";
  let e = ex.log10().floor();
  if (e.lt(9)) {
    if (e.lt(3)) {
      return ex.toFixed(acc);
    }
    return ex
      .floor()
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  } else {
    if (ex.gte("eeee9")) {
      let slog = ex.slog();
      return (
        (slog.gte(1e9) ? "" : E(10).pow(slog.sub(slog.floor())).toFixed(3)) +
        "F" +
        format(slog.floor(), 0)
      );
    }
    let m = ex.div(E(10).pow(e));
    return (e.log10().gte(9) ? "" : m.toFixed(3)) + "e" + format(e, 0);
  }
}

function autosaveState() {
  if (game.autosaveEnabled) {
    game.autosaveEnabled = false
    document.getElementById("autosaveState").innerHTML = "Enable autosave"
  }
  else {
    game.autosaveEnabled = true
    document.getElementById("autosaveState").innerHTML = "Disable autosave"
  }
  save()
}

//Disables pressing enter
$(document).keypress(
  function(event){
    if (event.which == '13') {
      event.preventDefault();
    }
});

function switchTab(x) {
  currentTab = x
  if (x==1) {
    document.getElementById("yoshisTab").style.display = "block"
    document.getElementById("timeMachineTab").style.display = "none"
    document.getElementById("capitalismTab").style.display = "none"
    document.getElementById("blessingsTab").style.display = "none"
    document.getElementById("alterationsTab").style.display = "none"
    document.getElementById("optionsTab").style.display = "none"
    document.body.style.backgroundColor = "#103010"
    document.body.style.backgroundImage = null
  }
  else if (x==2) {
    document.getElementById("yoshisTab").style.display = "none"
    document.getElementById("timeMachineTab").style.display = "block"
    document.getElementById("capitalismTab").style.display = "none"
    document.getElementById("blessingsTab").style.display = "none"
    document.getElementById("alterationsTab").style.display = "none"
    document.getElementById("optionsTab").style.display = "none"
    document.body.style.backgroundColor = "black"
    document.body.style.backgroundImage = "linear-gradient(black, black 30%, #001010 100%)"
  }
  else if (x==3) {
    document.getElementById("yoshisTab").style.display = "none"
    document.getElementById("timeMachineTab").style.display = "none"
    document.getElementById("capitalismTab").style.display = "block"
    document.getElementById("blessingsTab").style.display = "none"
    document.getElementById("alterationsTab").style.display = "none"
    document.getElementById("optionsTab").style.display = "none"
    document.body.style.backgroundColor = "#309030"
    document.body.style.backgroundImage = null
  }
  else if (x==4) {
    blessingCirclePos = Math.random() * 360
    document.getElementById("blessingCircle").style.transform = "translate(-50%, -50%) rotate(" + (blessingCirclePos) + "deg)"
    document.getElementById("yoshisTab").style.display = "none"
    document.getElementById("timeMachineTab").style.display = "none"
    document.getElementById("capitalismTab").style.display = "none"
    document.getElementById("blessingsTab").style.display = "block"
    document.getElementById("alterationsTab").style.display = "none"
    document.getElementById("optionsTab").style.display = "none"
    document.body.style.backgroundColor = "#404030"
    blessingBack()
  }
  else if (x==5) {
    document.getElementById("yoshisTab").style.display = "none"
    document.getElementById("timeMachineTab").style.display = "none"
    document.getElementById("capitalismTab").style.display = "none"
    document.getElementById("blessingsTab").style.display = "none"
    document.getElementById("alterationsTab").style.display = "block"
    document.getElementById("optionsTab").style.display = "none"
    document.body.style.backgroundColor = "#805050"
    document.body.style.backgroundImage = "linear-gradient(#805050, #605050)"
  }
  else if (x==6) {
    document.getElementById("yoshisTab").style.display = "none"
    document.getElementById("timeMachineTab").style.display = "none"
    document.getElementById("capitalismTab").style.display = "none"
    document.getElementById("blessingsTab").style.display = "none"
    document.getElementById("alterationsTab").style.display = "none"
    document.getElementById("optionsTab").style.display = "block"
    document.body.style.backgroundColor = "#103010"
    document.body.style.backgroundImage = null
  }
}

capitalismX = 0
capitalismY = 0

function capitalismBackPos() {
  capitalismX++
  capitalismY++
  document.getElementById("capitalismBack").style.backgroundPosition = capitalismX + "px " + capitalismY + "px"
}

setInterval(capitalismBackPos, 50)

blessingBackColor = 0
blessingCirclePos = Math.random() * 360

function blessingBack() {
  if (document.getElementById("blessingsTab").style.display == "block") {
    blessingBackColor += 0.06
    blessingCirclePos += 0.25
    blessingBackHex = Math.floor(Math.sin(blessingBackColor) * 30 + 130).toString(16)
    document.getElementById("blessingCircle").style.transform = "translate(-50%, -50%) rotate(" + (blessingCirclePos) + "deg)"
    document.body.style.backgroundImage = "linear-gradient(#" + (blessingBackHex) + (blessingBackHex) + "30, #404030)"
  }
}

setInterval(blessingBack, 50)

function evadeTaxes() {
  game.taxesEvaded = game.taxesEvaded.add(1)
  game.money = game.money.add(moneyToGain)
}