# ChartJS Plugin for TypingMind

Create beautiful charts in TypingMind using Chart.js library.

## Files

- `plugin.json` - Plugin metadata and configuration
- `implementation.js` - Plugin implementation with Chart.js integration

## Installation

1. Add the plugin to TypingMind:
   - Go to Settings > Plugins
   - Add plugin URL: `https://raw.githubusercontent.com/tjkeenan/typingmind-chartjs/main`
   - Click Save

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