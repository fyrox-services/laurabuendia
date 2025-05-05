import { FEEDBACK_MESSAGES } from "@/data/feedbackMessages";
import css from "@/styles/components/PostForm.module.css";
import type { PostFormFields } from "@/types";
import { useForm } from "react-hook-form";
import { FeedbackMessage } from "@/components/preact/FeedbackMessage";
import "@/styles/components/all-forms.css";
import { useHandleForm } from "@/hooks/useHandleForm";

interface Props {
  heading: string;
}

export function PostForm({ heading }: Props) {
  const {
    cssStateSubmit,
    defaultValues,
    loading,
    onSubmit,
    submitStateContent,
  } = useHandleForm<PostFormFields>(
    {
      name: "",
      msg: "",
      phone: "",
      legal: false,
    },
    "/forms/post-page-form",
    close
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
        type="submit"
        disabled={loading !== "off"}
        className={`${css.Submit} Submit btn ${cssStateSubmit()}`}
      >
        {submitStateContent()}
      </button>
    </form>
  );
}
