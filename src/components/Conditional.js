import { useState } from "react";

export default function Conditional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function sendEmail(e){
        e.preventDefault();
        setUserEmail(email);
    }

    function clearEmail(){
        setUserEmail('');
    }

    return (
        <div>
            <h2>Cadastro Condicional</h2>
            <form>
                <label htmlFor="email">E-mail:</label>
                <input type="email" placeholder="Digite seu email... " onChange={(e) => setEmail(e.target.value)} />
                <button onClick={sendEmail}>Enviar Email</button>
                {userEmail && (
                    <div>
                        <p>O email do usuario eh: {userEmail}</p>
                        <button onClick={clearEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
          
        </div>
    )
}