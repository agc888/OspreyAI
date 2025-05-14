import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";
import emailjs from '@emailjs/browser';


const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setProf] = useState([]);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function setProfileFunction(array) {
    setProf(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then((result) => {
            if (result.ok) {
              return result.json();
            }
          })
          .then((response) => {
            setProfileFunction(response.data.user);
          })
          .catch((error) => {
            console.error(
              `${error} (GitHub contact section could not be displayed. Contact section reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // EmailJS send function
    emailjs
      .send(
        "service_w65g7wq", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formData,
        "IwhMhlhXR9CO-GRsS" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      {openSource.display &&
      openSource.showGithubProfile === "true" &&
      !(typeof prof === "string" || prof instanceof String) ? (
        <Suspense fallback={renderLoader()}>
          <GithubProfileCard prof={prof} key={prof.id} />
        </Suspense>
      ) : (
        <Contact />
      )}

      {/* Email Contact Form */}
      <div style={{ marginTop: "20px", maxWidth: "500px", margin: "0 auto" }}>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="from_name">Name:</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="from_email">Email:</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
        {status && <p style={{ marginTop: "10px" }}>{status}</p>}
      </div>
    </div>
  );
}