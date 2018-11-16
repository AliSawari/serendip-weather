import * as serendip from "serendip";
import * as WeatherJs from "weather-js";
import {
  ServerServiceInterface,
  Server,
  ServerRequestInterface,
  ServerResponseInterface,
  ServerEndpointInterface,
  ServerError
} from "serendip";
import * as _ from "underscore";
import { join } from "path";

interface WeatherCacheInterface {
  date: number;
  data: object;
  search: string;
}

export class WeatherService implements ServerServiceInterface {
  static dependencies = [];

  private weatherCache: WeatherCacheInterface[] = [];

  constructor() {}

  async start() {}

  weather(search: string) {
    return new Promise((resolve, reject) => {
      var cache = _.findWhere(this.weatherCache, { search: search });

      if (cache)
        if (Date.now() - cache.date < 1000 * 60 * 60 * 6)
          return resolve(cache.data);

      WeatherJs.find({ search: search, degreeType: "C" }, (err, result) => {
        if (err) return reject(err);

        resolve(result);

        if (cache)
          this.weatherCache.splice(this.weatherCache.indexOf(cache), 1);

        this.weatherCache.push({
          search: search,
          date: Date.now(),
          data: result
        });

        console.log("new cache entry", new Date(), search);
      });
    });
  }
}

export class WeatherController {
  static apiPrefix = "";

  private weatherService: WeatherService;

  constructor() {
    this.weatherService = Server.services["WeatherService"];
  }

  public search: ServerEndpointInterface = {
    method: "GET",
    route: "/api/search",
    publicAccess: true,
    actions: [
      async (req, res, next, done) => {
        try {
          var model = await this.weatherService.weather(req.query.q);
          res.setHeader("Content-Type", "application/json");
          res.write(JSON.stringify(model, null, 2));
          done();
        } catch (e) {
          next(new ServerError(500, e.message || e));
        }
      }
    ]
  };
}

serendip.start({
  controllers: [WeatherController],
  staticPath: join("../public"),
  services: [WeatherService],
  httpPort: (process.env.PORT as any) || 2060,
  cpuCores: 1
});
