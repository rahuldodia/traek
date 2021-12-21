export default async function generaterandomkey(req, res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.contentType = "application/json";
    console.log(req.headers.host);
    res.status(200).json({ msg: req.headers.host });
  } catch (error) {
    console.error("GENERATE RANDOMKEY API ERROR: ", error);
    res.status(500);
  }
}
