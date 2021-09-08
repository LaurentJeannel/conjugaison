exports.action = function(data){
var phrase = JarvisIA.reco.trim().split(" ")
var mot=phrase[phrase.length-1] 
console.log(phrase,mot)
var url = "https://conjugaison.lemonde.fr/conjugaison/search?verb="+mot
var request = require('request')

request({ 'uri' : url , 'headers':{'Accept-Charset': 'utf-8'} }, function (err, response, body){
    		
	var $ = require('cheerio').load(body, { xmlMode: false, ignoreWhitespace: false, lowerCaseTags: false });

		switch (data.conjugaison) {
  			
  			case '0':
 				var a= $('.vtfc-verbs-conjugation > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)').text()
				JarvisIASpeech(a)
            break;
  
  			case '1':
    			var a= $('.vtfc-verbs-conjugation > div:nth-child(4) > div:nth-child(3) > ul:nth-child(2)').text()
				JarvisIASpeech(a)
    		break;
            
            case '2':
 				var a= $('.vtfc-verbs-conjugation > div:nth-child(2) > div:nth-child(3) > ul:nth-child(2)').text()
				JarvisIASpeech(a)
    		break;
  
 			case '3':
    			var a= $('.vtfc-verbs-conjugation > div:nth-child(4) > div:nth-child(1) > ul:nth-child(2)').text()
				JarvisIASpeech(a)
    		break; 
  			
  			default:
		    console.log(`Sorry, we are out of .`);JarvisIASpeech("désolé je n'ai rien trouvé")
		}
})
}