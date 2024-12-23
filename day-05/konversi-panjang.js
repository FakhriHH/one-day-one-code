function meterToKilometer(meter) {
  return meter / 1000;
}

function kilometerToMeter(kilometer) {
  return kilometer * 1000;
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Masukkan panjang (misalnya 500M atau 1.5KM): ", (input) => {
  const unit = input.toUpperCase().endsWith("KM") ? "KM" : 
               input.toUpperCase().endsWith("M") ? "M" : null;
  const value = parseFloat(input);

  if (unit === "M") {
    console.log(`${value} meter adalah ${meterToKilometer(value).toFixed(3)} kilometer`);
  } else if (unit === "KM") {
    console.log(`${value} kilometer adalah ${kilometerToMeter(value).toFixed(2)} meter`);
  } else {
    console.log("Unit panjang tidak valid. Gunakan M untuk meter atau KM untuk kilometer.");
  }

  readline.close(); 
});