type User = {
  name: String,
  email: String,
  address: {
    city: string,
    state?: string, // ? siginifica que o campo não é obrigatório no objeto
  },
};
function showWelcomeMessage(user: User) {
  // digo para o parâmetro user, seguir o formato do objeto declarado acima.
  return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.city} and your state is ${user.state}`;
}
showWelcomeMessage({
  name:'Davi',
  email:'davi@gmail',
  addres: {
    city: 'xaxim',
    state: 'sc'
  }
});
// to-do - adicionar cidade e UF no retorno da função acima

// typescript- permite adicionar tipagens que estou esperando dentro de uma função ou retornar de uma função
// javascript possui tipagem dinamica fraca e se passar para uma função que aceita uma string um numero ele não vai dar erro
