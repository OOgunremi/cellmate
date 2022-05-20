import { client } from "../../lib/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("req body", req.body);

    try {
      const test = await client
        .patch(req.body[0]._id)
        .dec({ stock: 1 })
        .commit()
        .then((update) => {
          console.log("Hurray, it is updated! New document:");
          console.log(update);
        })
        .catch((err) => {
          console.error("Oh no, the update failed: ", err.message);
        });

      res.status(200).json(test);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
