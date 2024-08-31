class Cliente {

    Construtor(senha, email, nome_usuario){
    this.senha = senha;
    this.email = email; 
    this.nome_usuario = nome_usuario;
    }

    criar(senha, email, nome_usuario){
        this.senha = senha;
        this.email = email;
        this.nome_usuario = nome_usuario;

    }

    ler(){
        return {
            senha: this.senha,
            email: this.email,
            nome_usuario: this.nome_usuario,
        }
    }

    atualizar(senha, email, nome_usuario){
        if (senha !== undefined) this.senha = senha;
        if (email !== undefined) this.email = email;
        if (nome_usuario !== undefined) this.nome_usuario = nome_usuario;
    }

    deletar() {
        this.senha = null;
        this.email = null;
        this.nome_usuario = null;
    }
}
    export default Cliente;
