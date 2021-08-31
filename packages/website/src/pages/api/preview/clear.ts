import { NextApiHandler } from "next";

export const clearPreviewMode: NextApiHandler = (req, res) => {
  // Clears the preview mode cookies.
  // This function accepts no arguments.
  res.clearPreviewData();
  if (req.query.redirectTo) {
    res.redirect(req.query.redirectTo as string);
  }
};
export default clearPreviewMode;
