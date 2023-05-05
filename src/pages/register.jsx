import RegistrationForm from "components/RegistrationForm";

const NewUser = () => {
  const userForm = {
    email: "",
    password: "",
  };

  return <RegistrationForm formId="add-user-form" userForm={userForm} />;
};

export default NewUser;
