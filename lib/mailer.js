var nodemailer = require('nodeutil').mailutil
	,	os = require('os')
	//,	smtpTransport = nodemailer.createTransport('SMTP',{
	//host: 'localhost'
	//})
	,	mailOptions = {
		from: os.hostname() + '<service@maicloud>', //sender
		to: '',
		subject: '',
		text: '', // plaintext body
		html: ''
	};
	
exports.sendNodeMail = function(op,callback) {
	/*mailOptions.to = receivers;
	mailOptions.subject = subject;
	mailOptions.html = msg;
	smtpTransport.sendMail(mailOptions, function(error, response){
		if(error){
         console.log(error);
      }else{
				 console.log("Message sent: " + response.message);
      }
		smtpTransport.close(); // shut down the connection pool, no more messages
	});*/
	nodemailer.init(
		{"smtpOptions":{"host":"localhost"}, "sender": "MiCloud <no-reply@micloud.tw>"}
	);
	nodemailer.sendNodeMail(op,
		true,
		function(){
			console.log('Send mail done...');
			callback('Send mail done');
		}
	);
}	

