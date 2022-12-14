export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  visibility: number;
  pop: number;
  dt_txt: string;
}

export interface IWeather {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
}
