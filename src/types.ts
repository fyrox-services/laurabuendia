export interface Service {
  name: string;
  phrase: string;
  description: string;
  link: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Testimonial {
  comment: string;
  photo: ImageMetadata;
  name: string;
  work: string;
}

export interface Target {
  title: string;
  description: string;
  icon: ImageMetadata;
}

export interface Work {
  logo: ImageMetadata;
  company: string;
  job: string;
  date: {
    month: string;
    year: number;
  };
  description: string;
}

export interface FAQ {
  heading: string;
  text: string;
}

export type SendState = "off" | "sending" | "error" | "success";

export interface AllFormFields {
  name: string;
  email: string;
  phone: string;
  profile: string;
  subject: string;
  msg: string;
  legal: boolean;
}

export type MainFormFields = Pick<
  AllFormFields,
  "name" | "msg" | "phone" | "legal" | "email" | "subject"
>;

export type PostFormFields = Pick<
  AllFormFields,
  "name" | "msg" | "phone" | "legal"
>;

export type ServiceFormFields = Pick<
  AllFormFields,
  "name" | "msg" | "phone" | "legal" | "email" | "profile"
> & {
  service: string;
};

export type ContactFormFields = Pick<
  AllFormFields,
  "name" | "msg" | "phone" | "legal" | "email"
>;
