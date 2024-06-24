import mongoose from "mongoose";

const contaSchema = new mongoose.Schema({
  saldo: {
    type: Number,
    default: 0,
  },
  banco: {
    type: String,
    enum: [
      "Banco do Brasil",
      "Caixa",
      "Itau",
      "Santander",
      "Nubank",
      "Bradesco",
      "Inter",
    ],
    required: true,
  },
  Usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

const Conta = mongoose.model("Conta", contaSchema);

export default Conta;
