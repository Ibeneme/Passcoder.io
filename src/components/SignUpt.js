import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Svg from "./svg/Component 1154.svg";

const SignUpFree = () => {

 
  
  const [newUser, setnewUser] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    country: "",
    dateofbirth: "",
    phonenumber: "",
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function handleChange(e) {
    let userData = e.target.value;
    setnewUser({ ...newUser, [e.target.name]: userData });
  }

  function handleSumit(e) {
    e.preventDefault();
    
    setError(error);
    console.log(newUser);
    navigate("/signup");
  }

  return (
    <div className="max-w-[700px]  mx-auto my-16 p-4">
      <div>
        {/* I had a had time centering the logo as an image 
          so i put the logo inside of a paragraph element */}
        <p
          style={{ color: "#292482", fontWeight: "bold" }}
          className="py-1 flex content-center justify-center text-center "
        >
          <img
            className="py-1 flex content-center justify-center w-10"
            alt={Svg}
            src={Svg}
          />
        </p>
        <h1 className="text-2xl text-center font-bold py-2 mt-2">
          Sign up for Passcoder (Step 1 0f 2)
        </h1>
        <p
          style={{ color: "gray", fontWeight: "bold" }}
          className="py-1 text-center "
        >
          Already have an account yet?{" "}
          <Link
            to="/signin"
            style={{ color: "#292482", fontWeight: "bold" }}
            className="underline"
          >
            Sign in.
          </Link>
        </p>
      </div>
      <br />

        {/* I Defined my error */}
      {error ? (
        <div
          style={{
            width: "100%",
            backgroundColor: "rgba(255, 0, 0, 0.122)",
            paddingRight: "1em",
            paddingLeft: "1em",
            paddingBottom: "0.5em",
            borderLeft: "red solid 0.3em",
            paddingTop: "0.5em",
          }}
        >
          <p style={{ color: "red" }}>
            Please reconfirm your details and Re-Submit
          </p>
        </div> ) : (
        <p style={{ fontSize: "0.8em", color: "blue" }}> </p>
      )}

      <br />
      <form onSubmit={handleSumit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">First Name</label>
          <input
            value={newUser.firstname}
            name="firstname"
            type="text"
            className="border p-3  bg-gray-200 placeholder-gray-350"
            required
            onChange={handleChange}
            placeholder="Enter your First Name"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Last Name</label>
          <input
            value={newUser.lastname}
            name="lastname"
            type="text"
            className="border p-3  bg-gray-200 placeholder-gray-350"
            required
            placeholder="Enter your last Name"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Middle Name</label>
          <input
            value={newUser.middlename}
            name="middlename"
            type="text"
            className="border p-3 bg-gray-200 placeholder-gray-350"
            required
            placeholder="Enter your Middle Name"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Country</label>
          <select
            name="country"
            className="border p-3  bg-gray-200 placeholder-gray-350"
            required
            onChange={handleChange}
            placeholder="Enter your Country"
            value={newUser.country}
          >
            <option className="gray-350">Choose your Country</option>
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Date of Birth</label>
          <input
            value={newUser.dateofbirth}
            name="dateofbirth"
            type="date"
            className="border p-3 bg-gray-200 date:text-gray-350"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Phone Number </label>
          <input
            value={newUser.phonenumber}
            name="phonenumber"
            type="number"
            min="11"
            className="border p-3 bg-gray-200 placeholder-gray-350"
            required
            onChange={handleChange}
            placeholder="Enter your phone number, Numbers Only"
          />
        </div>

        <br />
        <button className="border border-blue-500 bg-[#292482] hover:bg-blue-500 w-full p-4 my-2 text-white">
          Next
        </button>
        <br />
        <br />
        <br />
        {error ? (
          <div
            style={{
              width: "100%",
              backgroundColor: "rgba(255, 0, 0, 0.122)",
              paddingRight: "1em",
              paddingLeft: "1em",
              paddingBottom: "0.5em",
              borderLeft: "red solid 0.3em",
              paddingTop: "0.5em",
            }}
          >
            <p style={{ color: "red" }}>
              Please reconfirm your details and Re-Submit
            </p>
          </div>
        ) : (
          <p style={{ fontSize: "0.8em", color: "blue" }}> </p>
        )}
      </form>
    </div>
  );
};

export default SignUpFree;
