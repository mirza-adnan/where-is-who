export const getScaledCoords = ({ x, y, width, height }) => {
    const BIG_NUMBER = 1000;

    const scaledX = Math.round((x * BIG_NUMBER) / width);
    const scaledY = Math.round((y * BIG_NUMBER) / height);

    return [scaledX, scaledY];
};
