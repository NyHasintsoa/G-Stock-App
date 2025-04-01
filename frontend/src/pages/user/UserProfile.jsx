import useAccount from "../../hooks/useAccount.js";

function UserProfile() {
  const { account } = useAccount();

  return (
    <>
      <h1>User Profile</h1>
      <p>{account.email}</p>
    </>
  );
}

export default UserProfile;
