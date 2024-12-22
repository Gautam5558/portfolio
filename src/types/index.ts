export interface projectShowcaseListItemType {
  index: number;
  title: string;
  tags: string[];
  image: string;
  href: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  githubLink: string;
  deploymentLink: string;
  favicon: string;
  images: string[];
}
