import { ReactNode } from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  delay?: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export interface NavItem {
  label: string;
  href: string;
}