//enter deposit uang
//show menu
// pilih makanan
// show sisa duit
// try again

const prompt = require("prompt-sync")();

const FOOD_PRICE = {
  1: 3,
  2: 4,
  3: 2,
  4: 1,
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter Deposit Amount: $");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid Deposit Amount");
    } else {
      return numberDepositAmount;
    }
  }
};

const selectMenu = () => {
  const menuSelect = prompt("Choose a Menu: ");
  const menuNumber = parseFloat(menuSelect);

  if (isNaN(menuNumber) || menuNumber <= 0 || menuNumber > 4) {
    console.log("Invalid Input");
  } else {
    return menuNumber;
  }
};

const menu = () => {
  console.log("==== MENU ====");
  console.log("1. Pasta = $3");
  console.log("2. Pizza = $4");
  console.log("3. Beer  = $2");
  console.log("4. Water = $1");
  console.log("==============");
  console.log(" ");
};

const balanceLeft = (balance, menu) => {
    const { [menu]: price } = FOOD_PRICE;
    balance = balance - price;
    console.log(`Your change is: $${balance}`);
};

let balance = deposit();
const showMenu = menu();
const menuSelected = selectMenu();
balanceLeft(balance, menuSelected);
