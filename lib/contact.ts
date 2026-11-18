export type ContactMessage = {
  name: string;
  email: string;
  message: string;
  botcheck?: string;
};

const WEB3FORMS_ACCESS_KEY = "0c3ff25b-bd2a-4a6f-9d46-dfbef0a6969c";

export async function sendContactMessage(
  contact: ContactMessage,
  source: "Chat" | "Contact section",
) {
  if (contact.botcheck) {
    throw new Error("Spam check failed");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Portfolio message from ${contact.name}`,
      from_name: "Sanjay S Dev Portfolio",
      name: contact.name.trim(),
      email: contact.email.trim(),
      message: contact.message.trim(),
      source,
      botcheck: "",
    }),
  });

  const result = (await response.json().catch(() => null)) as
    | { success?: boolean; message?: string }
    | null;

  if (!response.ok || result?.success === false) {
    throw new Error(result?.message || "Message could not be sent");
  }
}
