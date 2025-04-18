import { ProfileData } from "../data";

const Contact = () => {
  return (
    <>
      <div>Contact</div>
      <div>Phone : {ProfileData.phone}</div>
      <div>Email : {ProfileData.email}</div>
    </>
  );
};

export default Contact;
