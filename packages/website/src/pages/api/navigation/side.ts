import { throwApiError, validateMethod } from "@htc/lib/server";
import { INavbar, getContentfulEntryById } from "@htc/lib/server/contentful";
import { NextApiHandler } from "next";

const getSideNav: NextApiHandler<INavbar> = async (req, res) => {
  try {
    const entires = await getContentfulEntryById<INavbar>(
      "4h412y4waLN4XkAuRhooDg",
      {
        preview: req.preview || false
      }
    );
    res.status(200).json(entires);
  } catch (error) {
    throwApiError({
      message: "Something done gone wrong",
      status: "SERVER_ERROR",
      res
    });
  }
};

export default validateMethod(["GET"], getSideNav);
