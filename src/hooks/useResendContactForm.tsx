import { useState } from "react";
import axios from "axios";

export const useResendContactForm = ({ onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);

  const submitForm = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/send-email", formData);

      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        onSuccess();
      } else {
        onError("Failed to send the form.");
      }
    } catch (error) {
      onError("An error occurred while sending the form.");
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading };
};
