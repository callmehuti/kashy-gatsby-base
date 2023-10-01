import React, { FC } from "react";
import { useState } from "react";
import axios from "axios";

const HPQuotingForm: FC = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registration, setRegistration] = useState("");
  const [comments, setComment] = useState("");

  function sendMail() {
    if (
      fullName &&
      address &&
      email &&
      phoneNumber &&
      registration &&
      comments
    ) {
      axios
        .post("http://localhost:8001/sendEmail", {
          fullName,
          address,
          email,
          phoneNumber,
          registration,
          comments,
        })
        .then(() => alert("Message sent Successfully"))
        .catch((error) => alert(error.Message));
      return;
    }
    return alert("Fill in all the fields to continue");
  }

  console.log(setFullName);

  return (
    <div className="form">
      <form action="#" id="form" autoComplete="off">
        {/* Form Group 1: Full Name */}
        <div className="form-group">
          <label htmlFor="full-name" className="form-group__label">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="fullname"
            className="form-group__input"
            placeholder="Enter full name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Form Group 2: Address */}
        <div className="form-group">
          <label htmlFor="address" className="form-group__label">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-group__input"
            placeholder="Enter address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Form Group 3: Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-group__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-group__input"
            placeholder="Enter email"
            value="info@kashy.com.au"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Form Group 4: Phone */}
        <div className="form-group">
          <label htmlFor="phone" className="form-group__label">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phonenumber"
            className="form-group__input"
            placeholder="Enter phone"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {/* Form Group 5: Rego/VIN */}
        <div className="form-group">
          <label htmlFor="rego-vin" className="form-group__label">
            Rego/VIN
          </label>
          <input
            type="text"
            id="registration"
            name="registration"
            className="form-group__input"
            placeholder="Enter Rego/VIN"
            onChange={(e) => setRegistration(e.target.value)}
          />
        </div>

        {/* Form Group 6: Service Selecting */}
        <div className="form-group">
          <div className="form-group__label">What does your car need?</div>
          <select
            className="form-group__serivces"
            name="serviceType"
            id="service-type"
            placeholder="serviceType"
          >
            <option id="0" hidden>
              What does your car need?
            </option>
            <option id="1">Fixed Price Service</option>
            <option id="2">Logbook Service</option>
            <option id="3">Diagnosis</option>
            <option id="4">Repairs</option>
            <option id="5">Other</option>
          </select>
        </div>

        {/* Form Group 7: Text Area for Comment */}
        <div className="form-group">
          <label htmlFor="comment" className="form-group__label">
            Comments
          </label>
          <textarea
            id="comments"
            className="form-group__textarea"
            name="comments"
            placeholder="Write your comments..."
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        {/* Form Group 8: Terms & Conditions */}
        <div className="form-group">
          <div className="checkbox">
            <input type="checkbox" className="checkbox__tick" />
            <p className="checkbox__desc">
              <span> I accept the </span>
              <a
                className="checkbox__files"
                href="https://www.kashy.com.au/_files/ugd/5d5476_6590e3a0ab7e49ac8b648620e99e100f.pdf"
                target="_blank"
              >
                terms & conditions
              </a>
            </p>
          </div>
        </div>

        {/* Submit btn */}
        <div className="form-group submit-box">
          <button
            className="btn submit-box__btn"
            type="submit"
            onClick={() => sendMail()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HPQuotingForm;
