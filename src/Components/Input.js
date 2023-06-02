import React, { useState } from "react";
import "./Input.css";
const styles = {
  main: {
    width: "49%",
  },
};

export default function Input() {
  const [message, setMesssage] = useState("Not Matching");

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  let name, value;

  // inserting data in Local storage starting
  const handle = () => {
    localStorage.setItem("First_name", fname);
    localStorage.setItem("Last_name", lname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Mobile", mobile);
    localStorage.setItem("Password", password);
  };
  //local storage ending

  //Function for confirming password
  const check = () => {
    if (
      document.getElementById("password").value ==
      document.getElementById("confirm_password").value
    ) {
      setMesssage("Matched");
    } else {
      setMesssage("Not matched");
    }
  };
  //end of check function

  return (
    <>
      <section className="services gradient-custom" id="services">
        <h2>Book Tickets</h2>
        <div className="services-container" style={styles.main}>
          <div className="services-box">
            <div className="container my-4 rounded">
              <form>
                <div className="row mb-4 my-5">
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" for="form3Example1">
                        First name
                      </label>
                      <input
                        type="text"
                        id="form3Example1"
                        name="fname"
                        minlength="5"
                        required
                        className="form-control"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" for="form3Example2">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="form3Example2"
                        name="lname"
                        required
                        className="form-control"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    name="email"
                    required
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example3">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    pattern="[1-9]{1}[0-9]{9}"
                    maxLength="10"
                    name="mobile"
                    id="form3Example3"
                    required
                    className="form-control"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    name="passsword"
                    id="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]).{8,}"
                    required
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example4">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    id="confirm_password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]).{8,}"
                    required
                    className="form-control"
                    onChange={check}
                  />
                  <span>{message}</span>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4 text-center"
                    onClick={handle}
                  >
                    Submit
                  </button>
                </div>
              </form>

              {localStorage.getItem("First_name") && (
                <div>
                  Welcome <p>{localStorage.getItem("First_name")}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
