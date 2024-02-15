export function codeToImage(code: number): string {
  // WMO Weather interpretation codes (WW)
  switch (code) {
    // Code	        Description
    case 0:
      // 0	        Clear sky
      return './icons/Clear.png'
    // 1, 2, 3	    Mainly clear, partly cloudy, and overcast
    // 45, 48	    Fog and depositing rime fog
    case 1:
    case 2:
    case 3:
    case 45:
    case 48:
      return './icons/LightCloud.png'
    // 51, 53, 55	Drizzle: Light, moderate, and dense intensity
    // 56, 57	    Freezing Drizzle: Light and dense intensity
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return './icons/LightRain.png'
    // 61, 63, 65	Rain: Slight, moderate and heavy intensity
    // 66, 67	    Freezing Rain: Light and heavy intensity
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return './icons/HeavyRain.png'
    // 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
    // 77	        Snow grains
    case 71:
    case 73:
    case 75:
    case 77:
      return './icons/Snow.png'
    // 80, 81, 82	Rain showers: Slight, moderate, and violent
    case 80:
    case 81:
    case 82:
      return './icons/Shower.png'

    // 85, 86	    Snow showers slight and heavy
    case 85:
    case 86:
      return './icons/Sleet.png'
    // 95 	        Thunderstorm: Slight or moderate
    // 96, 99 	    Thunderstorm with slight and heavy hail
    case 95:
    case 96:
    case 99:
      return './icons/Thunderstorm.png'
    default:
      return './icons/devchallenges.png'
  }
}
