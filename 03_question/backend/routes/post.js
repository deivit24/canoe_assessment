/** Route for CANOE. */

const express = require("express");
const router = express.Router();

let fakeDB = []

/** POST / {userdata}  => {token: token} */

router.post("/", async (req, res, next) => {
  try {
    let form = req.body;
    let arr = [form.choiceA, form.choiceB, form.choiceC]
    if(arr.join(' ').match(/calculus/i)){
      // imitating saving to correct database
      fakeDB.push(form)
      return res.status(201).json(form)
    } else {
      return res.status(400).json({error: {
        status: 400,
        msg: 'Need Calculus in one of your choices'
      }})
    }
    console.log(req.body);
    // const newUser = await User.register(req.body);
    // const token = createToken(newUser);
    // return res.status(201).json({ token });
  } catch (e) {
    return next(e);
  }
});

module.exports = router