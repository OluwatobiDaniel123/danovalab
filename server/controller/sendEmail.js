import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({to, subject, html, replyTo}) => {
    try {
        if (!to) {
            console.error("❌ No recipient defined (to is missing)");
            return;
        }

        console.log("Sending email to:", to);

        const {data, error} = await resend.emails.send({
            from: "Danovalab <onboarding@resend.dev>",
            to,
            subject,
            html,
            ...(replyTo && {reply_to: replyTo}),
        });

        if (error) {
            console.error("❌ Resend error:", error);
        } else {
            console.log("📩 Email sent to:", to);
        }
    } catch (err) {
        console.error("❌ Email send failed:", err);
    }
};
