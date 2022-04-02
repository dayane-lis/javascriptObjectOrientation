export class Cliente{
    nome;
    _cpf; 
    
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){  //para propriedades que serão atribuidas e não serão mais alteradas se usa o constructor, sendo a inicialização de atributos a principal responsabilidade do construtor.
        this.nome = nome;
        this._cpf =cpf;
    }
}