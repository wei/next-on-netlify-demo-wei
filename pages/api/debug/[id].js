export default async ( req, res ) => {
  res.json({ query: req.query });
  res.end();
};
