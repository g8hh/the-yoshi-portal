function showBlessing(x) {
  document.getElementById("blessingInfoDiv").style.display = "block"
  document.getElementById("blessingInfoDiv").style.backgroundColor = document.getElementsByClassName("blessing")[x-1].style.backgroundColor
  switch(x) {
    case 1:
      document.getElementById("blessingInfo1").innerHTML = "Red Yoshi's Blessing"
      document.getElementById("blessingInfo2").innerHTML = "(Temporary)"
      document.getElementById("blessingInfo3").innerHTML = "Boosts Yoshi Gain.<br>Currently x^<span id='blessingBoost1'>1.00</span>"
      $("#blessingBoost1").html(format(OmegaNum(1).add(game.blessingTime.div(50).mul(game.blessingBoost6)), 2))
      break
    case 2:
      document.getElementById("blessingInfo1").innerHTML = "Orange Yoshi's Blessing"
      document.getElementById("blessingInfo2").innerHTML = "(Temporary)"
      document.getElementById("blessingInfo3").innerHTML = "Boosts tachyon gain.<br>Currently x^<span id='blessingBoost2'>1.00</span>"
      $("#blessingBoost2").html(format(OmegaNum(1).add(game.blessingTime.mul(1 + game.blessingUpgradesBought.includes(2)).div(100)), 2))
      break
    case 3:
      document.getElementById("blessingInfo1").innerHTML = "Yellow Yoshi's Blessing"
      document.getElementById("blessingInfo2").innerHTML = "(Temporary)"
      document.getElementById("blessingInfo3").innerHTML = "Boosts money gain.<br>Currently x^<span id='blessingBoost3'>1.00</span>"
      $("#blessingBoost3").html(format(OmegaNum(1).add(game.blessingTime.div(100)), 2))
      break
    case 4:
      document.getElementById("blessingInfo1").innerHTML = "Light Blue Yoshi's Blessing"
      document.getElementById("blessingInfo2").innerHTML = "(Permanent)"
      document.getElementById("blessingInfo3").innerHTML = "Increases blessing time gain.<br>Currently x*<span id='blessingBoost4'>1.00</span><span id='blessing4Hardcap'></span>"
      $("#blessingBoost4").html(format(game.blessingBoost4, 2))
      break
    case 5:
      document.getElementById("blessingInfo1").innerHTML = "Blue Yoshi's Blessing"
      document.getElementById("blessingInfo2").innerHTML = "(Permanent)"
      document.getElementById("blessingInfo3").innerHTML = "Boosts Yoshi gain (increases based on tachyons).<br>Currently x^<span id='blessingBoost5'>1.00</span><span id='blessing5Hardcap'></span>"
      $("#blessingBoost5").html(format(game.blessingBoost5, 2))
      break
    case 6:
      document.getElementById("blessingInfo1").innerHTML = "Purple Yoshi's Blessing"
      document.getElementById("blessingInfo2").innerHTML = "(Permanent)"
      document.getElementById("blessingInfo3").innerHTML = "Makes Red Yoshi's blessing more powerful.<br>Currently x*<span id='blessingBoost6'>1.00</span><span id='blessing6Hardcap'></span>"
      $("#blessingBoost6").html(format(game.blessingBoost6, 2))
      break
    case 7:
      document.getElementById("blessingInfo1").innerHTML = "Pink Yoshi's Blessing"
      document.getElementById("blessingInfo2").innerHTML = "(Permanent)"
      document.getElementById("blessingInfo3").innerHTML = "Decreases light coin requirements."
      break
  }
}

function hideBlessing() {
  document.getElementById("blessingInfoDiv").style.display = "none"
}

function activateBlessing(x) {
  if (game.activeBlessings.includes(x) == false) {
    game.activeBlessings.push(x)
    document.getElementsByClassName("blessing")[x-1].style.border = "0.3vw solid white"
    if (game.activeBlessings.length > game.maxBlessings) {
      y = game.activeBlessings[0]
      document.getElementsByClassName("blessing")[y-1].style.border = "0.3vw solid black"
      game.activeBlessings.splice(0, 1)
    }
  }
  else {
    for (i=0; i<game.activeBlessings.length; i++) {
      if (game.activeBlessings[i] == x) {
        game.activeBlessings.splice(i, 1)
      }
    }
    document.getElementsByClassName("blessing")[x-1].style.border = "0.3vw solid black"
  }
}

function buyBlessingUpgrade(x) {
  if (game.blessingUpgradesBought.includes(x) == false && game.lightCoins > 0 && document.getElementsByClassName("blessingUpgrade")[x-1].style.filter != "brightness(65%)") {
    game.lightCoins--
    game.blessingUpgradesBought.push(x)
    if (x==4) {
      document.getElementsByClassName("capitalismButton")[3].style.display = "block"
      document.getElementsByClassName("capitalismUpgrade")[7].style.display = "block"
      document.getElementsByClassName("capitalismUpgrade")[8].style.display = "block"
      document.getElementsByClassName("capitalismUpgrade")[9].style.display = "block"
      game.blessingUpgrade4Bought = true
    }
  }
}

function resetBlessingUpgrades() {
  game.lightCoins = game.totalLightCoins
  game.blessingUpgradesBought = []
}

//I don't know any better way to do this please help me
function blessingUpgradeDisplay() {
  if (game.blessingUpgradesBought.includes(2)) {document.getElementsByClassName("blessingUpgrade")[0].style.filter = null}
  else {document.getElementsByClassName("blessingUpgrade")[0].style.filter = "brightness(65%)"}
  if (game.blessingUpgradesBought.includes(3)) {document.getElementsByClassName("blessingUpgrade")[1].style.filter = null}
  else {document.getElementsByClassName("blessingUpgrade")[1].style.filter = "brightness(65%)"}
  if (game.blessingUpgradesBought.includes(4)) {document.getElementsByClassName("blessingUpgrade")[2].style.filter = null}
  else {document.getElementsByClassName("blessingUpgrade")[2].style.filter = "brightness(65%)"}
  if (game.blessingUpgradesBought.includes(5)) {document.getElementsByClassName("blessingUpgrade")[3].style.filter = null}
  else {document.getElementsByClassName("blessingUpgrade")[3].style.filter = "brightness(65%)"}
  if (game.blessingUpgradesBought.includes(6)) {document.getElementsByClassName("blessingUpgrade")[4].style.filter = null}
  else {document.getElementsByClassName("blessingUpgrade")[4].style.filter = "brightness(65%)"}

  if (game.blessingUpgradesBought.includes(7)) {document.getElementsByClassName("blessingUpgrade")[7].style.filter = null}
  else {document.getElementsByClassName("blessingUpgrade")[7].style.filter = "brightness(65%)"}
  if (game.blessingUpgradesBought.includes(8)) {document.getElementsByClassName("blessingUpgrade")[8].style.filter = null}
  else {document.getElementsByClassName("blessingUpgrade")[8].style.filter = "brightness(65%)"}
  if (game.blessingUpgradesBought.includes(9)) {document.getElementsByClassName("blessingUpgrade")[9].style.filter = null}
  else {document.getElementsByClassName("blessingUpgrade")[9].style.filter = "brightness(65%)"}
  if (game.blessingUpgradesBought.includes(10)) {document.getElementsByClassName("blessingUpgrade")[10].style.filter = null}
  else {document.getElementsByClassName("blessingUpgrade")[10].style.filter = "brightness(65%)"}
  if (game.blessingUpgradesBought.includes(11)) {document.getElementsByClassName("blessingUpgrade")[11].style.filter = null}
  else {document.getElementsByClassName("blessingUpgrade")[11].style.filter = "brightness(65%)"}

  for (i=1; i<13; i++) {
    if (game.blessingUpgradesBought.includes(i)) {document.getElementsByClassName("blessingUpgrade")[i-1].style.color = "#70e070"}
    else {document.getElementsByClassName("blessingUpgrade")[i-1].style.color = "white"}
  }
}

setInterval(blessingUpgradeDisplay, 15)