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
