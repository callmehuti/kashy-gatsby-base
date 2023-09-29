import { sendMail } from "@/app/service/mailService";

import { Request, Response } from "express"; // Adjust the import based on your framework

const handler = async (req: Request, res: Response) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        // Do something
        await sendMail(
          "TEST",
          "dontkillme@bunnyfiedlabs.com",
          "THIS IS A TEST FOR MY MEDIUM USERS"
        );
        res.status(200).send("Success");
        break;
      }
    }
  } catch (err: any) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;
