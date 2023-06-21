import React, { useState } from 'react'

const SignUpPage = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const validateName = (name: string): string | null => {
    if (!name) {
      return 'Name is required'
    }
    return null
  }

  const validateEmail = (email: string): string | null => {
    if (!email) {
      return 'Email is required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Invalid email format'
    }
    return null
  }

  const validatePassword = (password: string): string | null => {
    if (!password) {
      return 'Password is required'
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters long'
    }
    return null
  }

  
  const validatePasswordConfirmation = (confirmation: string): string | null => {
    if (password !== confirmation) {
      return 'Passwords do not match';
    }
    return null;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const nameError = validateName(name)
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)
    const confirmationError = validatePasswordConfirmation(confirmPassword)

    if (!nameError && !emailError && !passwordError && !confirmationError) {
      console.log('Form submitted successfully')
    }
  }

  return (
    <div className='signUpContainer'>
      <h1>Create account</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Your name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          {validateName(name) && <span>{validateName(name)}</span>}
        </div>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          {validateEmail(email) && <span>{validateEmail(email)}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {validatePassword(password) && (
            <span>{validatePassword(password)}</span>
          )}
        </div>
        <div>
          <label>Re-enter password</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
              {validatePasswordConfirmation(confirmPassword) && (
            <span>{validatePasswordConfirmation(confirmPassword)}</span>
          )}
        </div>
        <button type='submit'>Continue</button>
      </form>
    </div>
  )
}

export default SignUpPage
