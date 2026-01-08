"use server";

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

function sesClient() {
  return new SESClient({
    region: requireEnv("AWS_REGION"),
    credentials: {
      accessKeyId: requireEnv("AWS_ACCESS_KEY_ID"),
      secretAccessKey: requireEnv("AWS_SECRET_ACCESS_KEY"),
    },
  });
}

export async function sendEmail(to: string, subject: string, htmlBody: string) {
  const from = requireEnv("SES_DEFAULT_FROM_EMAIL");
  const client = sesClient();
  await client.send(
    new SendEmailCommand({
      Destination: { ToAddresses: [to] },
      Source: from,
      Message: {
        Subject: { Data: subject, Charset: "UTF-8" },
        Body: {
          Html: { Data: htmlBody, Charset: "UTF-8" },
          Text: {
            Data: htmlBody.replace(/<[^>]*>/g, "").replace(/\s+\n/g, "\n"),
            Charset: "UTF-8",
          },
        },
      },
    })
  );
}
