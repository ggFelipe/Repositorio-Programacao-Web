const sal = number(prumpt("Digite o Salario"))
const pcs = number(prumpt("Digite a porcentagem do aumento em inteiros(sem %)"))



let resultado = sal * (1+(pcs/100))
document.write(resultado)