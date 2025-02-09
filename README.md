# ChartJS Plugin for TypingMind

A TypingMind plugin that allows you to create beautiful charts using Chart.js library.

## Structure

This plugin follows the TypingMind plugin architecture:
- `plugin.json` - Plugin manifest and configuration
- `implementation.js` - Client-side implementation
- `openapi.yaml` - API specification

## Installation

1. Make sure all files are pushed to your GitHub repository
2. In TypingMind:
   - Go to Settings > Plugins
   - Add plugin URL: `https://raw.githubusercontent.com/tjkeenan/typingmind-chartjs/main/plugin.json`
   - Click Save

## Usage

After installation, you can create charts by providing Chart.js configurations. The plugin will automatically convert your configuration into a visual chart.

### Examples

1. Bar Chart:
```json
{
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
```json
{
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
```json
{
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

For more configuration examples, visit [Chart.js documentation](https://www.chartjs.org/docs/latest/samples/).

## Development

This plugin is built using:
- Chart.js for chart rendering
- OpenAPI 3.0 for API specification
- TypingMind plugin architecture

For more information about building TypingMind plugins, see the [official documentation](https://docs.typingmind.com/plugins/build-a-typingmind-plugin).