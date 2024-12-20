// console.log("Está Funcionando");
const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencyValueConverted = document.querySelector(".currency-value");
//()
async function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // valor em real
  const currencyValueConverted = document.querySelector(".currency-value"); // outras moedas

  const data = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL').then((response) => response.json());
  console.log(data);

  const dolarToday = data.USDBRL.high;
  const euroToday = data.EURBRL.high;
  const libraToday = data.GBPBRL.high;
  const bitcoinToday = data.BTCBRL.high;

  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value === "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if(currencySelect.value === "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
      style: "currency",
      currency:'GBP'
    }).format(inputCurrencyValue/libraToday)
  }

  if(currencySelect.value === "bitcoin"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
      style: "currency",
      currency:'BTC'
    }).format(inputCurrencyValue/bitcoinToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  // console.log();
}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value === "dolar"){
        
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
        
    }

    if(currencySelect.value === "euro"){
        
        currencyName.innerHTML = "Euro"
        currencyImg.src = './assets/euro.png'
    }

    if(currencySelect.value === 'libra'){
      currencyName.innerHTML = "Libra"
      currencyImg.src = './assets/libra.svg'
    }

    if(currencySelect.value === 'bitcoin'){
      currencyName.innerHTML = "Bitcoin"
      currencyImg.src = "./assets/bitcoin.svg"
    }


    convertValues()

}

currencySelect.addEventListener("change", changeCurrency);

convertButton.addEventListener("click", convertValues);
