const usuarios = [
{ nome: "Ana", ativo: true },
{ nome: "Carlos", ativo: false },
{ nome: "Bruna", ativo: true }
];

const resultado = usuarios.map(usuarios => 
    `${usuarios.nome} - ${usuarios.ativo ? "Ativo" : "Inativo"}`
);

console.log(resultado)