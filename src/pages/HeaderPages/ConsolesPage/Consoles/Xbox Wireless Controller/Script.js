import ad_1 from './assets/image 2.png'
import ad_2 from './assets/image 3.png'
import ad_3 from './assets/image 4.png'
import ad_4 from './assets/image 5.png'
import ad_5 from './assets/image 6.png'
import ad_6 from './assets/image 7.png'

import image_1_white from './assets/WhiteColor/image 1.png'
import image_2_white from './assets/WhiteColor/image 2.png'
import image_3_white from './assets/WhiteColor/image 3.png'
import image_4_white from './assets/WhiteColor/image 4.png'
import image_5_white from './assets/WhiteColor/image 5.png'

import image_1_black from './assets/BlackColor/image 1.png'
import image_2_black from './assets/BlackColor/image 2.png'
import image_3_black from './assets/BlackColor/image 3.png'
import image_4_black from './assets/BlackColor/image 4.png'
import image_5_black from './assets/BlackColor/image 5.png'

import image_1_blue from './assets/BlueColor/image 1.png'
import image_2_blue from './assets/BlueColor/image 2.png'
import image_3_blue from './assets/BlueColor/image 3.png'
import image_4_blue from './assets/BlueColor/image 4.png'
import image_5_blue from './assets/BlueColor/image 5.png'

import image_1_red from './assets/RedColor/image 1.png'
import image_2_red from './assets/RedColor/image 2.png'
import image_3_red from './assets/RedColor/image 3.png'
import image_4_red from './assets/RedColor/image 4.png'
import image_5_red from './assets/RedColor/image 5.png'

import image_1_volt from './assets/VoltColor/image 1.png'
import image_2_volt from './assets/VoltColor/image 2.png'
import image_3_volt from './assets/VoltColor/image 3.png'
import image_4_volt from './assets/VoltColor/image 4.png'
import image_5_volt from './assets/VoltColor/image 5.png'

export const ad_cards = [
    {image: ad_1, text: 'Xbox Rechargeable Battery + USB-C®', price: 24.99},
    {image: ad_2, text: 'PDP Ultra Slim Charging System', price: 24.99},
    {image: ad_3, text: 'Seagate Game Drive Hub for Xbox 8TB', price: 179.99},
    {image: ad_4, text: 'Play & Charge for Xbox Series X|S', price: 17.99},
    {image: ad_5, text: 'Seagate Storage Expansion Card - 1TB for Xbox Series X|S', price: 219.99},
    {image: ad_6, text: 'Cable Matters Certified Active Ultra High Speed HDMI Cable', price: 64.99},
]

export const colors = ['#EB1C1E', '#000000', '#FFFFFF', '#1F5BCC', '#DCF260']

export const setArray = (color) => {
    switch (color) {
        case 'white': return card_img_white;
        case 'black': return card_img_black;
        case 'blue': return card_img_blue;
        case 'red': return card_img_red;
        case 'volt': return card_img_volt;

        default: break;
    }
}

 const card_img_white = [
    {id: 1, name: image_1_white, enable: true},
    {id: 2, name: image_2_white, enable: false},
    {id: 3, name: image_3_white, enable: false},
    {id: 4, name: image_4_white, enable: false},
    {id: 5, name: image_5_white, enable: false},
]

 const card_img_black = [
    {id: 1, name: image_1_black, enable: true},
    {id: 2, name: image_2_black, enable: false},
    {id: 3, name: image_3_black, enable: false},
    {id: 4, name: image_4_black, enable: false},
    {id: 5, name: image_5_black, enable: false},
]

 const card_img_blue = [
    {id: 1, name: image_1_blue, enable: true},
    {id: 2, name: image_2_blue, enable: false},
    {id: 3, name: image_3_blue, enable: false},
    {id: 4, name: image_4_blue, enable: false},
    {id: 5, name: image_5_blue, enable: false},
]

const card_img_red = [
    {id: 1, name: image_1_red, enable: true},
    {id: 2, name: image_2_red, enable: false},
    {id: 3, name: image_3_red, enable: false},
    {id: 4, name: image_4_red, enable: false},
    {id: 5, name: image_5_red, enable: false},
]

const card_img_volt = [
    {id: 1, name: image_1_volt, enable: true},
    {id: 2, name: image_2_volt, enable: false},
    {id: 3, name: image_3_volt, enable: false},
    {id: 4, name: image_4_volt, enable: false},
    {id: 5, name: image_5_volt, enable: false},
]



export const descriptions = [
    {name: 'Elevate your game', text: 'Experience the modernized design of the Xbox Wireless Controller, ' +
            'featuring sculpted surfaces and refined geometry for enhanced comfort during gameplay. ' +
            'Stay on target with textured grip and a hybrid D-pad. Seamlessly capture and share content with' +
            ' a dedicated Share button. Quickly pair with, play on, and switch between devices including ' +
            'Xbox Series X|S, Xbox One, Windows PC, Android, and iOS'},
    {name: 'Compatibility', text: 'Includes Xbox Wireless and Bluetooth® technology for wireless gaming on console, ' +
            'PC, mobile phones and tablets. Plug in any compatible headset with the 3.5 mm stereo headset jack.'}
]


export const direction = (array, dir) => {
    if(dir === 'right'){
        console.log(dir)
        console.log(array)
    }
    else {
        console.log(dir)
        console.log(array)
    }
}