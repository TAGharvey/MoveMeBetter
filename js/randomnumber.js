$("#getit").click(function() {
    
	var numRand = Math.floor(Math.random()*4+1);
switch (numRand)
  {
  			case 1:
				$("#getit").href = "#list01";
				Break;
			case 2:
				$("#getit").href = "#list01";
				Break;
			case 3:
				$("#getit").href = "#list01";
				Break;
			case 4:
				$("#getit").href = "#list01";
				Break;
			default:
				$("#getit").href = "#list01";
				Break;
        };
		$("#randomnumber").text(numRand);
});
