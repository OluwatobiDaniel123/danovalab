import {sendEmail} from "./sendEmail.js";

export const sendContactMail = async (req, res) => {
    const {name, email, message} = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({error: "All fields are required"});
    }

    const escapeHTML = (str) =>
        str.replace(/[&<>'"]/g, (tag) => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"}[tag]));
    const safeMessage = escapeHTML(message);

    try {
        const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);">
          <h2 style="color: #722ed1; margin-bottom: 15px;">📬 New Contact Message</h2>

          <p style="font-size: 16px; margin: 8px 0;">
            <strong>👤 Name:</strong> ${name}
          </p>

          <p style="font-size: 16px; margin: 8px 0;">
            <strong>📧 Email:</strong> 
            <a href="mailto:${email}" style="color: #1890ff; text-decoration: none;">${email}</a>
          </p>

          <p style="font-size: 16px; margin: 20px 0 10px;">
            <strong>💬 Message:</strong>
          </p>

          <blockquote style="margin: 0; padding: 3px; background: #fafafa; border-left: 4px solid #722ed1; font-size: 15px; color: #333; line-height: 1.3; white-space: pre-wrap;">
            ${safeMessage}
          </blockquote>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;" />

          <p style="font-size: 13px; color: #999; text-align: center;">
            This message was submitted via the Xtiim Music contact form.
          </p>
        </div>
      </div>
    `;

        await sendEmail({
            to: "danieloluwatobi765@gmail.com",
            subject: `📩 New Message from ${name}`,
            html: htmlContent,
            replyTo: email,
        });

        res.status(200).json({message: "Your message has been sent successfully!"});
    } catch (error) {
        console.error("❌ Contact form error:", error);
        res.status(500).json({error: "Failed to send message"});
    }
};

export const sendQuoteMail = async (req, res) => {
    const {fullName, email, whatsapp, helpWith, comments, budget} = req.body;

    if (!fullName || !email || !budget || !whatsapp) {
        return res.status(400).json({
            error: "Required fields are missing",
        });
    }

    const escapeHTML = (str = "") =>
        str.replace(
            /[&<>'"]/g,
            (tag) =>
                ({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    "'": "&#39;",
                    '"': "&quot;",
                }[tag])
        );

    const safeComments = escapeHTML(comments);

    try {
        const htmlContent = `
        <div style="font-family:Segoe UI,sans-serif">
            <h2>📬 New Quote Request</h2>

            <p><strong>👤 Full Name:</strong> ${fullName}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📱 WhatsApp:</strong> ${whatsapp}</p>

            <ul>
              ${Array.isArray(helpWith) ? helpWith.map((item) => `<li>${item}</li>`).join("") : `<li>${helpWith}</li>`}
            </ul>
            
            <p><strong>💰 Budget:</strong> ${budget}</p>

            <p><strong>📝 Comments:</strong></p>

            <blockquote>
                ${safeComments}
            </blockquote>
        </div>
        `;

        await sendEmail({
            to: "danieloluwatobi765@gmail.com",
            subject: `📩 New Quote Request from ${fullName}`,
            html: htmlContent,
            replyTo: email,
        });

        res.status(200).json({
            message: "Quote request sent successfully!",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to send quote request",
        });
    }
};
