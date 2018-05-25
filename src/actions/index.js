export const USER_EMAIL = 'USER_EMAIL';

export function userEmail(email) {
  return {
    type: USER_EMAIL,
    data: email
  }
}