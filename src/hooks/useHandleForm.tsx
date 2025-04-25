import { Loader } from "@/components/preact/Loader";
import { FEEDBACK_MESSAGES } from "@/data/feedbackMessages";
import { PUBLIC_API_URL } from "@/env";
import { analysisData } from "@/helpers/analysisData";
import type { SendState } from "@/types";
import { useState } from "react";

export function useHandleForm<T>(
  defaultValues: T,
  route: string,
  action?: () => void
) {
  const [loading, setLoading] = useState<SendState>("off");

  function cssStateSubmit() {
    if (loading === "error") return "Error";
    if (loading === "success") return "Success";
    return "";
  }

  function submitStateContent() {
    if (loading === "error") return FEEDBACK_MESSAGES.ERROR.GENERAL;
    if (loading === "success") return FEEDBACK_MESSAGES.SUCCESS.SUCCESS_SENDING;
    if (loading === "sending") return <Loader />;
    return "Enviar";
  }

  async function onSubmit(values: T) {
    try {
      setLoading("sending");
      const url = `${PUBLIC_API_URL}${route}`;

      const dataToSend = {
        ...values,
        "analysis-data": analysisData(),
      };

      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await result.json();

      if (data.details) throw new Error(FEEDBACK_MESSAGES.ERROR.FIELDS_INVALID);
      if (!result.ok) throw new Error(FEEDBACK_MESSAGES.ERROR.GENERAL);

      setLoading("success");

      if (typeof action !== "undefined") action();
    } catch (error) {
      console.log(`el error al enviar el formulario es: ${error}`);
      setLoading("error");
    }
  }

  return {
    loading,
    defaultValues,
    cssStateSubmit,
    submitStateContent,
    onSubmit,
  };
}
