import data from "./data";
// api/newsDat
export default function handler(req, res) {
  const { News } = data;
  if (News) return res.status(200).json(News);
  return res.status(400).json({ error: "Data not found" });
}
