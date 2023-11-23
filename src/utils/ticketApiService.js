import ResourceError from './ResourceError';
class ticketApiService {
  _searchIdUrl = 'https://aviasales-test-api.kata.academy/search';
  _ticketsUrl = 'https://aviasales-test-api.kata.academy/tickets?searchId=';

  async getSearchId() {
    return await this.sendData(this._searchIdUrl);
  }
  async geTickets(searchId) {
    return await this.sendData(this._ticketsUrl + searchId);
  }
  async sendData(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new ResourceError('Error number is ' + res.status);
      }
      const resJson = await res.json();
      //console.log(resJson);
      return resJson;
    } catch (error) {
      return error;
    }
  }
}
export default ticketApiService;
