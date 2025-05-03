import css from "@/styles/components/MainForm.module.css";
import { useForm } from "react-hook-form";
import { FeedbackMessage } from "@/components/preact/FeedbackMessage";
import type { AllFormFields, MainFormFields } from "@/types";
import { FEEDBACK_MESSAGES } from "@/data/feedbackMessages";
import { handleMainModalForm } from "@/stores";
import "@/styles/components/all-forms.css";
import { useHandleForm } from "@/hooks/useHandleForm";

interface Props {
  modifier?: string;
}

const services = [
  { text: "Valoración del daño corporal" },
  { text: "Informes periciales" },
  { text: "Accidentes de tráfico y hogar" },
  { text: "Informes de viabilidad" },
  { text: "Perdida de oportunidad" },
  { text: "Asesoramiento a letrados" },
  { text: "Mediación" },
  { text: "Ratificaciones judiciales" },
];

export function MainForm({ modifier = "" }: Props) {
  const {
    cssStateSubmit,
    defaultValues,
    loading,
    onSubmit,
    submitStateContent,
  } = useHandleForm<MainFormFields>(
    {
      name: "",
      email: "",
      phone: "",
      subject: "",
      msg: "",
      legal: false,
    },
    "/forms/main-form",
    closeModal
  );

  function closeModal() {
    setTimeout(handleMainModalForm.close, 3000);
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${css.Form} ${css[modifier]}`}
    >
      <h2 className="text-gradient-primary">
        rellena los campos y me pondré en contacto contigo
      </h2>
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
        <label className={css.Label} htmlFor="subject">
          asunto
        </label>
        <select
          className={css.Select}
          id="subject"
          {...register("subject", {
            required: FEEDBACK_MESSAGES.ERROR.SUBJECT,
          })}
        >
          <option defaultValue={""} disabled value="">
            -- Selccione --
          </option>
          {services.map((service) => (
            <option key={service.text} value={service.text}>
              {service.text}
            </option>
          ))}
          <option value="otro">otro</option>
        </select>
        <FeedbackMessage>{errors.subject?.message}</FeedbackMessage>
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
