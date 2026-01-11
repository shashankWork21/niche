"use server";

import { buildEmailTemplate } from "@/lib/utils/email/build-template";
import { sendEmail } from "./email";

export async function sendNicheReadyEmail({
  email,
  firstName,
  nicheId,
}: {
  email: string;
  firstName: string;
  nicheId: number;
}) {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  const nicheUrl = `${baseUrl}/niche/${nicheId}`;

  const { html } = buildEmailTemplate({
    title: `${firstName}, your business niche is ready!`,
    preheader:
      "We've analyzed your responses and identified your ideal business niche.",
    intro: `Great news! We've completed analyzing your responses and identified your ideal business niche based on your unique skills, interests, values, and driving belief.<br/><br/>Your personalized niche report includes:<br/>
• Your ideal customer persona<br/>
• Specific solutions you can offer<br/>
• Market positioning and competitive edge<br/>
• Validation questions to test your niche<br/>
• Scalability and growth opportunities<br/><br/>
Click the button below to view your complete niche analysis.`,
    buttonText: "View Your Niche Report",
    buttonUrl: nicheUrl,
    footerNote:
      "This report is personalized based on your unique profile. We recommend reviewing it carefully and using the validation questions to refine your positioning with real potential customers.",
  });

  await sendEmail(email, "Your Business Niche Report is Ready", html);
}
