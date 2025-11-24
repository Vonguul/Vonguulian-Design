export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const apiKey = process.env.BUTTONDOWN_API_KEY;

    if (!apiKey) {
      console.error("BUTTONDOWN_API_KEY not configured");
      return res
        .status(500)
        .json({ message: "Newsletter service not configured" });
    }

    // Subscribe to Buttondown
    const response = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Buttondown API error - Status:", response.status);
      console.error("Buttondown API error - Full response:", JSON.stringify(errorData, null, 2));

      // Handle already subscribed error
      if (
        response.status === 400 &&
        errorData.detail &&
        errorData.detail.includes("already subscribed")
      ) {
        return res.status(200).json({ message: "You are already subscribed" });
      }

      return res.status(422).json({
        message: "Failed to subscribe to newsletter",
        detail: Array.isArray(errorData.detail)
          ? errorData.detail.map((e: any) => `${e.loc?.[0] || "unknown"}: ${e.msg}`)
          : errorData.detail || errorData.message || "Unknown error",
      });
    }

    return res.status(200).json({ message: "Successfully subscribed" });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while subscribing" });
  }
}
