import Image from "next/image";
export default function ChatItem({ message,color,icon,username }) {
    return (

        <div className="baloon animationToLeft" >
            <div className="name" style={{backgroundColor:color}}><Image src={icon} width={18} height={18} alt="icon" />{username}</div>
            <div className="message" >
                {message}
            </div>
        </div>


    )
}