import { Link } from "react-router-dom";
import useAuth from "../../Component/Hooks/useAuth";
import Swal from "sweetalert2";

const SignIn = () => {
  const { loginUser } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pin = e.target.pin.value;
    const password = pin + "MFS";

    loginUser(email, password).then((res) => {
      if (res.user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are Logged In",
          showConfirmButton: false,
          timer: 1500,
        });
        // console.log(res.user):
      }
    });
  };
  return (
    <>
      <div className="bg-gradient-to-r from-[#87CEEB] to-[#ADD8E6] min-h-screen flex items-center">
        <div className="hero-content gap-40 mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Welcome to <span className="text-blue-600">EasyPay</span>!
            </h1>
            <p className="py-6">
              Experience seamless transactions with just a few clicks. Sign up
              now!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile Number</span>
                </label>
                <input
                  type="text"
                  placeholder="your phone number"
                  className="input input-bordered"
                  name="phone"
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                  }
                  maxLength={11}
                  required
                />
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PIN</span>
                </label>
                <input
                  type="password"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={5}
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="set a 5-digit pin"
                  className="input input-bordered"
                  name="pin"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#ADD8E6] text-lg">Login</button>
              </div>
              <h4 className="text-center">
                Don't have an account ?{" "}
                <Link to={"/"} className="text-blue-600 font-semibold">
                  Register Now!
                </Link>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
