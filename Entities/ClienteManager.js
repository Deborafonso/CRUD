export class ClienteManager{
    
    constructor() {
        this.clientes = [];
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }

    removerCliente(email) {
        this.clientes = this.clientes.filter(cliente => cliente.email().email !== email);
    }

    buscarCliente(email) {
        return this.clientes.find(cliente => cliente.email !== email);
    }
}

