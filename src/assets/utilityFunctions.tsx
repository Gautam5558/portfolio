import { projectShowcaseListType } from "@/types";

export const generateImageData = (projectsData: projectShowcaseListType[]) => {
  const images = projectsData.map((project) => {
    return project.image;
  });
  return images;
};

export function classNames(
  ...classes: Array<string | boolean | false | undefined | null>
): string {
  return classes.filter(Boolean).join(" ");
}
