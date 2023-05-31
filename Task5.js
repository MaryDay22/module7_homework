//Задача №5

class ElectricAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    console.log(this.name + " включен.");
  }

  turnOff() {
    this.isOn = false;
    console.log(this.name + " выключен.");
  }
}

let deskLamp = new ElectricAppliance("Настольная лампа", 60);
let computer = new ElectricAppliance("Компьютер", 250);

deskLamp.turnOn();
computer.turnOn();
deskLamp.turnOff();
computer.turnOff();

function calculateTotalPowerConsumption(...appliances) {
  let totalPower = 0;
  for (let appliance of appliances) {
    if (appliance.isOn) {
      totalPower += appliance.power;
    }
  }
  return totalPower;
}

let totalPowerConsumption = calculateTotalPowerConsumption(deskLamp, computer);
console.log("Суммарная потребляемая мощность: " + totalPowerConsumption + " Вт.");
