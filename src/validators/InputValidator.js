import {
  INVALID_USER_MONEY_ERROR_MESSAGE,
  INVALID_NUMBER_ERROR_MESSAGE,
  NUMBER_OUT_OF_RANGE_ERROR_MESSAGE,
  BONUS_NUMBER_DUPLICATE_ERROR_MESSAGE,
} from '../constants/message.js';

import { LOTTO_PRICE } from '../constants/config.js';

export function validateUserMoney(userMoney) {
  if (userMoney % LOTTO_PRICE === 0) {
    return;
  }

  throw new Error(INVALID_USER_MONEY_ERROR_MESSAGE);
}

export function validateNumber(number) {
  if (isNaN(parseInt(number, 10))) {
    throw new Error(INVALID_NUMBER_ERROR_MESSAGE);
  }
}

export function validateBonusNumber(bonusNumber, winningNumbers) {
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(NUMBER_OUT_OF_RANGE_ERROR_MESSAGE);
  }

  winningNumbers.forEach((number) => {
    if (bonusNumber === number) {
      throw new Error(BONUS_NUMBER_DUPLICATE_ERROR_MESSAGE);
    }
  });
}
