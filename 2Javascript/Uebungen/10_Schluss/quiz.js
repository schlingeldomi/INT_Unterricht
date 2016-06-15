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
		return false;
	}
	function frage(){
		var frag = document.createDocumentFragment();
	    var para = document.createElement("P");
		var t = document.createTextNode("Die neue Frage: ");
		para.appendChild(t);
		frag.appendChild(para);
		var btn = document.createElement("INPUT");
		btn.setAttribute("type", "text");
        btn.setAttribute("size", "50");
	    frag.appendChild(btn);
		for ( var i = 0; i < 4 ; i++){
			var para1 = document.createElement("P");
			var t1 = document.createTextNode(i+1 + ". Antwort: ");
			para1.appendChild(t1);
			frag.appendChild(para1);
			
			var btn = document.createElement("INPUT");
			btn.setAttribute("type", "text");
			btn.setAttribute("size", "50");
			frag.appendChild(btn);
			
			var br1 = document.createElement("br");
			frag.appendChild(br1);
			
			var t2 = document.createTextNode("richtig: ");
			frag.appendChild(t2);
			
			var r1 = document.createElement("INPUT");
		    r1.setAttribute("type", "radio");
			r1.setAttribute("name", "bool");
			frag.appendChild(r1);
			
			var t3 = document.createTextNode("falsch: ");
			frag.appendChild(t3);
			
			var r2 = document.createElement("INPUT");
		    r2.setAttribute("type", "radio");
			r2.setAttribute("name", "bool");
			frag.appendChild(r2);
		}
		
        window.document.body.appendChild(frag);
		return false;
	}