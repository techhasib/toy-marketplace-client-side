import { useContext } from "react";
import img from "../../../assets/g.png";
import { AuthContext } from "../../../providers/AuthProviders";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex justify-center pb-5">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline "
        >
          <img src={img} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
