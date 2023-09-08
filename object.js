let pessoas = [
    {
        nome: "Pedro",
        idade: 22,
        profissao: "Pedreiro",
        cidade: "Pau dos Ferros"
    },
    {
        nome: "João",
        idade: 42,
        profissao: "Engenheiro Civil",
        cidade: "Fortaleza"
    },
    {
        nome: "Maria",
        idade: 27,
        profissao: "Advogada",
        cidade: "Salvador"
    },
    {
        nome: "Felipe",
        idade: 33,
        profissao:"desempregado",
        cidade: "Natal"
    }
];

for(const pessoa of pessoas){
    for(const key in pessoa){
        console.log(`${key} : ${pessoa[key]}`)
    }
    console.log("")
}