import React from "react";

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <div>
          <input type='text' name='username' placeholder="Create Username"></input>
        </div>
        <div>
          <input type='password' name='password' placeholder="Create Passsword" />
        </div>
        <input type='submit' value='Create Account' />
      </form>
    </div>
  )
}

export default SignUp