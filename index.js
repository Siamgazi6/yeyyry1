module.exports = (req, res) => {
  const destination = "https://example.com";

  res.writeHead(302, {
    Location: destination,
    "Cache-Control": "no-store"
  });

  res.end();
};
