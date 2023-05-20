import Link from 'next/link'
import { useState } from 'react'

const LogInPage = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [showPasswordInput, setShowPasswordInput] = useState(false)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = event.target.value
    setEmail(enteredEmail)
  }

  const handleContinueClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsValidEmail(validateEmail(email))
    setShowPasswordInput(true)
  }

  const validateEmail = (email: string) => {
    return email.includes('@')
  }

  return (
    <div className='container'>
      <h1>Log in</h1>
      <form>
        <div>
          <label>Enter your email</label>
          <input value={email} onChange={handleEmailChange} />
        </div>
        {isValidEmail && showPasswordInput && (
          <div>
            <label>Enter your password</label>
            <input type='password' />
          </div>
        )}
        <button onClick={handleContinueClick}>Continue</button>
      </form>

      <p>New customer?</p>

      <Link href='/signUpPage'>
        <button>Create your account </button>
      </Link>
    </div>
  )
}

export default LogInPage
