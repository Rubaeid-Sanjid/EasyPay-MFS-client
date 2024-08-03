import Swal from "sweetalert2";
import useAuth from "../Component/Hooks/useAuth";
import { Link } from "react-router-dom";

const Registration = () => {
  const { createUser, updateUser } = useAuth();

  const handleRegistration = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pin = e.target.pin.value;
    const password = pin + "MFS";

    createUser(email, password)
      .then((res) => {
        if (res.user) {
          updateUser(e.target.name.value).then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your have been registered",
              showConfirmButton: false,
              timer: 1500,
            });
            console.log(res.user);
          });
        }
      })
      .catch((err) => console.log(err));

    const userInfo = {
      user_name: e.target.name.value,
      user_phone: e.target.phone.value,
      user_email: email,
      user_pin: pin,
      user_status: "Pending",
      balance: 0,
    };
    console.log(userInfo);
  };
  return (
    <>
      <div className="bg-gradient-to-r from-[#87CEEB] to-[#ADD8E6] min-h-screen flex items-center">
        <div className="hero-content gap-10 mx-auto">
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
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
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
              </div>
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
                <button className="btn bg-[#ADD8E6] text-lg">Register</button>
              </div>
              <h4 className="text-center">
                Already have an account ?{" "}
                <Link to={"/"} className="text-blue-600 font-semibold">
                  Login
                </Link>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
