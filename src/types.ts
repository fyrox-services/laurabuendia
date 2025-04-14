export interface Service {
  name: string;
  phrase: string;
  description: string;
  link: string;
  ilustration: ImageMetadata;
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
