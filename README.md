# ChartJS Plugin for TypingMind

Create beautiful charts in TypingMind using Chart.js library.

## Installation

1. Host these files on a web server or use GitHub Pages
2. In TypingMind, go to Settings > Plugins
3. Add plugin URL (e.g., `https://yourdomain.com/path/to/index.html` or `https://username.github.io/repo-name/index.html`)

## Usage

Use the `/chart` command followed by a valid Chart.js configuration in JSON format.

### Examples

1. Bar Chart:
```
/chart {
  "type": "bar",
  "data": {
    "labels": ["January", "February", "March"],
    "datasets": [{
      "label": "Sales",
      "data": [65, 59, 80],
      "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"]
    }]
  }
}
```

2. Line Chart:
```
/chart {
  "type": "line",
  "data": {
    "labels": ["Mon", "Tue", "Wed", "Thu", "Fri"],
    "datasets": [{
      "label": "Temperature",
      "data": [22, 24, 27, 23, 25],
      "borderColor": "#36A2EB",
      "tension": 0.1
    }]
  }
}
```

3. Pie Chart:
```
/chart {
  "type": "pie",
  "data": {
    "labels": ["Red", "Blue", "Yellow"],
    "datasets": [{
      "data": [300, 50, 100],
      "backgroundColor": [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ]
    }]
  }
}
```

## Supported Chart Types

- Bar
- Line
- Pie
- Doughnut
- Radar
- Polar Area
- Bubble
- Scatter

For more chart examples and configuration options, visit [Chart.js documentation](https://www.chartjs.org/docs/latest/samples/).