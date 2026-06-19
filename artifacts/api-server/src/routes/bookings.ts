import { Router, type IRouter } from "express";
import { db, bookingsTable, insertBookingSchema, bookingStatusEnum } from "@workspace/db";
import { eq } from "drizzle-orm";
import { z } from "zod";

const router: IRouter = Router();

const ADMIN_PIN = process.env["ADMIN_PIN"] ?? "yakeen2026";

function requireAdmin(req: any, res: any, next: any) {
  const pin = req.headers["x-admin-pin"];
  if (pin !== ADMIN_PIN) {
    res.status(401).json({ error: "غير مصرح" });
    return;
  }
  next();
}

router.post("/bookings", async (req, res) => {
  const parsed = insertBookingSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "بيانات غير صحيحة" });
    return;
  }
  const [booking] = await db.insert(bookingsTable).values(parsed.data).returning();
  res.status(201).json(booking);
});

router.get("/bookings", requireAdmin, async (_req, res) => {
  const bookings = await db
    .select()
    .from(bookingsTable)
    .orderBy(bookingsTable.createdAt);
  res.json({ bookings: bookings.reverse(), total: bookings.length });
});

const statusSchema = z.object({
  status: z.enum(bookingStatusEnum.enumValues),
});

router.patch("/bookings/:id/status", requireAdmin, async (req, res) => {
  const id = Number(req.params["id"]);
  const parsed = statusSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "حالة غير صحيحة" });
    return;
  }
  const [updated] = await db
    .update(bookingsTable)
    .set({ status: parsed.data.status })
    .where(eq(bookingsTable.id, id))
    .returning();
  if (!updated) {
    res.status(404).json({ error: "الحجز غير موجود" });
    return;
  }
  res.json(updated);
});

export default router;
