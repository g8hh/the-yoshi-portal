function buyCapitalismMoney() {
  if (game.money.gte(game.capitalismMoneyCost) && game.capitalismMoneyCost.lt(1e18)) {
    game.money = game.money.sub(game.capitalismMoneyCost)
    game.capitalismMoneyBought = game.capitalismMoneyBought.add(1)
  }
}

function buyCapitalismYoshis() {
  if (game.money.gte(game.capitalismYoshisCost) && game.capitalismYoshisCost.lt(game.capitalismMax)) {
    game.money = game.money.sub(game.capitalismYoshisCost)
    game.capitalismYoshisBought = game.capitalismYoshisBought.add(1)
  }
}

function buyCapitalismTachyons() {
  if (game.money.gte(game.capitalismTachyonsCost) && game.capitalismTachyonsCost.lt(game.capitalismMax)) {
    game.money = game.money.sub(game.capitalismTachyonsCost)
    game.capitalismTachyonsBought = game.capitalismTachyonsBought.add(1)
  }
}

function buyCapitalismMax() {
  if (game.money.gte(game.capitalismMaxCost)) {
    game.money = game.money.sub(game.capitalismMaxCost)
    game.capitalismMaxBought = game.capitalismMaxBought.add(1)
  }
}

function buyCapitalismUpgrade(x) {
  if (x==1 && game.money.gte(capitalismUpgradeCosts[0]) && game.capitalismUpgradesBought[0] != true) {
    game.money = game.money.sub(capitalismUpgradeCosts[0])
    game.capitalismUpgradesBought[0] = true
  }
  else if (x==2 && game.money.gte(capitalismUpgradeCosts[1]) && game.capitalismUpgradesBought[1] != true) {
    game.money = game.money.sub(capitalismUpgradeCosts[1])
    game.capitalismUpgradesBought[1] = true
  }
  else if (x==3 && game.money.gte(capitalismUpgradeCosts[2]) && game.capitalismUpgradesBought[2] != true) {
    game.money = game.money.sub(capitalismUpgradeCosts[2])
    game.capitalismUpgradesBought[2] = true
    document.getElementsByClassName("tachyonUpgrade")[8].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[9].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[10].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[11].style.display = "block"
  }
  else if (x==4 && game.money.gte(capitalismUpgradeCosts[3]) && game.capitalismUpgradesBought[3] != true) {
    game.money = game.money.sub(capitalismUpgradeCosts[3])
    game.capitalismUpgradesBought[3] = true
  }
  else if (x==5 && game.money.gte(capitalismUpgradeCosts[4]) && game.capitalismUpgradesBought[4] != true) {
    game.money = game.money.sub(capitalismUpgradeCosts[4])
    game.capitalismUpgradesBought[4] = true
  }
  else if (x==6 && game.money.gte(capitalismUpgradeCosts[5]) && game.capitalismUpgradesBought[5] != true) {
    game.money = game.money.sub(capitalismUpgradeCosts[5])
    game.capitalismUpgradesBought[5] = true
  }
  else if (x==7 && game.money.gte(capitalismUpgradeCosts[6]) && game.capitalismUpgradesBought[6] != true) {
    game.money = game.money.sub(capitalismUpgradeCosts[6])
    game.capitalismUpgradesBought[6] = true
  }
  else if (x==8 && game.money.gte(capitalismUpgradeCosts[7]) && game.capitalismUpgradesBought[7] != true) {
    game.money = game.money.sub(capitalismUpgradeCosts[7])
    game.capitalismUpgradesBought[7] = true
  }
  else if (x==9 && game.money.gte(capitalismUpgradeCosts[8]) && game.capitalismUpgradesBought[8] != true) {
    game.money = game.money.sub(capitalismUpgradeCosts[8])
    game.capitalismUpgradesBought[8] = true
  }
  else if (x==10 && game.money.gte(capitalismUpgradeCosts[9]) && game.capitalismUpgradesBought[9] != true) {
    game.money = game.money.sub(capitalismUpgradeCosts[9])
    game.capitalismUpgradesBought[9] = true
    document.getElementsByClassName("tachyonUpgrade")[12].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[13].style.display = "block"
    document.getElementsByClassName("tachyonUpgrade")[14].style.display = "block"
  }
}