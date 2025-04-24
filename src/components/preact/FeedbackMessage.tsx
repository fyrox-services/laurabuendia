import css from "@/styles/components/FeedbackMessage.module.css";

interface Props {
  children: React.ReactNode;
}

export function FeedbackMessage({ children }: Props) {
  return <p className={css.Msg}>{children}</p>;
}
