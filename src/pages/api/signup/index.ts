import mailchimp from "@mailchimp/mailchimp_marketing";

export default async function handler(req: any, res: any) {
  const { email, status } = req.body;

  mailchimp.setConfig({
    apiKey: "b8885e6eea3979a2d476db59075c9ad1-us12",
    server: "us12",
  });

  try {
    await mailchimp.lists.addListMember("910b73aba9", {
      email_address: email,
      status,
    });
  } catch (err) {
    return res.status(400).send({ error: true });
  }
  return res.json({ success: true });
}
