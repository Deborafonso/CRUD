import { Cliente } from './entities/cliente.js'
import { ClienteManager } from './entities/clienteManager.js'


// Criar o ClienteManager
const manager = new ClienteManager()


// Criação dos Clientes
const cliente1 = new Cliente()
cliente1.criar('senha123', 'email1@email.com', 'Usuário 1')


const cliente2 = new Cliente()
cliente2.criar('senha456', 'email2@email.com', 'Usuário 2')


console.log('Clientes criados:')
console.log(cliente1.ler())
console.log(cliente2.ler())


// Adicionar Clientes ao ClienteManager
console.log('\n\nAdicionando clientes ao gerenciador...')
manager.adicionarCliente(cliente1)
manager.adicionarCliente(cliente2)


// Verificando Clientes no ClienteManager
console.log('\n\nClientes no gerenciador:')
console.log(manager.clientes)


// Atualizar um cliente
console.log('\n\nAtuzlizando cliente 1')
cliente1.atualizar('senha1123', 'email11@email.com', 'Usuário 11')
console.log(cliente1.ler())


// Buscando o cliente pelo email
console.log('\n\nBuscando cliente pelo email')
const clienteBuscado = manager.buscarCliente('email11@email.com')
console.log(clienteBuscado ? clienteBuscado.ler() : "Cliente não encontrado")


// Removendo um cliente
console.log('\n\nRemovendo cliente 2')
manager.removerCliente('email2@email.com')
console.log('Cliente no gerenciador após remoção')
console.log(manager.clientes)


// Deletando atributos do cliente
console.log('\n\nDeletando atributos do cliente 1')
cliente1.deletar()
console.log(cliente1.ler())
