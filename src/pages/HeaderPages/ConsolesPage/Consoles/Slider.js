export const direction_main = (array, dir = '', toggle) => {
    if(toggle === 'main') {
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
    }
    if(toggle === 'ad') {
        if(dir === 'right'){
            array.unshift(...array.splice(1, 6));
        }
        else {
            array.unshift(...array.splice(5, 1));
        }
    }
    return array;
}
