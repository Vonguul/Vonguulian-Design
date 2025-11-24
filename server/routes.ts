import type { Express } from "express";
import { createServer, type Server } from "http";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // Article endpoint
  app.get("/api/articles/:slug", (req, res) => {
    const filePath = path.join(process.cwd(), "attached_assets", "articles", `${req.params.slug}.md`);
    
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.set("Content-Type", "text/markdown; charset=utf-8");
      res.send(data);
    });
  });

  // Newsletter subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = req.body;

      if (!email || !email.includes("@")) {
        return res.status(400).json({ message: "Invalid email address" });
      }

      const apiKey = process.env.BUTTONDOWN_API_KEY;

      if (!apiKey) {
        console.error("BUTTONDOWN_API_KEY not configured");
        return res.status(500).json({ message: "Newsletter service not configured" });
      }

      // Subscribe to Buttondown
      const response = await fetch("https://api.buttondown.email/v1/subscribers", {
        method: "POST",
        headers: {
          "Authorization": `Token ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        
        // Handle already subscribed error
        if (response.status === 400 && errorData.detail && errorData.detail.includes("already subscribed")) {
          return res.status(200).json({ message: "You are already subscribed" });
        }

        console.error("Buttondown API error:", errorData);
        return res.status(response.status).json({ message: "Failed to subscribe to newsletter" });
      }

      return res.status(200).json({ message: "Successfully subscribed" });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      return res.status(500).json({ message: "An error occurred while subscribing" });
    }
  });

  return httpServer;
}
