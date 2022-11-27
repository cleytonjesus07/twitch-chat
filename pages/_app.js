import UserContext from '../context/userCtx'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
  )
}

export default MyApp
