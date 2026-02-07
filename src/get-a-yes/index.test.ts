/// <reference types="jest" />
import { getAYes } from './index.js';

/* mock console.error to keep test output clean */
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('getAYes', () => {
  /* #1 */
  it('returns api-ok and payload when fetch resolves with ok=true', async () => {
    const mockAff = 'Yes, you can!';
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ reason: mockAff }),
    };
    (global as any).fetch = jest.fn().mockResolvedValue(mockResponse);

    const res = await getAYes();
    expect(res.code).toBe('api-ok');
  });

  /* #2 */
  it('returns api-fail when response.ok is false', async () => {
    (global as any).fetch = jest.fn().mockResolvedValue({ ok: false });

    const res = await getAYes();
    expect(res.code).toBe('api-fail');
  });

  /* #3 */
  it('returns api-fail when fetch throws', async () => {
    (global as any).fetch = jest.fn().mockRejectedValue(new Error('network'));

    const res = await getAYes();
    expect(res.code).toBe('api-fail');
  });

  /* #4 */
  it('returns api-fail when json parsing fails', async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockRejectedValue(new Error('invalid json')),
    };
    (global as any).fetch = jest.fn().mockResolvedValue(mockResponse);

    const res = await getAYes();
    expect(res.code).toBe('api-fail');
  });

  /* #5 */
  it('returns object payload with affirmation on success (payload test)', async () => {
    const mockAff = 'Affirmative payload check';
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ reason: mockAff }),
    };
    (global as any).fetch = jest.fn().mockResolvedValue(mockResponse);

    const res = await getAYes();
    expect(res.payload).not.toBeNull();
    expect(res.payload?.affirmation).toBe(mockAff);
  });

  /* #6 */
  it('returns null payload on fetch error (payload null test)', async () => {
    (global as any).fetch = jest.fn().mockRejectedValue(new Error('network'));

    const res = await getAYes();
    expect(res.payload).toBeNull();
    expect(res.code).toBe('api-fail');
  });
});
