import { FEEDBACK_MESSAGES } from "@/data/feedbackMessages";
import { useHandleForm } from "@/hooks/useHandleForm";
import css from "@/styles/components/ServiceForm.module.css";
import type { ServiceFormFields } from "@/types";
import { useForm } from "react-hook-form";
import { FeedbackMessage } from "./FeedbackMessage";

interface Props {
  heading: string;
}

const kinds = [
  { text: "Particular" },
  { text: "Letrado" },
  { text: "Aseguradora" },
  { text: "Administración pública" },
];

export function ServiceForm({ heading = "" }: Props) {
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
      kind: "",
      legal: false,
    },
    "/forms/main-form"
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
        <label className={css.Label} htmlFor="">
          nombre
        </label>
        <input className={css.Input} type="text" />
      </div>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="">
          email
        </label>
        <input className={css.Input} type="text" />
      </div>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="">
          teléfono
        </label>
        <input className={css.Input} type="text" />
      </div>
      <div className={css.Field}>
        <label className={css.Label} htmlFor="subject">
          tipo
        </label>
        <select
          className={css.Select}
          id="subject"
          {...register("kind", {
            required: FEEDBACK_MESSAGES.ERROR.SUBJECT,
          })}
        >
          <option defaultValue={""} disabled value="">
            -- Selccione --
          </option>
          {kinds.map((service) => (
            <option key={service.text} value={service.text}>
              {service.text}
            </option>
          ))}
        </select>
        <FeedbackMessage>{errors.kind?.message}</FeedbackMessage>
      </div>
      <div className={`${css.Field} ${css.TextareaField}`}>
        <label className={css.Label} htmlFor="">
          mensaje
        </label>
        <textarea className={css.Textarea} name="" id=""></textarea>
      </div>
      <div>
        <label className={`${css.Label} ${css.LabelLegal}`} htmlFor="">
          <input type="checkbox" />
          <span>Acepto la política de privacidad</span>
        </label>
      </div>
      <button className={`${css.Submit} btn`}>enviar</button>
    </form>
  );
}
