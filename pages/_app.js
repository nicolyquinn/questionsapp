import MainContainer from '../components/MainContainer'
import '../styles/globals.css'
import NextProgress from "next-progress";
import styles from "../styles/Home.module.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NextProgress />
      <MainContainer>
      <Component {...pageProps} />
      </MainContainer>
    </div>
  )
}

export default MyApp
