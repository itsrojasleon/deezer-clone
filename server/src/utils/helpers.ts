interface Codes {
  ok: number;
  unprocessableEntity: number;
}

export const API_URL: string = 'https://api.deezer.com';
export const ERROR_MESSAGE = 'Something went wrong';
export const statusCodes: Codes = {
  ok: 200,
  unprocessableEntity: 422
};
