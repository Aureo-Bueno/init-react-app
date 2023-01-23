import { useState } from "react";

export default function Form() {

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    function createUser(e) {
        e.preventDedault();
        alert(`Cadastrou o usuario! Nome: ${name}, Senha: ${password} `);
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome..." required onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha..." required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}