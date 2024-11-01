var document = [1, 2, 3, 4, 5];
for(var prop in document) {
console.log(prop+" <br/>");
}

// Esse laço automaticamente itera pelas propriedades do objeto,
// No caso ele listara todas as propriedades do objeto Document
// responsavel pelo controle do documento exibido na tela.
// Se olhar com cuidado encontrará nessa lista o proprio método
// Write que usamos para imprimir no documento com document.write.
