google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
  var data = google.visualization.arrayToDataTable([
    ['Element', 'Growth', { role: 'style' }, { role: 'annotation' }],
    ['Project 1', 455, '#2E74DD', '+455'],
    ['Project 2', 320, '#712EDD', '+320'],
    ['Project n', 610, '#DD782E', '+610'],
  ]);

  var options = {
    chartArea: { width: '80%' },
    colors: ['#fff', '#fff'],
    hAxis: {
      minValue: 0,
    },
  };
  var chart = new google.visualization.BarChart(
    document.getElementById('chart_div')
  );
  chart.draw(data, options);
}
