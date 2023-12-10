import { AiFillQuestionCircle } from "react-icons/ai";

import { useState } from "react";
import Modal from "../../components/modal/Modal";
import "./Login.scss";
import { day, month } from "../../Faker/dmy.js";

const year = Array.from(
  { length: new Date().getFullYear() - 1900 },
  (a, i) => 1901 + i
).reverse();

const Login = () => {
  const [modal, setModal] = useState(false);

  const [input, setInput] = useState({
    first_name: "",
    sur_name: "",
    moe: "",
    password: "",
    day: "",
    month: "",
    year: "",
    gender: "",
  });
  const [border, setBorder] = useState({
    first_name: true,
    sur_name: true,
    moe: true,
    password: true,
    day: true,
    month: true,
    year: true,
    gender: true,
  });

  // handle bordered
  const handleBorderBlured = (e) => {
    if (e.target.value === "") {
      setBorder((prevState) => ({
        ...prevState,
        [e.target.name]: false,
      }));
    } else {
      setBorder((prevState) => ({
        ...prevState,
        [e.target.name]: true,
      }));
    }
  };
  // handle input value
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {modal && (
        <Modal hide={setModal}>
          <form action="" onSubmit={handleSubmit}>
            <div className="sing-up-form">
              <div className="auth-name">
                <input
                  className={border.first_name ? "" : "border"}
                  onBlur={handleBorderBlured}
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  value={input.first_name}
                  onChange={handleInputChange}
                />
                <input
                  className={border.sur_name ? "" : "border"}
                  onBlur={handleBorderBlured}
                  type="text"
                  placeholder="Surname"
                  name="sur_name"
                  value={input.sur_name}
                  onChange={handleInputChange}
                />
              </div>
              <input
                className={border.moe ? "" : "border"}
                onBlur={handleBorderBlured}
                type="text"
                placeholder="Mobile number or email address"
                name="moe"
                value={input.moe}
                onChange={handleInputChange}
              />
              <input
                className={border.password ? "" : "border"}
                onBlur={handleBorderBlured}
                type="text"
                placeholder="New password"
                name="password"
                value={input.password}
                onChange={handleInputChange}
              />
              <div className="form-ex-content">
                <span className="form-title">
                  Date of birth <AiFillQuestionCircle />
                </span>

                <div className="form-opt">
                  <select
                    id=""
                    name="day"
                    value={input.day}
                    onChange={handleInputChange}
                  >
                    <option value="">Day</option>
                    {day?.map((item, index) => (
                      <option
                        key={index}
                        selected={new Date().getDate() === item ? true : false}
                      >
                        {" "}
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    id=""
                    name="month"
                    value={input.month}
                    onChange={handleInputChange}
                  >
                    <option value="">Month</option>
                    {month?.map((item, index) => (
                      <option
                        key={index}
                        selected={
                          new Date().getMonth() === index ? true : false
                        }
                      >
                        {" "}
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    id=""
                    name="year"
                    value={input.year}
                    onChange={handleInputChange}
                  >
                    <option value="">Year</option>
                    {year?.map((item, index) => (
                      <option
                        key={index}
                        selected={
                          new Date().getFullYear() === item ? true : false
                        }
                      >
                        {" "}
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="form-title">
                  Gander <AiFillQuestionCircle />
                </span>

                <div className="form-opt">
                  <label>
                    <span>Male</span>
                    <input
                      name="gander"
                      type="radio"
                      value="Male"
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <span>Female</span>
                    <input
                      name="gander"
                      type="radio"
                      value="Female"
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <span>Custom</span>
                    <input
                      name="gander"
                      type="radio"
                      value="Custom"
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
              <div className="form-text">
                <p>
                  People who use our service may have uploaded your contact
                  information to Facebook. <a href="">Learn more</a>.
                </p>
                <p className="butom-p">
                  By clicking Sign Up, you agree to our{" "}
                  <a href="">Terms,Privacy Policy</a>, and Cookies Policy. You
                  may receive SMS notifications from us and can opt out at any
                  time.
                </p>
              </div>
              <div className="button-area">
                <button type="submit" onSubmit={handleSubmit}>
                  Sing Up
                </button>
              </div>
            </div>
          </form>
        </Modal>
      )}

      <div className="main">
        <div className="container">
          <div className="left-content">
            <div className="img-content">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                alt=""
              />
            </div>
            <div className="text-content">
              <h4>
                Facebook helps you connect and share with the people in your
                life.
              </h4>
            </div>
          </div>
          <div className="main-right-content">
            <div className="right-content">
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Email address or phone number"
                />
                <input type="text" placeholder="Password" />
                <button type="submit">Log in</button>
              </form>
              <div className="buttom-content">
                <div className="forgatPass">
                  <a>Forgotten password?</a>
                </div>
                <div className="divider"></div>
                <div className="create-account">
                  <button onClick={() => setModal(true)}>
                    Create new account
                  </button>
                </div>
              </div>
            </div>
            <p>
              <a href="">Create a Page </a>for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-container"></div>
    </>
  );
};

export default Login;
