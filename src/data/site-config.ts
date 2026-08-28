export interface SocialLink {
  label: string;
  href: string;
}

export const siteConfig = {
  email: "hello@neomasterys.com",
  phone: "+966 00 000 0000",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "X", href: "#" },
  ] satisfies SocialLink[],
};
