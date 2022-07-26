export const direction = (array, dir = '') => {
    if(dir === 'right'){
        if(array[0].enable === true) {
            array[0].enable = false;
            array.unshift(...array.splice(1, 5));
            array[0].enable = true;
        }
    }
    if(dir === 'left') {
        if(array[0].enable === true) {
            array[0].enable = false;
            array.unshift(...array.splice(4, 1));
            array[0].enable = true;
        }
    }
    return array;
}