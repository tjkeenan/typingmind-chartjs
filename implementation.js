// Load Chart.js
if (!window.Chart) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  script.async = true;
  
  script.onload = () => {
    console.log('Chart.js loaded successfully');
  };
  
  script.onerror = (error) => {
    console.error('Failed to load Chart.js:', error);
  };
  
  document.head.appendChild(script);
}

class ChartJSPlugin {
  async init() {
    // Wait for Chart.js to load if it's not already loaded
    if (!window.Chart) {
      await new Promise(resolve => {
        const checkChart = setInterval(() => {
          if (window.Chart) {
            clearInterval(checkChart);
            resolve();
          }
        }, 100);
      });
    }
  }

  async onCommand(command, args) {
    await this.init();

    let chartConfig;
    try {
      chartConfig = JSON.parse(args);
    } catch (e) {
      return {
        error: true,
        message: 'Invalid JSON configuration'
      };
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
      return {
        element: container
      };
    } catch (e) {
      return {
        error: true,
        message: 'Invalid Chart.js configuration: ' + e.message
      };
    }
  }
}

window.pluginInstance = new ChartJSPlugin();