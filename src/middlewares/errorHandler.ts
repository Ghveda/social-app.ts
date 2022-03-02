import { Request, Response } from "express";

const errorHandler = (_: Request, res: Response): void => {
  const payload = {
    message: "Endpoit is incorrect",
  };

  res.json(payload);
};

export { errorHandler };
