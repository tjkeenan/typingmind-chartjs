// Load Chart.js
const loadChartJS = async () => {
  if (window.Chart) return;

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const generateChart = async (chartConfig) => {
  try {
    // Create container
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.maxWidth = '600px';
    container.style.margin = '20px 0';

    // Create canvas
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    new Chart(ctx, chartConfig);

    return { type: 'display', content: container };
  } catch (error) {
    return { type: 'error', content: `Failed to create chart: ${error.message}` };
  }
};

const api = {
  createChart: {
    description: "Create a chart using Chart.js configuration",
    parameters: {
      type: "object",
      properties: {
        chartConfig: {
          type: "object",
          description: "Chart.js configuration object"
        }
      },
      required: ["chartConfig"]
    },
    implementation: async ({ chartConfig }) => {
      await loadChartJS();
      return generateChart(chartConfig);
    }
  }
};

window.defineApi = () => api;