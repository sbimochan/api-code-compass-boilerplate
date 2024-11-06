import { Router } from "express";

import userRoutes from "./user";

const router = Router();

/**
 * GET /api.
 */
router.get("/", (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use("/users", userRoutes);

export default router;
