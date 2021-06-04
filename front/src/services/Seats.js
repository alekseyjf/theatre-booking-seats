export default class SeatsService {

  _apiBase = 'http://localhost:5000';

  async getRes(url, method = "GET", data) {
    const res = await fetch(`${this._apiBase}${url}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method,
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    return await res.json();
  }

  getAllSeats = async () => {
    const res = await this.getRes(`/get-all-seats`);
    // return res.results.map(this._transformPlanet);
    return await res;
  };

  bookingSeat = async (data) => {
    const res = await this.getRes(`/booking`, 'POST', data);
    return await res;
  };

  /*_extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  };*/
}