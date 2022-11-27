export default function ChatContainer({ children }) {
    return (
        <div className="chat-container">
            <div className="chat">
                {children}
            </div>
        </div>
    )
}