var fs = require('fs')
	,	log = require('nodeutil').logger.getInstance()
	, mailer = require('./mailer');

exports.sendmail = function(op,callback){
	var htmlTmp = mailset(op);
	op.html = htmlTmp;
	log.debug('MailOp final ====> %s ',JSON.stringify(op));
	mailer.sendNodeMail(op,callback);	
}

function getmail(name, opt){
	var template = fs.readFileSync(__dirname + '/mailtmp/' + name,'UTF-8');
  if(opt){
    var keys = Object.keys(opt);
    keys.forEach(function(v,i){
      var value = opt[v];
      template = template.replace(new RegExp('\\\$' + v, 'g'),value);
    });
  }
  return template;
}

function mailset(opt){
	var template = opt.html;
  if(opt){
    var keys = Object.keys(opt);
    keys.forEach(function(v,i){
      var value = opt[v];
      template = template.replace(new RegExp('\\\$' + v, 'g'),value);
    });
  }
  return template;
}
