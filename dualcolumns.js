$.fn.dualColumns = function(cutoff, fullclass, halfclass, otherclass) {
	//handle undefined cutoff
	if(typeof cutoff === 'undefined'){ 
		throw new Error("A charactor cuttoff limit is required"); 
	}
	
	//handle undefined $(this)
	if(typeof $(this) === 'undefined'){ 
		throw new Error("A class selector is required is required"); 
	}
	
	//handled undefined fullclass
	if(typeof fullclass === 'undefined'){ 
		throw new Error("A class declaration for full length is required");  
	}
	
	//handled undefined halfclass for half cells
	if(typeof halfclass === 'undefined'){ 
		throw new Error("A class declaration for half length is required"); 
	}
	//optional extra class for right side
  	otherclass = typeof otherclass !== 'undefined' ? otherclass : halfclass;
  	
        var halfcount = 0;
  	$(this).each(function(){
                
                //first
                if(!$(this).prev().html()) {
                        if($(this).html().length < cutoff && $(this).next().html().length < cutoff){
                                $(this).addClass(halfclass);
                                $(this).removeClass(fullclass); 
                                halfcount++;
                        } else {
                                $(this).addClass(fullclass);
                                $(this).removeClass(halfclass);
                                halfcount = 0;
                        } 
                //last
                } else if(!$(this).next().html()) {
                        if($(this).html().length < cutoff && $(this).prev().html().length < cutoff){
                                $(this).addClass(otherclass);
                                $(this).removeClass(fullclass); 
                                halfcount++;
                        } else {
                                $(this).addClass(fullclass);
                                $(this).removeClass('half');
                                halfcount = 0;
                        } 
                //normal
                } else { 
                        if($(this).html().length < cutoff){
                                //prefigure
                                if(halfcount % 2 == 1 && halfcount != 0) {
                                        //we are on a odd one, we're gtg
                                        var halfsafe = true;
                                } else {
                                        //we are on a new one
                                        if($(this).next().html().length < cutoff){
                                                //half it
                                                var halfsafe = true;
                                        } else {
                                                //full it
                                                var halfsafe = false;
                                        }
                                }
                                if(halfsafe) 
                                {
                                	if(halfcount % 2 == 0){
		                                $(this).addClass(halfclass);
		                                $(this).removeClass(fullclass); 
                                	} else {
		                                $(this).addClass(otherclass);
		                                $(this).removeClass(fullclass);
                                	} 
                                        halfcount++;
                                } else {
                                        $(this).addClass(fullclass);
                                        $(this).removeClass(halfclass);
                                        $(this).removeClass(halfclass);
                                        halfcount = 0;
                                }
                        } else {
                                $(this).addClass(fullclass);
                                $(this).removeClass(halfclass);
                                $(this).removeClass(otherclass);
                                halfcount = 0;
                        } 
                }
        });
  	
};
