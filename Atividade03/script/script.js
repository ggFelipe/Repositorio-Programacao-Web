const sal = number(prompt("Digite o Salario"))
const pcs = number(prompt("Digite a porcentagem do aumento em inteiros(sem %)"))



let resultado = sal * (1+(pcs/100))
document.write(resultado)