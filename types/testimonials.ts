export interface TestimonialAuthor {
  avatar?: string;
  fullName: string;
  role: string;
  company: string;
}
export interface Testimonial {
  author: TestimonialAuthor;
  mark: number; // 0-5
  comment: string;
}
