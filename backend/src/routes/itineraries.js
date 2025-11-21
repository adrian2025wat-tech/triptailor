import express from "express";
const router = express.Router();

router.get("/:userId", async (req, res) => {
  const db = req.app.get("db");
  const userId = req.params.userId;

  console.log("🔍 GET ITINERARIES FOR USER:", userId);

  try {
    const [rows] = await db.execute(
      "SELECT id, user_id, title, start_date, end_date FROM itineraries WHERE user_id = ? ORDER BY id DESC",
      [userId]
    );

    console.log("📤 RESULTADOS:", rows);

    res.json(rows);

  } catch (err) {
    console.error("❌ ERROR GET:", err);
    res.status(500).json({ error: "Error al obtener itinerarios", details: err });
  }
});


router.post("/", async (req, res) => {
  const db = req.app.get("db");
  const { user_id, title, start_date, end_date } = req.body;

  console.log("📩 POST BODY RECIBIDO:", req.body);

  try {
    const [result] = await db.execute(
      "INSERT INTO itineraries (user_id, title, start_date, end_date) VALUES (?, ?, ?, ?)",
      [user_id, title, start_date, end_date]
    );

    console.log("✅ INSERT SUCCESS:", result);

    res.json({ ok: true, message: "Itinerario creado" });

  } catch (err) {
    console.error("❌ ERROR EN INSERT:", err);
    res.status(500).json({ error: "Error al crear el itinerario", details: err });
  }
});

export default router;
