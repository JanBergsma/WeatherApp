export function codeToText(code: number): string {
  // WMO Weather interpretation codes (WW)
  switch (code) {
    // Code	        Description
    case 0:
      // 0	        Clear sky
      return 'Clear Sky'
    // 1, 2, 3	    Mainly clear, partly cloudy, and overcast
    case 1:
      return 'Mainly Clear'
    case 2:
      return 'Partly Cloudy'
    case 3:
      return 'Overcast'
    // 45, 48	    Fog and depositing rime fog
    case 45:
      return 'Fog'
    case 48:
      return 'Rime Fog'
    // 51, 53, 55	Drizzle: Light, moderate, and dense intensity
    case 51:
      return 'Drizzle: Light'
    case 53:
      return 'Drizzle: Moderate'
    case 55:
      return 'Drizzle: Dense'
    // 56, 57	    Freezing Drizzle: Light and dense intensity
    case 56:
      return 'Freezing Drizzle: Light'
    case 57:
      return 'Freezing Drizzle: Dense'
    // 61, 63, 65	Rain: Slight, moderate and heavy intensity
    // 66, 67	    Freezing Rain: Light and heavy intensity
    case 61:
      return 'Rain: Slight'
    case 63:
      return 'Rain: Moderate'
    case 65:
      return 'Rain: Heavy'
    // 66, 67	    Freezing Rain: Light and heavy intensity
    case 66:
      return 'Freezing Rain: Light'
    case 67:
      return 'Freezing Rain: Heavy'
    // 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
    case 71:
      return 'Snow fall: Slight'
    case 73:
      return 'Snow fall: Moderate'
    case 75:
      return 'Snow fall: Heavy'
    // 77	        Snow grains
    case 77:
      return 'Snow Grains'
    // 80, 81, 82	Rain showers: Slight, moderate, and violent
    case 80:
      return 'Rain showers: Slight'
    case 81:
      return 'Rain showers: Moderate'
    case 82:
      return 'Rain showers: Violent'
    // 85, 86	    Snow showers slight and heavy
    case 85:
      return 'Snow showers slight'
    case 86:
      return 'Snow showers Heavy'
    // 95 	        Thunderstorm: Slight or moderate
    case 95:
      return 'Thunderstorm'
    // 96, 99 	    Thunderstorm with slight and heavy hail
    case 96:
      return 'Thunderstorm with slight hail'
    case 99:
      return 'Thunderstorm with heavy hail'
    default:
      return '?'
  }
}
