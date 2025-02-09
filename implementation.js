// Load Chart.js
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
document.head.appendChild(script);

script.onload = () => {
  // Plugin implementation
  window.typingmindPlugin = {
    async onCommand(args) {
      let chartConfig;
      try {
        chartConfig = JSON.parse(args);
      } catch (e) {
        return document.createTextNode('Error: Invalid JSON configuration');
      }

      // Create container
      const container = document.createElement('div');
      container.style.width = '100%';
      container.style.maxWidth = '600px';
      container.style.margin = '20px 0';

      // Create canvas
      const canvas = document.createElement('canvas');
      container.appendChild(canvas);

      try {
        const ctx = canvas.getContext('2d');
        new Chart(ctx, chartConfig);
        return container;
      } catch (e) {
        return document.createTextNode('Error: Invalid Chart.js configuration');
      }
    }
  };
};