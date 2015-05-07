var mailmanager = require('../lib/mailmanager')
	,	log = require('nodeutil').logger.getInstance();

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.sendmail = function(req, res){
	var op = req.body
		, checkErr = checkInput(op)
		, result = {};

	log.debug('The mailop ====> %s', JSON.stringify(op));
		
	if(JSON.stringify(checkErr) === "{}"){
		mailmanager.sendmail(op, function(sendResult) {
			log.debug('Send Result ====> %s ',sendResult);
			checkErr.status_ = sendResult;
			res.send(checkErr);
		});
	}
	else{
		log.error(JSON.stringify(checkErr));
		res.send(checkErr);
	}
}

function checkInput(op) {
	var err = {};
	if(!op.to) err.to = 'receiver null';
	if(typeof op.html != "string") err.html = 'type err';
	return(err);
}
