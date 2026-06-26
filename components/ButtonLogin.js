import Link from "next/link";
const ButtonLogin = (props) => {
  const { isLoggedIn, name, extraStyle } = props;

  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Go to Dashboard, {name}
      </Link>
    );
  } else {
    return <button>Login</button>;
  }
};

export default ButtonLogin;
