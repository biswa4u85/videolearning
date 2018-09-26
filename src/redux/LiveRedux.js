
const types = {
    SET_CARS: 'SET_CARS',
    SET_CARS_TYPE: 'SET_CARS_TYPE',
    SET_PAGE: 'SET_PAGE',
    SET_BOOK: 'SET_BOOK',
};

export const liveDataActions = {
    setCars: (cars) => {
        return { type: types.SET_CARS, cars };
    },
    setCarsType: (cType) => {
        return { type: types.SET_CARS_TYPE, cType };
    },
    setPage: (page) => {
        return { type: types.SET_PAGE, page };
    },
    setBook: (book) => {
        return { type: types.SET_BOOK, book };
    },
};

const initialState = {
    liveCars: null,
    liveCarsTypes: null,
    pageStatus: null,
    bookStatus: null,
};

export const reducer = (state = initialState, action) => {
    const { type, cars, cType, page, book } = action;
    switch (type) {
        case types.SET_CARS:
            return { ...state, liveCars: cars };
        case types.SET_CARS_TYPE:
            return { ...state, liveCarsTypes: cType };
        case types.SET_PAGE:
            return { ...state, pageStatus: page };
        case types.SET_BOOK:
            return { ...state, bookStatus: book };
        default:
            return state;
    }
};