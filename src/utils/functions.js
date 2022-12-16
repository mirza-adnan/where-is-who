export const getScaledCoords = ({ x, y, width, height }) => {
    const BIG_NUMBER = 1000;

    const scaledX = Math.round((x * BIG_NUMBER) / width);
    const scaledY = Math.round((y * BIG_NUMBER) / height);

    return [scaledX, scaledY];
};

export const getMinutes = (time) => {
    return ("0" + Math.floor(time / 60000)).slice(-2);
};

export const getSeconds = (time) => {
    return ("0" + Math.floor((time / 1000) % 60)).slice(-2);
};
