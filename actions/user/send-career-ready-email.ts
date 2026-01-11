"use server";

import { buildEmailTemplate } from "@/lib/utils/email/build-template";
import { sendEmail } from "./email";

export async function sendCareerReadyEmail({
  email,
  firstName,
  careerDirectionId,
}: {
  email: string;
  firstName: string;
  careerDirectionId: number;
}) {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  const careerUrl = `${baseUrl}/career-direction/${careerDirectionId}`;

  const { html } = buildEmailTemplate({
    title: `${firstName}, your career direction is ready!`,
    preheader:
      "We've analyzed your responses and identified your ideal career path.",
    intro: `Great news! We've completed analyzing your responses and identified your ideal career direction based on your proven abilities, flow states, values, and driving belief.<br/><br/>Your personalized career report includes:<br/>
• Your career archetype and working style<br/>
• 3-5 specific role recommendations<br/>
• Required skills and learning resources<br/>
• Target companies and salary expectations<br/>
• Immediate next steps to get started<br/>
• 5-year vision and transition strategy<br/><br/>
Click the button below to view your complete career analysis.`,
    buttonText: "View Your Career Report",
    buttonUrl: careerUrl,
    footerNote:
      "This report is grounded in your proven abilities, not aspirations. We recommend using the validation questions to speak with people in these roles and confirm this direction resonates with you.",
  });

  await sendEmail(
    email,
    "Your Career Direction Report is Ready",
    html
  );
}
