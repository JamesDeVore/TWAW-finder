const sendmail = require("sendmail")({
  logger: {
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error
  },
  silent: false,
  devPort: 1025, // Default: False
  devHost: "localhost", // Default: localhost
  smtpPort: 2525, // Default: 25
  smtpHost: "localhost" // Default: -1 - extra smtp host after resolveMX
});

sendmail(
  {
    from: "test@yourdomain.com",
    to: "jdevore4592@gmail.com",
    replyTo: "jason@yourdomain.com",
    subject: "MailComposer sendmail",
    html: "Mail of test sendmail "
  },
  function(err, reply) {
    if(err){
      console.log("error")
    }
    console.log(err && err.stack);
    console.dir(reply);
  }
);
