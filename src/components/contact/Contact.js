import React, { useState } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";
import "./contact.scss";

const Contact = ({ menu }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });
  const onSubmit = async () => {
    if (
      user.name !== "" &&
      user.email !== "" &&
      user.subject !== "" &&
      user.content !== ""
    ) {
      fetch(
        "https://sheet.best/api/sheets/77b7b451-9323-4644-a3ef-e77d70a51eb7",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      )
        .then((resJson) => resJson.json())
        .then((res) => {
          setUser({
            name: "",
            email: "",
            subject: "",
            content: "",
          });
        });
    }
  };
  return (
    <section className={`contact ${menu && "open"}`}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Do You Have Any Questions ?</h3>
        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>
        <div className="row">
          <div className="contact-info-item padd-15">
            <div className="icon">
              <a
                href="https://github.com/DevSmith0213"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="react-icon" />
              </a>
              <h4>GitHub</h4>
            </div>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <a
                href="https://t.me/DevDavid0520"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram className="react-icon" />
              </a>
              <h4>Telegram</h4>
            </div>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/david-jin-2786a2242/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin className="react-icon" />
              </a>
              <h4>LinkedIn</h4>
            </div>
          </div>
        </div>
        <h3 className="contact-title padd-15">Send Me An Email</h3>
        <h4 className="contact-sub-title padd-15">
          I'm always interested in hearing about new projects, so if you'd like
          to chat please get in touch.
        </h4>
        <div className="row">
          <div
            className="contact-form padd-15"
            // action="https://sheet.best/api/sheets/77b7b451-9323-4644-a3ef-e77d70a51eb7"
          >
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="user-name"
                    className="form-control"
                    placeholder="Name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="user-email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    value={user.subject}
                    onChange={(e) =>
                      setUser({ ...user, subject: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    name="message"
                    id="msg"
                    value={user.content}
                    onChange={(e) =>
                      setUser({ ...user, content: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <button className="btn" onClick={onSubmit}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
