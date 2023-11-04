import NavBar from './LandingNavBar'

function Landing() {
  const attr = [
    { title: 'Log In', url: '/login' },
    { title: 'Sign Up Free', url: '/signup' },
  ]

  return (
    <div>
      <NavBar attr={attr} pos={'End'} />
    </div>
  )
}

export default Landing
