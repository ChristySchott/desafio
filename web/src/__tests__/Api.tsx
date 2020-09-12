import { BASE_URL } from '../services/api';

describe('API endpoint', () => {
  it('should contain 3333 on URL', () => {
    expect(BASE_URL).toContain('3333');
  });
});
