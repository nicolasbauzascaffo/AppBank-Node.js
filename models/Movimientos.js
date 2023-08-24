const { v4: uuid4 } = require("uuid");

class Movimientos {
  constructor(nombre, numero_cuenta, email, monto) {
    this.id = uuid4();
    this.fecha = new Date().toUTCString();
    this.nombre = nombre;
    this.lista_movimientos = [];
    this.numero_cuenta = numero_cuenta;
    this.email = email;
    this.saldoPesos = 1000;
    this.saldoDolares = 100;
    this.monto = monto;
  }
  agregarDepositoPesos(monto) {
    this.lista_movimientos.push({
      tipo: "Depósito en pesos",
      id: this.id,
      fecha: this.fecha,
      saldo_pesos: `Saldo en pesos a la fecha: $ ${this.saldoPesos}`,
      monto_depositado: `+ $ ${monto}`,
    });
  }
  agregarDepositoDólares(monto) {
    this.lista_movimientos.push({
      tipo: "Depósito en dólares americanos",
      id: this.id,
      fecha: this.fecha,
      saldo_dolares: `Saldo en dólares a la fecha: $ ${this.saldoDolares}`,
      monto_depositado: `+ U$S ${monto}`,
    });
  }
  agregarExtracciónDólares(monto) {
    this.lista_movimientos.push({
      tipo: "Extracción en dólares americanos",
      id: this.id,
      fecha: this.fecha,
      saldo_dolares: `Saldo en dólares a la fecha: $ ${this.saldoDolares}`,
      monto_extr: `- U$S ${monto}`,
    });
  }
  agregarExtracciónPesos(monto) {
    this.lista_movimientos.push({
      tipo: "Extracción en pesos",
      id: this.id,
      fecha: this.fecha,
      saldo_pesos: `Su saldo en pesos a la fecha es de $ ${this.saldoPesos}`,
      monto_extr: `- U$S ${monto}`,
    });
  }
  agregarGiroPesos(nombre, cuenta, monto) {
    this.lista_movimientos.push({
      tipo: "Giro en pesos",
      nombre_titular: nombre,
      cuenta_destino: cuenta,
      id: this.id,
      fecha: this.fecha,
      saldo_pesos: `Su saldo en pesos a la fecha es de $ ${this.saldoPesos}`,
      monto_extr: `- U$S ${monto}`,
    });
  }
  agregarGiroDolares(nombre, cuenta, monto) {
    this.lista_movimientos.push({
      tipo: "Giro en dólares americanos",
      nombre_titular: nombre,
      cuenta_destino: cuenta,
      id: this.id,
      fecha: this.fecha,
      saldo_pesos: `Su saldo en pesos a la fecha es de $ ${this.saldoPesos}`,
      monto_extr: `- U$S ${monto}`,
    });
  }
  agregarCompraPesos(monto) {
    this.lista_movimientos.push({
      tipo: "Compra pesos",
      id: this.id,
      fecha: this.fecha,
      saldo_pesos: `Su saldo en pesos a la fecha es de $ ${this.saldoPesos}`,
      monto_extr: `- U$S ${monto / 40}`,
      monto_ing: `+ $ ${monto}`,
    });
  }
  agregarCompraDolares(monto) {
    this.lista_movimientos.push({
      tipo: "Compra dólares",
      id: this.id,
      fecha: this.fecha,
      saldo_pesos: `Su saldo en dólares a la fecha es de $ ${this.saldoDolares}`,
      monto_extr: `- $ ${monto * 40}`,
      monto_ing: `+ U$S ${monto}`,
    });
  }
  extraccionPesos(monto) {
    this.saldoPesos -= monto;
  }
  extraccionDolares(monto) {
    this.saldoDolares -= monto;
  }
  depositoDolares(monto) {
    this.saldoDolares += monto;
  }
  depositoPesos(monto) {
    this.saldoPesos += monto;
  }
  giroDolares(monto) {
    this.saldoDolares -= monto;
  }
  giroPesos(monto) {
    this.saldoPesos -= monto;
  }
  giroPesosDolaresInt(monto) {
    let compraDolares = 40;
    let resutado = monto * compraDolares;
    this.saldoPesos -= resutado;
    this.saldoDolares += monto;
  }
  giroDolaresPesosInt(monto) {
    let compraPesos = 40;
    let resutado = monto / compraPesos;
    this.saldoDolares -= resutado;
    this.saldoPesos += monto;
  }
}

module.exports = Movimientos;
