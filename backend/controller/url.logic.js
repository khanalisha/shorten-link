const { linkModel } = require("../modal/linkmodal");

function createShortURL() {
  const character =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = 5;
  const sortURL = "";

  for (let i = 0; i < length; i++) {
    sortURL += character.charAt(Math.floor(Math.random() * character.length));
  }
  return sortURL;
}

exports.generateCustomURL = async (req, res, next) => {
  try {
    const { link, shortURL } = req.body;

    const expire = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
    // console.log(expire, link, shortURL);
    const userURL = new linkModel({
      link,
      shortURL: shortURL || createShortURL(),
      expiresAt: expire,
    });
    await userURL.save();

    res.status(200).json({ msg: "URL sucessfully shorten", userURL });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.Redirect = async (req, res, next) => {
  const { shorten } = req.params;

  const url = await linkModel.findOne({ shortURL: shorten });
  if (!url) {
    return res.status(400).send("<h1>URL Not Found</h1>");
  }
  if (url.expiresAt && new Date() > url.expiresAt) {
    return res.status(401).send("<h1>URL expired</h1>");
  }
  console.log(shorten, "aa");
  res.redirect(url.link);
};
