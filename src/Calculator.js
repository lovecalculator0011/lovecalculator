import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import emailjs from "emailjs-com";

const Calculator = () => {
  const form = useRef();
  const urlParams = new URLSearchParams(window.location.search);
let email = urlParams.get("id");
  let navigate = useNavigate();
  const [gmail, setGmail] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lhejy69",
        "template_uzbh0sp",
        form.current,
        "6ij3zK70w4lm_cMJg"
      )
      .then(
        (result) => {
          console.log("result", result.text);
          navigate("/fool");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    console.log("emailm", email);
    if (!email) {
      navigate("/");
    } else {
        console.log(typeof(email))
      email=email.replaceAll(" ", "+");

      var bytes = CryptoJS.AES.decrypt(email, "my-secret");
      console.log("bytes", bytes);
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      console.log("decrypted", decryptedData);
      setGmail(decryptedData);
    }
  }, []);
  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <p>Love Calculator </p>
        <input type="text" name="user_name" placeholder="Enter Name" />
        <input type="text" name="user_crush" placeholder="Enter Crush " />

        <input type="hidden" name="user_email" value={gmail} />

        <input type="submit" value="Calculate" />
      </form>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
  );
};

export default Calculator;
