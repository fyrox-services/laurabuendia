import { FEEDBACK_MESSAGES } from "@/data/feedbackMessages";
import { useHandleForm } from "@/hooks/useHandleForm";
import css from "@/styles/components/ServiceForm.module.css";
import type { ServiceFormFields } from "@/types";
import { useForm } from "react-hook-form";
import { FeedbackMessage } from "./FeedbackMessage";
import "@/styles/components/all-forms.css";

interface Props {
  heading: string;
  service: string;
}

const profiles = [
  { text: "particular" },
  { text: "letrado" },
  { text: "aseguradora" },
  { text: "administración pública" },
];

export function ServiceForm({ heading = "", service }: Props) {
  const {
    cssStateSubmit,
    defaultValues,
    loading,
    onSubmit,
    submitStateContent,
  } = useHandleForm<ServiceFormFields>(
    {
      name: "",
      email: "",
      phone: "",
      msg: "",
      profile: "",
      legal: false,
      service,
    },
    "/forms/service-form"
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.Form}>
      <h2 className="text-gradient-primary">{heading}</h2>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="name">
          nombre
        </label>
        <input
          className={css.Input}
          id="name"
          type="text"
          autoComplete="off"
          {...register("name", {
            required: FEEDBACK_MESSAGES.ERROR.NAME,
          })}
        />
        <FeedbackMessage>{errors.name?.message}</FeedbackMessage>
      </div>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="email">
          email
        </label>
        <input
          id="email"
          className={css.Input}
          type="email"
          {...register("email", {
            required: FEEDBACK_MESSAGES.ERROR.EMAIL,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: FEEDBACK_MESSAGES.ERROR.EMAIL_NOT_VALID,
            },
          })}
        />
        <FeedbackMessage>{errors.email?.message}</FeedbackMessage>
      </div>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="phone">
          teléfono
        </label>
        <input
          id="phone"
          className={css.Input}
          type="tel"
          {...register("phone", {
            required: FEEDBACK_MESSAGES.ERROR.PHONE,
            pattern: {
              value: /^[\d\s()+\-]{7,}$/,
              message: FEEDBACK_MESSAGES.ERROR.PHONE_NOT_VALID,
            },
          })}
        />
        <FeedbackMessage>{errors.phone?.message}</FeedbackMessage>
      </div>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="kind">
          perfil
        </label>
        <select
          className={css.Select}
          id="kind"
          {...register("profile", {
            required: FEEDBACK_MESSAGES.ERROR.SUBJECT,
          })}
        >
          <option defaultValue={""} disabled value="">
            -- Selccione --
          </option>
          {profiles.map((service) => (
            <option key={service.text} value={service.text}>
              {service.text}
            </option>
          ))}
        </select>
        <FeedbackMessage>{errors.profile?.message}</FeedbackMessage>
      </div>
      <div className={`${css.Field} ${css.TextareaField}`}>
        <label className={css.Label} htmlFor="msg">
          mensaje
        </label>
        <textarea
          className={css.Textarea}
          id="msg"
          {...register("msg", {
            minLength: {
              message: FEEDBACK_MESSAGES.ERROR.MSG_TOO_SHORT,
              value: 5,
            },
            required: FEEDBACK_MESSAGES.ERROR.MSG,
          })}
        ></textarea>
        <FeedbackMessage>{errors.msg?.message}</FeedbackMessage>
      </div>
      <div className={`${css.Field} ${css.LabelLegalField}`}>
        <label className={`${css.Label} ${css.LabelLegal}`} htmlFor="legal">
          <input
            id="legal"
            type="checkbox"
            {...register("legal", {
              required: FEEDBACK_MESSAGES.ERROR.LEGAL,
            })}
          />
          <span>
            Acepto la
            <a href="/legal/politica-privacidad"> política de privacidad</a>
          </span>
        </label>
        <FeedbackMessage>{errors.legal?.message}</FeedbackMessage>
      </div>
      <button
        disabled={loading !== "off"}
        className={`${css.Submit} Submit btn ${cssStateSubmit()}`}
      >
        {submitStateContent()}
      </button>
    </form>
  );
}
