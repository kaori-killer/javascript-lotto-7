import { INVALID_USER_MONEY_ERROR_MESSAGE } from '../constants/message';

import { LOTTO_PRICE } from '../constants/config';

export function validateUserMoney(userMoney) {
  if (userMoney % LOTTO_PRICE === 0) {
    return;
  }

  throw new Error(INVALID_USER_MONEY_ERROR_MESSAGE);
}
export function a() {}