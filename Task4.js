//Задача №4

// Конструктор для электроприборов
function ElectricAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isOn = false;
}

// Метод для включения электроприбора
ElectricAppliance.prototype.turnOn = function() {
  this.isOn = true;
  console.log(this.name + " включен.");
}

// Метод для выключения электроприбора
ElectricAppliance.prototype.turnOff = function() {
  this.isOn = false;
  console.log(this.name + " выключен.");
}

// Создание экземпляра настольной лампы
let deskLamp = new ElectricAppliance("Настольная лампа", 60);

// Создание экземпляра компьютера
let computer = new ElectricAppliance("Компьютер", 250);

// Включение настольной лампы
deskLamp.turnOn();

// Включение компьютера
computer.turnOn();

// Выключение настольной лампы
deskLamp.turnOff();

// Выключение компьютера
computer.turnOff();

// Функция для расчета суммарной потребляемой мощности всех включенных приборов
function calculateTotalPowerConsumption(...appliances) {
  let totalPower = 0;
  for (let appliance of appliances) {
    if (appliance.isOn) {
      totalPower += appliance.power;
    }
  }
  return totalPower;
}

// Расчет суммарной потребляемой мощности всех включенных приборов
let totalPowerConsumption = calculateTotalPowerConsumption(deskLamp, computer);
console.log("Суммарная потребляемая мощность: " + totalPowerConsumption + " Вт.");
