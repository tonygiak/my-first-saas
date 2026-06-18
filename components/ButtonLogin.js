import Link from "next/link";
const ButtonLogin = (props) => {
  const { isLoggedIn, name } = props;
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Go to Dashboard, {name}
      </Link>
    );
  } else {
    return <button>Login</button>;
  }
};

export default ButtonLogin;
