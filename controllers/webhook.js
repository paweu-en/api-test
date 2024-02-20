const triggerWebhook = require("../helpers/webhookTrigger");

function webhook(req, res) {
  console.log(req.query.token);
  if (process.env.TOKEN !== req.query.token) {
    res.status(403).json({ message: "No permission", status: 403 });
  } else {
    res.status(200).json({
      message: "API request has been triggered...",
      status: 200,
    });
    triggerWebhook();
  }
}

module.exports = webhook;
