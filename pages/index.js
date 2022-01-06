import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Second from '../components/Second'
import Third from '../components/Third'

export default function Home() {
  return (
    <div className="mb-[10rem]">
      <NavBar />
      <Hero />
      <Second />
      <Third />
    </div>
  )
}
