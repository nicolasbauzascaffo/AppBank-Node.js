const inquirer = require("inquirer");
require("colors");

/* Función de menú principal con inquirer */
const menu = async () => {
  const options = {
    type: "list",
    name: "opt",
    message: "Seleccione un tipo de operación:",
    choices: [
      {
        value: "1",
        name: `${"1.".cyan}  Consulta de saldo en pesos`,
      },
      {
        value: "2",
        name: `${"2.".cyan}  Consulta de saldo en dólares`,
      },
      {
        value: "3",
        name: `${"3.".cyan}  Depósito a cuenta propia en pesos`,
      },
      {
        value: "4",
        name: `${"4.".cyan}  Depósito a cuenta propia en dólares`,
      },
      {
        value: "5",
        name: `${"5.".cyan}  Extracción en pesos`,
      },
      {
        value: "6",
        name: `${"6.".cyan}  Extracción en dólares`,
      },
      {
        value: "7",
        name: `${"7.".cyan}  Giro a otra cuenta en pesos`,
      },
      {
        value: "8",
        name: `${"8.".cyan}  Giro a otra cuenta en dólares`,
      },
      {
        value: "9",
        name: `${"9.".cyan}  Compra dólares`,
      },
      {
        value: "10",
        name: `${"10.".cyan} Compra pésos`,
      },
      {
        value: "11",
        name: `${"11.".cyan} Movimientos`,
      },
      {
        value: "12",
        name: `${"12.".cyan} Cotizaciones`,
      },
      {
        value: "0",
        name: `${"0.".red}  Salir`,
      },
    ],
  };
  console.clear();
  console.log(`\n=================================`.cyan);
  console.log("======== BANCO REPÚBLICA ========");
  console.log("=================================\n".cyan);
  const { opt } = await inquirer.prompt(options);
  return opt;
};

const inputValue = async (message) => {
  const options = {
    type: "input",
    name: "opt",
    message: message,
    validate(value) {
      if (value.length === 0) {
        console.log("Lo siento debe ingresar un valor válido");
      } else {
        return true;
      }
    },
  };
  const { opt } = await inquirer.prompt(options);
  return opt;
};

const pausa = async (message) => {
  const options = {
    type: "input",
    name: "opt",
    message: message,
  };
  await inquirer.prompt(options);
};

const confirmacion = async (message) => {
  const options = {
    type: "confirm",
    name: "opt",
    message: message,
  };
  const { opt } = await inquirer.prompt(options);
  return opt;
};

const inputValueName = async (message) => {
  const options = {
    type: "input",
    name: "opt",
    message: message,
    validate(value) {
      if (value.length === 0) {
        console.log("Lo siento debe ingresar un destinatario para continuar!");
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        console.log("Debe ingresar un nombre válido!");
      } else {
        return true;
      }
    },
  };
  const { opt } = await inquirer.prompt(options);
  return opt;
};

const inputValueCuenta = async (message) => {
  const options = {
    type: "input",
    name: "opt",
    message: message,
    validate(value) {
      if (value.length === 0) {
        console.log(
          "Lo siento debe ingresar un número de cuenta para continuar!"
        );
      } else if (!/^\d+$/.test(value)) {
        console.log("Debe ingresar un número de cuenta válido!");
      } else {
        return true;
      }
    },
  };
  const { opt } = await inquirer.prompt(options);
  return opt;
};

module.exports = {
  menu,
  pausa,
  inputValue,
  confirmacion,
  inputValueName,
  inputValueCuenta,
};
