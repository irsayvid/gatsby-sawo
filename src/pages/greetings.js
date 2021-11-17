import * as React from 'react'

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const paragraphStyles = {
  marginBottom: 48,
}

// markup
const GreetingsPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Hurrah!</h1>
      <p style={paragraphStyles}>
        You're successfully logged in!
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
    </main>
  )
}

export default GreetingsPage
