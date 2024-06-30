import { FormEvent, useRef } from 'react'

const LoginForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    

    console.log("Username:", usernameRef.current?.value)
    console.log("Password:", passwordRef.current?.value)
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <input ref={usernameRef} type="text" className="form-control" name="username" placeholder="Username..." />
      </div>
      <div className="mb-3">
        <input ref={passwordRef} type="text" className="form-control" name="password" placeholder="Password..." />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm