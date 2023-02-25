const sal = Number(prompt("Digite o Salario"))
const pcs = Number(prompt("Digite a porcentagem do aumento em inteiros(sem %)"))



let resultado = sal * (1+(pcs/100))
document.write(resultado)