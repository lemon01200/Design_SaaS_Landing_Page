const FEISHU_WEBHOOK_URL = import.meta.env.VITE_FEISHU_WEBHOOK_URL as string;

interface EarlyAccessNotification {
  email: string;
  submittedAt: string;
  productName: string;
}

export async function sendFeishuNotification(data: EarlyAccessNotification): Promise<boolean> {
  if (!FEISHU_WEBHOOK_URL) {
    console.warn("Feishu webhook URL not configured. Skipping notification.");
    return false;
  }

  try {
    const response = await fetch(FEISHU_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        msg_type: "interactive",
        card: {
          header: {
            title: {
              tag: "plain_text",
              content: "New Early Access Signup",
            },
            template: "green",
          },
          elements: [
            {
              tag: "div",
              fields: [
                {
                  is_short: false,
                  text: {
                    tag: "lark_md",
                    content: `**Email:** ${data.email}`,
                  },
                },
                {
                  is_short: false,
                  text: {
                    tag: "lark_md",
                    content: `**Submitted At:** ${data.submittedAt}`,
                  },
                },
                {
                  is_short: false,
                  text: {
                    tag: "lark_md",
                    content: `**Product:** ${data.productName}`,
                  },
                },
              ],
            },
          ],
        },
      }),
    });

    if (!response.ok) {
      console.error("Feishu webhook failed:", response.status, response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Feishu webhook error:", error);
    return false;
  }
}
