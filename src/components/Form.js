export default function Form() {

    function createUser(e) {
        e.preventDedault();
        alert(`Cadastrou o usuario!`);
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={createUser}>
                <div>
                    <input type="text" placeholder="Digite seu nome..." required />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}