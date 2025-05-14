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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSubmitting(true);

    emailjs
      .send(
        "service_w65g7wq",
        "template_g4o0czw",
        formData,
        "IwhMhlhXR9CO-GRsS"
      )
      .then(
        (response) => {
          console.log("Message sent successfully:", response);
          return emailjs.send(
            "service_w65g7wq",
            "template_c2cggra",
            {
              from_name: formData.from_name,
              from_email: formData.from_email,
              logo_url: "https://agc888.github.io/OspreyAI/static/media/OspreyAI_Light.9e63af0e.png"
            },
            "IwhMhlhXR9CO-GRsS"
          );
        }
      )
      .then(
        (response) => {
          console.log("Auto-reply sent successfully:", response);
          setStatus("Message sent successfully! Check your email for confirmation.");
          setFormData({ from_name: "", from_email: "", message: "" });
          setIsSubmitting(false);
        }
      )
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("Failed to send message. Please try again.");
        setIsSubmitting(false);
      });
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

      <div style={{
        marginTop: "40px",
        maxWidth: "700px",
        margin: "0 auto",
        padding: "30px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
        transition: "all 0.3s ease"
      }}>
        <h2 style={{
          color: "#1a202c",
          marginBottom: "25px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "600"
        }}>
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="from_name" style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              fontSize: "14px",
              color: "#4a5568"
            }}>
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              style={{
                width: "98%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                fontSize: "16px",
                color: "#2d3748",
                backgroundColor: "#fff",
                transition: "border-color 0.2s ease, transform 0.2s ease",
                outline: "none",
                transform: "scale(1)"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#fc0038";
                e.target.style.transform = "scale(1.02)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="from_email" style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              fontSize: "14px",
              color: "#4a5568"
            }}>
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              style={{
                width: "98%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                fontSize: "16px",
                color: "#2d3748",
                backgroundColor: "#fff",
                transition: "border-color 0.2s ease, transform 0.2s ease",
                outline: "none",
                transform: "scale(1)"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#fc0038";
                e.target.style.transform = "scale(1.02)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="message" style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              fontSize: "14px",
              color: "#4a5568"
            }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: "98%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                fontSize: "16px",
                color: "#2d3748",
                backgroundColor: "#fff",
                resize: "vertical",
                transition: "border-color 0.2s ease, transform 0.2s ease",
                outline: "none",
                transform: "scale(1)"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#fc0038";
                e.target.style.transform = "scale(1.02)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "14px",
              background: isSubmitting
                ? "#cbd5e0"
                : "linear-gradient(90deg, #fc0038 0%, #e00033 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: isSubmitting ? "none" : "0 4px 8px rgba(252, 0, 56, 0.3)"
            }}
            onMouseOver={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 6px 12px rgba(252, 0, 56, 0.4)";
              }
            }}
            onMouseOut={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(252, 0, 56, 0.3)";
              }
            }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status && (
          <p style={{
            marginTop: "20px",
            textAlign: "center",
            padding: "12px",
            backgroundColor: status.includes("successfully") ? "#e7f7ed" : "#fff0f0",
            color: status.includes("successfully") ? "#2e7d32" : "#d32f2f",
            borderRadius: "8px",
            fontSize: "14px"
          }}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
}