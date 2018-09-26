const types = {
    LOGOUT: 'LOGOUT',
    PARMS: 'SET_PARMS',
    LOGIN: 'LOGIN_SUCCESS',
    CHILD: 'CHILD_SUCCESS',
    SELECT_CHILD: 'SELECT_CHILD',
    FINISH_INTRO: 'FINISH_INTRO'
};

export const actions = {
    setParms: (parms) => {
        return { type: types.PARMS, parms };
    },
    login: (user, token) => {
        return { type: types.LOGIN, user, token };
    },
    child: (childs) => {
        return { type: types.CHILD, childs };
    },
    selectChild: (selChild) => {
        return { type: types.SELECT_CHILD, selChild };
    },
    logout() {
        return { type: types.LOGOUT };
    },
    finishIntro() {
        return { type: types.FINISH_INTRO };
    }
};

const initialState = {
    user: null,
    parms: null,
    childs: null,
    selChild: null,
    token: null,
    finishIntro: null
};

export const reducer = (state = initialState, action) => {
    const { type, user, token, parms, childs, selChild } = action;
    switch (type) {
        case types.LOGOUT:
            return Object.assign({}, initialState);
        case types.PARMS:
            return { ...state, parms };
        case types.LOGIN:
            return { ...state, user, token };
        case types.CHILD:
            return { ...state, childs };
        case types.SELECT_CHILD:
            return { ...state, selChild };
        case types.FINISH_INTRO:
            return { ...state, finishIntro: true };
        default:
            return state;
    }
};