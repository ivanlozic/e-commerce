import { useState } from 'react'

const SignInPage = (): JSX.Element => {
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
    <div>
      <form>
        <div>
          <label>Enter your email</label>
          <input value={email} onChange={handleEmailChange} />
        </div>
        <button onClick={handleContinueClick}>Continue</button>
      </form>

      {isValidEmail && showPasswordInput && (
        <div>
          <label>Enter your password</label>
          <input type='password' />
        </div>
      )}

      <p>New customer?</p>
      <button>Create your account</button>
    </div>
  )
}

export default SignInPage
