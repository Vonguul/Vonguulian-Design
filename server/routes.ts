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

  return httpServer;
}
