import { useState } from "react";
import { useRouter } from "next/router";

const RegistrationForm = ({ formId, userForm }) => {
  const router = useRouter(); // will be used to route user to next page after registration
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [user, setUser] = useState({
    email: userForm.email,
    password: userForm.password,
  });

  //post method adds a new entry in mongodb
  const postData = async (user) => {
    try {
      const res = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(user),
      });

      // throw error with status code in case fetch api req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      // route user to homepage (root route)
      router.push("/");
    } catch (error) {
      setMessage("Failed to register user");
    }
  };

  // handle event changes made by user and update state of user object
  function handleChange(event) {
    // object destructuring to grab value and name of event changed
    const { name, value } = event.target;

    // update user object accordingly
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  // make sure email and password is filled - validate form
  const formValidate = () => {
    let err = {};
    if (!user.email) err.email = "Email is required";
    if (!user.password) err.password = "Password is required";
    return err;
  };

  // handle form submission by validating form and making post request
  const handleSubmit = (e) => {
    // prevent page from refreshing on submit
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      postData(user);
    } else {
      setErrors({ errs });
    }
  };

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default RegistrationForm;
