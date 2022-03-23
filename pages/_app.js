import Navigation from '../components/Navigation'
import '../styles/globals.css'

const items = [
  { href: "/", label: "Home"},
  { href: "/about", label: "About"},
  { href: "/posts/1", label: "Post 1"}
]

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation items={items} />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
