// Gráfico de Linhas (Evolução)
const ctxLine = document.getElementById('lineChart').getContext('2d');
new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
    datasets: [{
      label: 'Ordens Abertas',
      data: [20, 20, 20, 20, 20, 20, 20, 19, 15, 0],
      borderColor: '#0f766e',
      backgroundColor: 'rgba(15, 118, 110, 0.1)',
      fill: true,
      tension: 0.4
    }]
  }
});

// Gráfico de Rosquinha (Status)
const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
new Chart(ctxDoughnut, {
  type: 'doughnut',
  data: {
    labels: ['Aberta/Em Análise', 'Aguardando Aprovação', 'Executada', 'Cancelada'],
    datasets: [{
      data: [31, 30, 92, 15],
      backgroundColor: ['#2563eb', '#f59e0b', '#0f766e', '#ef4444']
    }]
  }
});