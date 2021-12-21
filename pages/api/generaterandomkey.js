export default async function generaterandomkey(req, res) {
  try {
    console.log(req.headers.host);
    if (req.headers.host) {
      console.log("inside IF");
      res.setHeader("Access-Control-Allow-Origin", req.headers.host);
      res.contentType = "application/json";
    }
    res.status(200).json({ msg: req.headers.host });
  } catch (error) {
    console.error("GENERATE RANDOMKEY API ERROR: ", error);
    res.status(500);
  }
}
