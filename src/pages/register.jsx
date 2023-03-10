import RegistrationForm from "components/registrationForm";

const NewUser = () => {
  const userForm = {
    email: "",
    password: "",
  };

  return <RegistrationForm formId="add-user-form" userForm={userForm} />;
};

export default NewUser;
