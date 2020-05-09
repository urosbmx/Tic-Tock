var igraci=[];
var oznake=["X","O"];
var CijiJeRed =0;
var krajIgre = true;
var rezultat =[0,0];
var vrednostpobede = [7,56,73,84,146,273,292,448];
var igraJegotova = false;


igraci[0]=prompt("Vi ste prvi igrač", "");
igraci[1]=prompt("Vi ste drugi igrač", "");



function ProveraPobednika()
{
	for(var i=0; i < vrednostpobede.length; i++)	
	    {
		if((rezultat[CijiJeRed] & vrednostpobede[i]) == vrednostpobede[i])
		{
			//alert("Pobednik je " + igraci[CijiJeRed]);
			
			document.getElementById("poruka-u-igri").innerText = "Pobednik je  " + igraci[CijiJeRed];
			igraJegotova = true;
			
			
		}
		
		}
		if(((rezultat[0]+ rezultat[1])== 511) && !igraJegotova){
			document.getElementById("poruka-u-igri").innerText = "Igra je završena "  + "Nemamo pobednika " ;
			igraJegotova=true;
		}
}


//Pokreni igricu
function play(clickedDiv,divValue)
{
if(!igraJegotova){	
rezultat[CijiJeRed]+=divValue;
clickedDiv.onclick="";
clickedDiv.innerHTML="<span>"+ oznake[CijiJeRed] +"</span>";
ProveraPobednika();
if(!igraJegotova){ toggle();}
}
}

//Ovo je funkcija ciji je red
function toggle(){
	if(CijiJeRed==0)CijiJeRed=1;
	else CijiJeRed=0;
	
	document.getElementById("poruka-u-igri").innerText = "Red je na igrača  " +igraci[CijiJeRed];
}	
//Sluzi da se restartuje igrica
function ponovo(){
	document.location.reload(true);
	
}