import { userIcon } from "../../utils/constants";

function UserComponent() {
  return (
    <>
      <div className="user-container">
        <img width={"35px"} height={"35px"} src={userIcon} alt="user" />
      </div>
    </>
  );
}

export default UserComponent;
