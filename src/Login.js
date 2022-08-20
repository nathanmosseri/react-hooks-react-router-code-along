import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type='text' name='username' placeholder="Username"></input>
        </div>
        <div>
          <input type='password' name='password' placeholder="passsword" />
        </div>
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default Login