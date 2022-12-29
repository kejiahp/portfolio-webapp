import Head from 'next/head'
import NavBar from '../src/components/NavBar'
import Welcome from '../src/components/Welcome'

export default function Home() {
  return (
    <>
      <NavBar />
      <Welcome />
    </>
  )
}
