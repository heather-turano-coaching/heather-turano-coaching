type ResetElements =
  | "heading"
  | "paragraph"
  | "list"
  | "button"
  | "input"
  | "figure"
  | "blockquote"
  | "anchor";

type Resets = { [key in ResetElements]: any };

const globalResets = {
  boxSizing: "border-box"
};

const resets: Resets = {
  heading: {
    ...globalResets,
    margin: 0
  },
  paragraph: {
    ...globalResets,
    margin: 0
  },
  list: {
    ...globalResets,
    margin: 0,
    padding: 0,
    textIndent: 0,
    listStyleType: "none"
  },
  button: {
    ...globalResets,
    margin: 0,
    padding: 0,
    border: "none",
    background: "none",
    cursor: "pointer"
  },
  input: {
    ...globalResets,
    margin: 0,
    padding: 0,
    border: 0
  },
  anchor: {
    textDecoration: "none",
    display: "inline-block"
  },
  figure: {
    margin: 0,
    padding: 0
  },
  blockquote: {
    margin: 0,
    padding: 0
  }
};

export const makeReset = (element: ResetElements): Resets[typeof element] =>
  resets[element];
