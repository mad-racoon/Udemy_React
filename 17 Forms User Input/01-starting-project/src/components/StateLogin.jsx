import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@"); //didEdit.email => will be true after editing so we give some time to user until they type in something. even though they typed in something and it doesn't have @ sign, it's invalid

  function handleSubmit(event) {
    event.preventDefault();

    if (emailIsInvalid) {
      return; //safe clause; - secure that any http request will not be sent if the validation is invalid
    }

    console.log(enteredValues);
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  // a more generic and versatile change handling function
  function handleChangeValues(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    // when user start to type a value again, the validation goes away
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  }

  // onBlur fires when it lost the focus
  function handleInputBlur(identifier) {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) =>
              handleChangeValues("email", event.target.value)
            }
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleChangeValues("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
