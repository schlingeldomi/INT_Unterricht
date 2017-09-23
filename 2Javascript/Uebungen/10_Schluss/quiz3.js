window.addEventListener("load", start);

	function start(){
		var form = document.getElementsByName("test")[0];
		form.addEventListener("change",  check, false);
	}	
	function check() {
	    var r_count = 0;
		var f_count = 0;
		var checked_list = window.document.getElementsByTagName("input");
		
		for ( var i = 0; i < checked_list.length; i++) {
			if (checked_list[i].type == "radio"){
				if (checked_list[i].checked == true){
			
					if (checked_list[i].id == "richtig"){
						r_count++;
					} else {
						f_count++;
					}
				} 
			}
		}
		window.document.forms[0].elements[0].value = r_count;
		window.document.forms[0].elements[1].value = f_count;
	}