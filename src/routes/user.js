import { Router } from "express";

import { getAll } from "@controllers/users.controller";

const router = Router();

/**
 * GET /api/users.
 *
 */
router.get("/", getAll);

export default router;
