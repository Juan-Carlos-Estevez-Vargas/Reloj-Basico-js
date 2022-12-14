(function(){
	var actualizarHora = function(){
		var fecha = new Date,
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear(),
			horas = fecha.getHours(),
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			ampm;

		var pDiaSemana = document.getElementById("diaSemana"),
			pDia = document.getElementById("dia"),
			pMes = document.getElementById("mes"),
			pYear = document.getElementById("year"),
			pHoras = document.getElementById("horas"),
			pMinutos = document.getElementById("minutos"),
			pSegundos = document.getElementById("segundos"),
			pAMPM = document.getElementById("ampm");

		var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
		pDiaSemana.textContent = semana[diaSemana];
		pDia.textContent = dia;
		
		var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
		pMes.textContent = meses[mes];
		pYear.textContent = year;

		if (horas >= 12){
			horas = horas-12;
			ampm = "PM";
		} else { ampm = "AM"; }

		if (horas == 0) { horas = 12; }

		pHoras.textContent = horas;
		pMinutos.textContent = minutos;

		if (minutos <10) { minutos = "0" + minutos };
		if (segundos <10) { segundos = "0" + segundos };
		pSegundos.textContent = segundos;
		pAMPM.textContent = ampm;

	};
	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);
}())