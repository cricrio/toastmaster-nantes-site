import { useRouter } from "next/router";
import { useAuth } from "@nhost/react-auth";

function privateRoute(Component) {
  return (props) => {
    const router = useRouter();
    const { signedIn } = useAuth();
    // wait to see if the user is logged in or not.
    if (signedIn === null) {
      return <div>Checking auth...</div>;
    }

    if (!signedIn) {
      router.push("/login");
      return <div>Redirecting...</div>;
    }

    return <Component {...props} />;
  };
}

export default privateRoute;
