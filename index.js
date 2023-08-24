require("colors");
/* importación del módulo inquirer */
const {
  menu,
  pausa,
  inputValue,
  confirmacion,
  inputValueName,
  inputValueCuenta,
} = require("./helpers/inquirer");
/* importación de la clase Movimientos */
const Movimientos = require("./models/Movimientos");

const main = async () => {
  let op = "";
  let mov = new Movimientos();
  do {
    op = await menu();
    switch (op) {
      case "1":
        console.log("\n");
        console.log(`Saldo en pesos uruguayos:`);
        console.log("\n");
        console.log(`Su saldo es de $ ${mov.saldoPesos}`);
        console.log("\n");
        await pausa(`Presione ${"ENTER".cyan} para continuar.`);
        break;
      case "2":
        console.log("\n");
        console.log(`Saldo en dólares americanos:`);
        console.log("\n");
        console.log(`Su saldo es de U$S ${mov.saldoDolares}`);
        console.log("\n");
        await pausa(`Presione ${"ENTER".cyan} para continuar.`);
        break;
      case "3":
        console.log("\n");
        console.log(`Depósito a cuenta propia en pesos:`);
        console.log("\n");
        let depositoPesosValue = await inputValue(
          "Ingrese el valor a depositar: "
        );
        let confirmPesos = await confirmacion(`Confirma la operación?`);
        if (confirmPesos === true) {
          console.log("\n");
          console.log(
            `Se han depositado U$S ${depositoPesosValue} a su cuenta en pesos`
          );
          console.log("\n");
          mov.depositoPesos(Number(depositoPesosValue));
          mov.agregarDepositoPesos(depositoPesosValue);
        } else {
          mov.depositoPesos(0);
          console.log("\n");
          console.log("Su acción ha sido cancelada!");
          console.log("\n");
        }
        await pausa(`Presione ${"ENTER".cyan} para continuar.`);
        console.log("\n");
        break;
      case "4":
        console.log("\n");
        console.log(`Depósito a cuenta propia en dólares:`);
        console.log("\n");
        let depositoDolaresValue = await inputValue(
          "Ingrese el valor a depositar: "
        );
        let confirmDolares = await confirmacion(`Confirma la operación?`);
        if (confirmDolares === true) {
          console.log("\n");
          console.log(
            `Se han depositado U$S ${depositoDolaresValue} a su cuenta en dólares americanos`
          );
          console.log("\n");
          mov.depositoDolares(Number(depositoDolaresValue));
          mov.agregarDepositoDólares(depositoDolaresValue);
        } else {
          mov.depositoDolares(0);
          console.log("\n");
          console.log("Su acción ha sido cancelada!");
          console.log("\n");
        }
        await pausa(`Presione ${"ENTER".cyan} para continuar.`);
        console.log("\n");
        break;
      case "5":
        console.log("\n");
        console.log(`Extracción de pesos:`);
        console.log("\n");
        let extraccionPesosValue = await inputValue(
          "Ingrese el valor a retirar: "
        );
        let confirmPesosExt = await confirmacion(`Confirma la operación?`);
        if (
          confirmPesosExt === true &&
          Number(extraccionPesosValue) < mov.saldoPesos
        ) {
          console.log("\n");
          console.log(
            `Ha extraído U$S ${extraccionPesosValue} de su cuenta de pesos.`
          );
          console.log("\n");
          mov.extraccionPesos(Number(extraccionPesosValue));
          mov.agregarExtracciónPesos(extraccionPesosValue);
        } else if (
          confirmPesosExt === true &&
          Number(extraccionPesosValue) > mov.saldoPesos
        ) {
          mov.extraccionPesos(0);
          console.log("\n");
          console.log("El monto excede su saldo en pesos - acción cancelada! ");
          console.log("\n");
        } else if (confirmPesosExt === false) {
          mov.extraccionPesos(0);
          console.log("\n");
          console.log("Su acción ha sido cancelada!");
          console.log("\n");
        }
        await pausa(`Presione ${"ENTER".cyan} para continuar.`);
        console.log("\n");
        break;
      case "6":
        console.log("\n");
        console.log(`Extracción de dólares:`);
        console.log("\n");
        let extraccionDolaresValue = await inputValue(
          "Ingrese el valor a retirar: "
        );
        let confirmDolaresExt = await confirmacion(`Confirma la operación?`);
        if (
          confirmDolaresExt === true &&
          Number(extraccionDolaresValue) < mov.saldoDolares
        ) {
          console.log("\n");
          console.log(
            `Ha extraído U$S ${extraccionDolaresValue} de su cuenta de dólares americanos.`
          );
          console.log("\n");
          mov.extraccionDolares(Number(extraccionDolaresValue));
          mov.agregarExtracciónDólares(extraccionDolaresValue);
        } else if (
          confirmDolaresExt === true &&
          Number(extraccionDolaresValue) > mov.saldoDolares
        ) {
          mov.extraccionDolares(0);
          console.log("\n");
          console.log(
            "El monto excede su saldo en dólares - acción cancelada! "
          );
          console.log("\n");
        } else if (confirmDolaresExt === false) {
          mov.extraccionDolares(0);
          console.log("\n");
          console.log("Su acción ha sido cancelada!");
          console.log("\n");
        }
        await pausa(`Presione ${"ENTER".cyan} para continuar.`);
        console.log("\n");
        break;
      case "7":
        console.log("\n");
        console.log(`Giro a otra cuenta en pesos:`);
        console.log("\n");
        let inputNombrePesos = await inputValueName(
          "Ingrese el nombre del destinatario: "
        );
        let inputCuentaPesos = await inputValueCuenta(
          "Ingrese el número de cuenta del titular: "
        );
        let inputValorPesos = await inputValueCuenta(
          "Ingrese el monto a girar: "
        );
        let confirmGiroPesos = await confirmacion(`Confirma la operación?`);

        if (
          confirmGiroPesos === true &&
          Number(inputValorPesos) < mov.saldoPesos
        ) {
          console.log("\n");
          console.log(
            `Ha extraído $ ${inputValorPesos} de su cuenta de pesos.`
          );
          console.log("\n");
          mov.giroPesos(Number(inputValorPesos));
          mov.agregarGiroPesos(
            inputNombrePesos,
            inputCuentaPesos,
            inputValorPesos
          );
        } else if (
          confirmGiroPesos === true &&
          Number(inputValorPesos) > mov.saldoPesos
        ) {
          mov.giroPesos(0);
          console.log("\n");
          console.log("El monto excede su saldo en pesos - acción cancelada! ");
          console.log("\n");
        } else if (confirmGiroPesos === false) {
          console.log("\n");
          console.log("Su acción ha sido cancelada!");
          console.log("\n");
          mov.giroPesos(0);
        }

        await pausa(`Presione ${"ENTER".cyan} para continuar.`);
        break;
      case "8":
        console.log("\n");
        console.log(`Giro a otra cuenta en dólares americanos:`);
        console.log("\n");
        let inputNombreDolares = await inputValueName(
          "Ingrese el nombre del destinatario: "
        );
        let inputCuentaDolares = await inputValueCuenta(
          "Ingrese el número de cuenta del titular: "
        );
        let inputValorDolares = await inputValueCuenta(
          "Ingrese el monto a girar: "
        );
        let confirmGiroDolares = await confirmacion(`Confirma la operación?`);

        if (
          confirmGiroDolares === true &&
          Number(inputValorDolares) < mov.saldoDolares
        ) {
          console.log("\n");
          console.log(
            `Ha extraído $ ${inputValorDolares} de su cuenta de dólares americanos.`
          );
          console.log("\n");
          mov.giroDolares(Number(inputValorDolares));
          mov.agregarGiroDolares(
            inputNombreDolares,
            inputCuentaDolares,
            inputValorDolares
          );
        } else if (
          confirmGiroDolares === true &&
          Number(inputValorDolares) > mov.saldoDolares
        ) {
          mov.giroDolares(0);
          console.log("\n");
          console.log(
            "El monto excede su saldo en dólares - acción cancelada! "
          );
          console.log("\n");
        } else if (confirmGiroDolares === false) {
          console.log("\n");
          console.log("Su acción ha sido cancelada!");
          console.log("\n");
          mov.giroDolares(0);
        }

        await pausa(`Presione ${"ENTER".cyan} para continuar.`);
        break;

      case "9":
        console.log("\n");
        console.log(`Compra dólares:`);
        console.log("\n");
        let montoDolaresValue = await inputValue(
          "Ingrese el valor a comprar en dólares americanos: "
        );
        let confirmacionCompraDolares = await confirmacion(
          `Confirma la operación?`
        );
        if (
          confirmacionCompraDolares === true &&
          Number(montoDolaresValue * 40) < mov.saldoPesos
        ) {
          console.log("\n");
          console.log(
            `Ha extraído $ ${montoDolaresValue * 40} de su cuenta en pesos.`
          );
          console.log(
            `Ha agregado U$$ ${montoDolaresValue} de su cuenta en dólares americanos.`
          );
          console.log("\n");
          mov.giroPesosDolaresInt(Number(montoDolaresValue));
          mov.agregarCompraDolares(montoDolaresValue);
        } else if (
          confirmacionCompraDolares === true &&
          Number(montoDolaresValue * 40) > mov.saldoPesos
        ) {
          mov.giroPesosDolaresInt(0);
          console.log("\n");
          console.log("El monto excede su saldo en pesos - acción cancelada! ");
          console.log("\n");
        } else if (confirmacionCompraDolares === false) {
          mov.giroPesosDolaresInt(0);
          console.log("\n");
          console.log("Su acción ha sido cancelada!");
          console.log("\n");
        }
        await pausa(`Presione ${"ENTER".cyan} para continuar.`);
        break;

      case "10":
        console.log("\n");
        console.log(`Compra pesos:`);
        console.log("\n");
        let montoPesosValue = await inputValue(
          "Ingrese el valor a comprar en pesos: "
        );
        let confirmacionCompraPesos = await confirmacion(
          `Confirma la operación?`
        );
        if (
          confirmacionCompraPesos === true &&
          Number(montoPesosValue / 40) < mov.saldoDolares
        ) {
          console.log("\n");
          console.log(
            `Ha extraído $ ${
              montoPesosValue / 40
            } de su cuenta en dólares americanos.`
          );
          console.log(
            `Ha agregado U$$ ${montoPesosValue} de su cuenta en pesos.`
          );
          console.log("\n");
          mov.giroDolaresPesosInt(Number(montoPesosValue));
          mov.agregarCompraPesos(montoPesosValue);
        } else if (
          confirmacionCompraPesos === true &&
          Number(montoPesosValue / 40) > mov.saldoDolares
        ) {
          mov.giroDolaresPesosInt(0);
          console.log("\n");
          console.log(
            "El monto excede su saldo en dólares - acción cancelada! "
          );
          console.log("\n");
        } else if (confirmacionCompraPesos === false) {
          mov.giroDolaresPesosInt(0);
          console.log("\n");
          console.log("Su acción ha sido cancelada!");
          console.log("\n");
        }
        await pausa(`Presione ${"ENTER".cyan} para continuar.`);
        break;

      case "11":
        console.log("\n");
        console.log(`Movimientos:`);
        console.log("\n");
        if (mov.lista_movimientos.length === 0) {
          console.log("No se registran movimientos ha la fecha!");
        } else {
          console.log(mov.lista_movimientos);
        }
        console.log("\n");
        await pausa(`Presione ${"ENTER".cyan} para continuar.`);
        break;
      case "12":
        console.log("\n");
        console.log(`Cotizaciones:`);
        console.log("\n");
        console.log(`Dólar USA => Compra($40.00) - Venta($40.00)`);
        console.log("\n");
        console.log(`Real BRA => Compra($7.00) - Venta($7.00)`);
        console.log("\n");
        console.log(`Euro => Compra($38.00) - Venta($38.00)`);
        console.log("\n");
        console.log(`Libra => Compra($41.00) - Venta($41.00)`);
        console.log("\n");
        await pausa(`Presione ${"ENTER".cyan} para continuar.`);
        break;
      case "0":
        await pausa(`Presione ${"ENTER".red} para salir.`);
        break;
    }
  } while (op !== "0");
};

main();
