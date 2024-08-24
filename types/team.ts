export type Role =
  "designer" |
  "developer" |
  "graphicDesigner" |
  "photograph" |
  "helper" |
  "sysadmin";

export interface Gradient {
  from: string;
  to: string;
}
export interface GradientVariants {
  light: Gradient;
  dark?: Gradient;
}
export interface Team {
  members: TeamMember[];
}
export interface TeamMember {
  identifier: string;
  fullName: string;
  roles: Role[];
  superPower: string;
  anecdote: string;
  socials: string[];
  pictureUrl?: string;
  gradientColors?: GradientVariants;
}
