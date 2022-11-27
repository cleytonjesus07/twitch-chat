export default function chatContainer({ children }) {
    return (
        <div className="chat-container">
            <div className="chat">
                {children}
            </div>
        </div>
    )
}