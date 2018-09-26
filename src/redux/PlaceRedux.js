const types = {
    RESET_LOCATION: 'RESET_LOCATION',
    PREDICT_LOCATION: 'PREDICT_LOCATION',
    SET_LOCATION: 'SET_LOCATION',
};

export const locationActions = {
    resetPlace: () => {
        return { type: types.RESET_LOCATION };
    },
    predictLocationsGet: (locations) => {
        return { type: types.PREDICT_LOCATION, locations };
    },
    setLocation: (locationType, location) => {
        return { type: types.SET_LOCATION, locationType, location };
    },
};

const initialState = {
    currentLocation: null,
    pickLocation: null,
    dropLocation: null,
    predictLocation: null,
    locationType: null,
};

export const reducer = (state = initialState, action) => {
    const { type, locations, locationType, location } = action;
    switch (type) {
        case types.RESET_LOCATION:
            return Object.assign({}, initialState);
        case types.PREDICT_LOCATION:
            return { ...state, predictLocation: locations };
        case types.SET_LOCATION:
            if (locationType === 'current') {
                return { ...state, predictLocation: null, locationType, currentLocation: location };
            } else if (locationType === 'pickup') {
                return { ...state, predictLocation: null, locationType, pickLocation: location };
            } else if (locationType === 'drop') {
                return { ...state, predictLocation: null, locationType, dropLocation: location };
            }
        default:
            return state;
    }
};