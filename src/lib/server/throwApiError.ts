import { NextApiResponse } from "next";

type Status = "NOT_ALLOWED" | "SERVER_ERROR";

const statusMap: { [key in Status]: number } = {
  NOT_ALLOWED: 405,
  SERVER_ERROR: 500
};

export const throwApiError = ({
  status,
  message,
  res
}: {
  status: Status;
  message: string;
  res: NextApiResponse;
}) => {
  res.status(statusMap[status]).json({
    message
  });
};
