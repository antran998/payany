$(function() {

	var theTree=[
		{id:"785567$513/13256",child:[
			"741147$5134/13256",
			{id:"852236$51/13256",child:["555000$5135/13256","515151$988/13256"]}
		]},
		"123568$222/96665",
		{id:"897567$445/10000",child:[
			{id:"456777$5198/10000",
				child:[
					"888888$30/10000",
					"999999$403/10000",
					{id:"250057$78/10000",child:["666666$674/10000"]}
				]
			},
			"456888$8777/10000",
			"456999$111/10000"
		]},
		{id:"111111$66/66666",child:[
			"662662$667/66666",
			"333555$8845/66666",
			{id:"333664$1234/66666",child:["753865$3669/66666","951148$785/66666",{id:"897222$3001/66666",child:["100230$8754/66666"]}]}
		]}
	]

	buildTree(theTree);
	// $('.align-tree').width($('.tree-container').width()+100)

	function buildTree(jsonVar){
		
		var tempp = JSON.stringify(jsonVar);
		tempp = tempp.toString();
		tempp = tempp.replace(" ","");

		var stage = [],
		level = 0;
		stage[level] = '.tree';

		var loop = true;
		var counting = 0;

		// style
		var maxLeft = 0;
		// style

		while(loop){
		// while(counting<10){
			var sBracket = tempp.search("{"),
			eBracket = tempp.search("}"),
			dolSign = tempp.search(/\$/) //add
			idFinder = tempp.search(/\d/);

			var currID = tempp.substring(idFinder, idFinder+6),
			dolRatio = tempp.substring(dolSign,tempp.length),//add
			eRatio = dolRatio.search('"');
			eRatio += dolSign;

			dolRatio = dolRatio.substring(0,dolRatio.search('"'));

			if(idFinder==-1){
				break;
			}

			//-- with eBracket
			if(idFinder>eBracket){
				var countEBracket = tempp.substring(eBracket,idFinder);
				countEBracket = countEBracket.match(/\}/g).length;
				level-=countEBracket;
			}
			if(idFinder<eBracket && sBracket==-1){
				var node = `
					<li id="c${currID}"><a>${currID} [${dolRatio}]</a></li>
				`;//add
				$(stage[level]).append(node);
			}
			//-- with eBracket
			
			//-- with sBracket
			if(idFinder<sBracket){
				var node = `
					<li id="c${currID}"><a>${currID} [${dolRatio}]</a></li>
				`;//add
				$(stage[level]).append(node);
			}
			if(idFinder>sBracket && sBracket!=-1){
				var node = `
					<li id="c${currID}">
						<a>${currID} [${dolRatio}]</a>
						<ul class="c${currID}"></ul>
					</li>
				`;//add
				$(stage[level]).append(node);

				level++;
				stage[level]='#c'+currID+' .c'+currID;
			}
			//-- with sBracket
			// counting++;
			// console.log(tempp+" "+stage[level])
			tempp = tempp.substring(eRatio,tempp.length);
		}
	}

	$('.tree li a').click(function(event) {
		if(!$(this).next('ul').is(':hidden')){
			$(this).next('ul').slideUp( "slow" );
		}
		else{
			$(this).parent().find('ul').slideDown( "slow" );
		}
	});
});