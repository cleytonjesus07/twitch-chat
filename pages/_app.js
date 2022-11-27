import UserContext from '../context/UserContext'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
  )
}

export default MyApp
