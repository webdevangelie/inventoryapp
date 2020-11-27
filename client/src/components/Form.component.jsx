import React from "react"

import styled from "styled-components"

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input[type="submit"] {
    width: 150px;
    margin-top: 15px;
  }

  input {
    display: block;
    margin-top: 5px;
  }

  label {
    margin-top: 15px;
  }
`

const Form = () => (
  <FormWrapper>
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
  </FormWrapper>
)

export default Form
