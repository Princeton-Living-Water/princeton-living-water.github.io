import React, { useEffect, useRef, useState } from "react";

import contactRecipients from "../data/contactRecipients";

import "../assets/message.css";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";
const EMAILJS_SERVICE_ID = "service_mnnpjiq";
const EMAILJS_TEMPLATE_ID = "template_pwqbyxp";
const EMAILJS_PUBLIC_KEY = "8qBYYM_-SI5pUmBvu";

const INITIAL_FORM = {
  name: "",
  email: "",
  telephone: "",
  recipient: "anyone",
  message: "",
  website: "",
};

const anyoneRecipients = contactRecipients.filter(({ name }) =>
  ["Brian Seo", "Daniel Tu"].includes(name)
);

const MessageForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resolvedRecipient, setResolvedRecipient] = useState(null);
  const [submissionError, setSubmissionError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const confirmButtonRef = useRef(null);

  const selectedRecipient = contactRecipients.find(
    ({ email }) => email === formData.recipient
  );

  useEffect(() => {
    if (!isConfirming) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsConfirming(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    confirmButtonRef.current.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isConfirming]);

  const handleChange = ({ target }) => {
    setFormData((currentData) => ({
      ...currentData,
      [target.name]: target.value,
    }));
    setSubmissionError("");
    setStatusMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.website) {
      setFormData(INITIAL_FORM);
      setStatusMessage("Thanks! Your message has been sent.");
      return;
    }

    const nextRecipient =
      selectedRecipient ||
      anyoneRecipients[Math.floor(Math.random() * anyoneRecipients.length)];

    setResolvedRecipient(nextRecipient);
    setSubmissionError("");
    setIsConfirming(true);
  };

  const submitMessage = async () => {
    if (!resolvedRecipient) return;

    const requestedRecipient =
      formData.recipient === "anyone"
        ? `anyone! (randomly routed to ${resolvedRecipient.name})`
        : resolvedRecipient.name;

    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const response = await fetch(EMAILJS_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            to_name: resolvedRecipient.name,
            to_email: resolvedRecipient.email,
            from_name: formData.name,
            name: formData.name,
            reply_to: formData.email,
            from_email: formData.email,
            email: formData.email,
            telephone: formData.telephone || "Not provided",
            phone: formData.telephone || "Not provided",
            requested_recipient: requestedRecipient,
            assigned_to: resolvedRecipient.name,
            subject: `Someone reached out through Living Water — for ${resolvedRecipient.name}`,
            message: formData.message,
          },
        }),
      });

      if (!response.ok) throw new Error(await response.text());

      setFormData(INITIAL_FORM);
      setIsConfirming(false);
      setResolvedRecipient(null);
      setStatusMessage(
        "Thanks! Your message has been sent to Living Water."
      );
    } catch (error) {
      setSubmissionError(
        "We couldn't send your message. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <p className="message-intro">
        Questions, prayer requests, or just want to talk? Send us a message and
        choose who you would like to reach.
      </p>

      <form className="message-form" onSubmit={handleSubmit}>
        <label htmlFor="message-name">name</label>
        <input
          autoComplete="name"
          id="message-name"
          name="name"
          onChange={handleChange}
          placeholder="your name"
          required
          type="text"
          value={formData.name}
        />

        <label htmlFor="message-email">email</label>
        <input
          autoComplete="email"
          id="message-email"
          name="email"
          onChange={handleChange}
          placeholder="you@example.com"
          required
          type="email"
          value={formData.email}
        />

        <label htmlFor="message-telephone">
          telephone <span>(optional)</span>
        </label>
        <input
          autoComplete="tel"
          id="message-telephone"
          name="telephone"
          onChange={handleChange}
          placeholder="(000) 000-0000"
          type="tel"
          value={formData.telephone}
        />

        <label htmlFor="message-recipient">who would you like to reach?</label>
        <select
          id="message-recipient"
          name="recipient"
          onChange={handleChange}
          value={formData.recipient}
        >
          <option value="anyone">anyone!</option>
          {contactRecipients.map(({ name, email }) => (
            <option key={email} value={email}>
              {name}
            </option>
          ))}
        </select>

        <label htmlFor="message-body">message</label>
        <textarea
          id="message-body"
          maxLength="3000"
          name="message"
          onChange={handleChange}
          placeholder="write your message here"
          required
          rows="7"
          value={formData.message}
        />

        <label
          aria-hidden="true"
          className="message-honeypot"
          htmlFor="message-website"
        >
          leave this field empty
          <input
            autoComplete="off"
            id="message-website"
            name="website"
            onChange={handleChange}
            tabIndex="-1"
            type="text"
            value={formData.website}
          />
        </label>

        <button
          className="message-send-button"
          disabled={isSubmitting}
          type="submit"
        >
          send
        </button>
        <p className="message-mail-note">
          Your message will be emailed directly to the person you choose.
        </p>
        {statusMessage && (
          <p className="message-status" role="status">
            {statusMessage}
          </p>
        )}
      </form>

      {isConfirming && (
        <div
          aria-labelledby="message-confirm-title"
          aria-modal="true"
          className="message-modal-backdrop"
          onMouseDown={({ currentTarget, target }) => {
            if (currentTarget === target) setIsConfirming(false);
          }}
          role="dialog"
        >
          <div className="message-modal">
            <h2 id="message-confirm-title">Are you ready to submit?</h2>
            <p>
              Your message will be emailed directly to{" "}
              <strong>{resolvedRecipient && resolvedRecipient.name}</strong>.
            </p>
            {submissionError && (
              <p className="message-modal-error" role="alert">
                {submissionError}
              </p>
            )}
            <div className="message-modal-actions">
              <button
                className="message-secondary-button"
                disabled={isSubmitting}
                onClick={() => setIsConfirming(false)}
                type="button"
              >
                go back
              </button>
              <button
                className="message-confirm-button"
                disabled={isSubmitting}
                onClick={submitMessage}
                ref={confirmButtonRef}
                type="button"
              >
                {isSubmitting ? "sending..." : "yes, send message"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageForm;
