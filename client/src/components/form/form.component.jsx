import React from "react"

import "./form.css"

const Form = () => (
  <form>
    <label>
      Username:
      <input type="text" name="username" />
    </label>
    <label>
      Password:
      <input type="password" name="password" />
    </label>
    <input type="submit" value="Sign In" />
    <input type="submit" value="Sign Up" />
  </form>
)

export default Form
