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

export const ad_cards = [
    {image: ad_1, text: 'Xbox Rechargeable Battery + USB-C®', price: 24.99},
    {image: ad_2, text: 'PDP Ultra Slim Charging System', price: 24.99},
    {image: ad_3, text: 'Seagate Game Drive Hub for Xbox 8TB', price: 179.99},
    {image: ad_4, text: 'Play & Charge for Xbox Series X|S', price: 17.99},
    {image: ad_5, text: 'Seagate Storage Expansion Card - 1TB for Xbox Series X|S', price: 219.99},
    {image: ad_6, text: 'Cable Matters Certified Active Ultra High Speed HDMI Cable', price: 64.99},
]

export const colors = ['#EB1C1E', '#000000', '#FFFFFF', '#1F5BCC', '#DCF260']

export const card_img_white = [
    {name: image_1_white, enable: true, colorId: 3},
    {name: image_2_white, enable: false, colorId: 3},
    {name: image_3_white, enable: false, colorId: 3},
    {name: image_4_white, enable: false, colorId: 3},
    {name: image_5_white, enable: false, colorId: 3},
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