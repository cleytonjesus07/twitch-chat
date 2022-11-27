import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import ChatContainer from "../components/ChatContainer"
import ChatItem from "../components/ChatContainer/ChatItem"
import Info from "../components/Info"
import MessageBox from "../components/MessageBox"
import { userContext } from "../context/userCtx";
import { pb } from "../context/pocketbase";


export default function Home() {
  const router = useRouter();
  const { chosen } = useContext(userContext)
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({});
  const [showInfoType, setShowInfoType] = useState(false);
  const chatItemsRef = useRef();

  useEffect(() => {
    if (!chosen || typeof window === "undefined") {
      router.push("/createuser");
      return;
    }

    pb.autoCancellation(false);
    const auth = async () => {
      getAllMessages()
    }
    auth()
    pb.realtime.subscribe('chat', (e) => {
      console.log(e)
      getAllMessages()
    })
    return () => pb.realtime.unsubscribe('chat');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])





  async function getAllMessages() {
    const res = await pb.collection('chat').getList();
    setMessages(res.items)
  }


  async function sendMessage(message) {
    await pb.collection('chat').create(message)
  }

  useEffect(() => {
    if (Object.keys(message).length === 0) return;
    sendMessage(message);
  }, [message])



  useEffect(() => {
    scrollDown();
  }, [messages])

  function scrollDown() {
    const listChat = chatItemsRef.current;
    setTimeout(() => {
      listChat?.scroll({
        top: listChat.scrollHeight,
        left: 0,
        behavior: 'smooth'
      })
    }, 100);
  }



  return (
    <div>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Chat like twitch</title>
      </Head>
      <ChatContainer>
        <Info showInfoType={showInfoType} />
        <div ref={chatItemsRef} className="chat-items" >
          {messages?.map(({ message, icon, color, username }, index) => {
            return <ChatItem key={index} message={message} icon={icon} color={color} username={username} />
          })}
        </div>
        <MessageBox chosen={chosen} messages={messages} setMessage={setMessage} setShowInfoType={setShowInfoType} />
      </ChatContainer>
    </div>
  )

}








