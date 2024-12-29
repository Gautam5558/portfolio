import { projectShowcaseListItemType } from "@/types";

export const generateImageData = (
  projectsData: projectShowcaseListItemType[]
) => {
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

// Its just like the built in cn() function provided in nextjs app when we install
// shadn ui library which creates a lib folder inside which a utils.ts file is present
// where cn() function is present.(It helps in classes concatenation without needing
// to use + or bacticks for string concatenation by which we easily conditionally apply
// styles)
