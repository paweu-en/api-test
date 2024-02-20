const shell = require("shelljs");

function triggerWebook() {
  shell.cd("~/app");
  shell.exec("npm run rebuild");
  shell.mv(".next", ".old");
  shell.mv(".temp", ".next");
  shell.rm("-rf", ".old");
  shell.exec("pm2 reload nextjs");
}

module.exports = triggerWebook;
