window.onload = setInterval(horario, 1000);

function horario() {
  var relogio = document.querySelector("#relogio");
  var d = new Date();
  var seg = d.getSeconds();
  var min = d.getMinutes();
  var hr = d.getHours();
  var dia = d.getDate();
  var mes = d.getMonth();
  var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  var diaSem = d.getDay();
  var diasSemana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];
  hora.style.color = 'white';

  hora.innerHTML = diasSemana[diaSem] + ", " + dia + " de " + meses[mes] + ", " + hr + ":" + min + ":" + seg;
}
