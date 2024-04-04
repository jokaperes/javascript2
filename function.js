const students = [
    {
        nome: "Joaquim",
        nota1: 10,
        nota2: 3
    },
    {
        nome: "Maria",
        nota1: 8,
        nota2: 7
    },
    {
        nome: "Pedro",
        nota1: 9,
        nota2: 5
    },
    {
        nome: "Ana",
        nota1: 7,
        nota2: 8
    }
];

console.log("teste")

function nota (x, y){
    let media

    media = ((x + y) / 2)

   return media

}

for(i = 0; i < students.length; i++){
    let media = nota(students[i].nota1, students[i].nota2)

    if(media > 7){
        alert("a media do" + students[i].nome + "eh " + media + "e foi aprovado")
    }
    else{
        alert("a media do" + students[i].nome + "eh " + media + "e foi reprovado")
    }

}