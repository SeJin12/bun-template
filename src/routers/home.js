import express from "express";
const router = express.Router();

router
  .get("/", (req, res) => {
    res.render('Home');
  })
  .head("/status", (req, res) => {
    res.status(200).send();
  })
  .get("/test", (req, res) => {
    // let b = 1;
    // if (b === 1) {
    //   throw new Error("Custom Error!");
    // }
    res.status(204).send();
  })
  .get("/hash", async (req, res) => {
    // https://bun.sh/docs/api/hashing#bun-password
    const password = "mypwd";
    // const hash = await Bun.password.hash(password);
    // const isMatch = await Bun.password.verify(password, hash);
    const hasher = new Bun.CryptoHasher("sha256");
    hasher.update(password);
    const ecryptValue = hasher.digest("hex");
    console.log(ecryptValue);

    res.status(200).send();
  });

export default router;
