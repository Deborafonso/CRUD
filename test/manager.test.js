import { describe, it, expect } from 'vitest';
import { Cliente } from './Cliente.js';
import { ClienteManager } from './ClienteManager.js';

describe('ClienteManager', () => {
    it('deve adicionar um cliente à lista de clientes', () => {
        const manager = new ClienteManager();
        const cliente = new Cliente('senha123', 'email@dominio.com', 'usuario');
        manager.adicionarCliente(cliente);
        expect(manager.buscarCliente('email@dominio.com')).toBe(cliente);
    });

    it('deve remover um cliente da lista com base no email', () => {
        const manager = new ClienteManager();
        const cliente = new Cliente('senha123', 'email@dominio.com', 'usuario');
        manager.adicionarCliente(cliente);
        manager.removerCliente('email@dominio.com');
        expect(manager.buscarCliente('email@dominio.com')).toBeUndefined();
    });

    it('deve buscar um cliente na lista pelo email', () => {
        const manager = new ClienteManager();
        const cliente = new Cliente('senha123', 'email@dominio.com', 'usuario');
        manager.adicionarCliente(cliente);
        expect(manager.buscarCliente('email@dominio.com')).toBe(cliente);
    });

    it('deve retornar undefined para um email que não existe na lista', () => {
        const manager = new ClienteManager();
        expect(manager.buscarCliente('email@naoexiste.com')).toBeUndefined();
    });
});
