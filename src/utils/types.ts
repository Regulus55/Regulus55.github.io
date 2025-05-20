export interface Stack {
  title: string;
  stack: string[];
}

export interface Overview {
  title: string;
  content: string[];
}

export interface Preview {
  title?: string;
  image?: string[];
  content?: string[];
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  image: string;
  overview?: Overview[];
  preview?: Preview[];
}

export type ReactIconProps = {
  size?: number;
  className?: string;
};

export type ContentsTitleProps = {
  children: string;
  className?: string;
};