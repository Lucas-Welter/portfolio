import { NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const data = await resend.emails.send({
        from: "", 
        to: [""], 
        subject: "Hello world",
        react: (
          <>
            <p>Email Body</p>
          </>
        ),
      });

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Failed to send email" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
