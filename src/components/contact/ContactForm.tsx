import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "../../translations";
import { trackFormSubmission } from "../../utils/analytics";
import { useResendContactForm } from "../../hooks/useResendContactForm";

const formSubmitMessages = {
  success: {
    en: "Your message has been sent successfully!",
    pt: "Sua mensagem foi enviada com sucesso!",
    fr: "Votre message a été envoyé avec succès!",
  },
  error: {
    en: "There was an error sending your message. Please try again later.",
    pt: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
    fr: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.",
  },
};
const ContactForm: React.FC = ({ lng }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { submitForm, loading } = useResendContactForm({
    onSuccess: () => {
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    },
    onError: (errorMessage) => {
      setSubmitError(errorMessage);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Track form submission
    trackFormSubmission("Contact Form");

    // Submit the form using the hook
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t("contact.form.name")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#F8F7F4] border-2 border-transparent focus:border-gray-900 outline-none transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t("contact.form.email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#F8F7F4] border-2 border-transparent focus:border-gray-900 outline-none transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t("contact.form.subject")}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#F8F7F4] border-2 border-transparent focus:border-gray-900 outline-none transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t("contact.form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-[#F8F7F4] border-2 border-transparent focus:border-gray-900 outline-none transition-colors resize-none"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gray-900 text-white py-4 px-6 hover:bg-gray-800 transition-colors relative group overflow-hidden"
        >
          <span className="relative z-10 inline-flex items-center">
            {loading ? t("common.sending") : t("common.sendMessage")}
            <ArrowRight
              size={18}
              className="ml-2 transform group-hover:translate-x-1 transition-transform"
            />
          </span>
          <div className="absolute inset-0 bg-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>

      {submitSuccess && (
        <div className="p-4 bg-[#F8F7F4] text-gray-900 border-l-4 border-gray-900">
          {formSubmitMessages.success[lng]}
        </div>
      )}

      {submitError && (
        <div className="p-4 bg-red-50 text-red-800 border border-red-200">
          {formSubmitMessages.error[lng]}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
