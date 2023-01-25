import supertest from "supertest";
import app from '../app.js';

const request = supertest(app);

describe('POST /weather', () => {
    it('should have city name ', async () => {
      const response = await request
        .post('/weather')
        .send({ cityName: 'Amsterdam' });
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain('Amsterdam');
    });
  
    it('there is no cityName ', async () => {
      const response = await request.post('/weather');
      expect(response.statusCode).toBe(400);
      expect(response.text).toContain('City is not found!');
    });
  
    it('city name is gibberish', async () => {
      const response = await request.post('/weather').send({ cityName: 'adaad' });
  
      expect(response.statusCode).toBe(404);
      expect(response.text).toContain('CityName is not found!');
    });
  });