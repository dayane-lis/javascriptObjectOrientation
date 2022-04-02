import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    //atributos
    static numeroDeContas = 0; //precisamos usa static para que funcione nossa soma do total de contas abertas, independente do cliente.
    agencia;
    _cliente;
    //#saldo = 0; //proposta para tornar um campo privado, foi aprovada em fevereiro deste ano, 2022.
    _saldo = 0; //por convenção se usa underline para sinalizar que aquele campo não pode ser acessado e nem alterado.


    //acessores
    set cliente(novoValor){
        if(novoValor instanceof Cliente);
        this._cliente = novoValor;
    }

    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1; //como queremos saber quantas contas, colocamos ContaCorrente no lugar do this., do contrario o resultado será NaN }


    //métodos
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;            
        }
        this._saldo += valor;
    }

    //tbm pode ser escrito da seguinte forma:
    depositar(valor) {
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}