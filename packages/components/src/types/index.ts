export type Doc = {
  content: string;
  data: {
    title: string;
    path: string[];
    [key: string]: unknown;
  };
  filePath: string;
};

export type DocNav = {
  [key in string]: { label: string; path: string[] }[];
};
