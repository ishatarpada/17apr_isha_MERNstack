app.get("/:shortId", async (req, res, next) => {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: { timestamp: Date.now() },
        },
      },
      { new: true } // Return the updated document
    );

    if (!entry) {
      return res.status(404).json({ error: "URL not found" });
    }

    res.redirect(entry.redirectURL);
  } catch (err) {
    console.error("Error handling shortId:", err);
    next(err); // Pass the error to the error-handling middleware
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Internal Server Error" });
});
