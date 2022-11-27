import { useRef } from "react"

export default function messageBox({  chosen, setMessage, setShowInfoType }) {
    const InputRef = useRef();
    return (
        <form className="form-chat" id="form-chat">
            <input ref={InputRef} className="chat-input" id="inputMessage" placeholder="Envie uma mensagem... :D"
                onChange={(e) => (e.target.value.length > 0) ? setShowInfoType(true) : setShowInfoType(false)}
                onBlur={() => setShowInfoType(false)}
            />
            <button type="button" onClick={() => send(InputRef, setMessage, chosen)}>Enviar</button>
        </form>
    )
}

function send(inputRef, setMessage, chosen) {
    if (inputRef.current.value.length <= 0) {
        return;
    }

    let message = inputRef.current.value;
    inputRef.current.value = "";
    setMessage({ ...chosen, message });

}