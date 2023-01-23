export default function Event({ number }) {
    function myEvent() {
        alert(`Fui ativado! ${number}`);
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={myEvent}>Ativar</button>
        </div>
    )
}