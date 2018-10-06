import { ADD_TRANSACTION } from '../actions/wallet';

const defaultWalletState = {
  transactions: [],
  total: null,
  updated: null,
};

const wallet = (state = defaultWalletState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return { ...state, transactions: [...state.transactions, action.payload] };
    default:
      return state;
  }
};

export default wallet;
