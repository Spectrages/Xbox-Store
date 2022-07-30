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

export const colorRow = [
    {name: 'red', hex: '#EB1C1E'},
    {name: 'black', hex: '#000000'},
    {name: 'white', hex: '#FFFFFF'},
    {name: 'blue', hex: '#1F5BCC'},
    {name: 'volt', hex: '#DCF260'},
]

 export const cards = [
    {id: 1, color: 'white', name: image_1_white, enable: true, price: 59.99, description: 'Wireless Controller White'},
    {id: 2, color: 'white', name: image_2_white, enable: false, price: 59.99, description: 'Wireless Controller White'},
    {id: 3, color: 'white', name: image_3_white, enable: false, price: 59.99, description: 'Wireless Controller White'},
    {id: 4, color: 'white', name: image_4_white, enable: false, price: 59.99, description: 'Wireless Controller White'},
    {id: 5, color: 'white', name: image_5_white, enable: false, price: 59.99, description: 'Wireless Controller White'},
    {id: 6, color: 'black', name: image_1_black, enable: true, price: 59.99, description: 'Wireless Controller Black'},
    {id: 7, color: 'black', name: image_2_black, enable: false, price: 59.99, description: 'Wireless Controller Black'},
    {id: 8, color: 'black', name: image_3_black, enable: false, price: 59.99, description: 'Wireless Controller Black'},
    {id: 9, color: 'black', name: image_4_black, enable: false, price: 59.99, description: 'Wireless Controller Black'},
    {id: 10, color: 'black', name: image_5_black, enable: false, price: 59.99, description: 'Wireless Controller Black'},
    {id: 11, color: 'blue', name: image_1_blue, enable: true, price: 59.99, description: 'Wireless Controller Blue'},
    {id: 12, color: 'blue', name: image_2_blue, enable: false, price: 59.99, description: 'Wireless Controller Blue'},
    {id: 13, color: 'blue', name: image_3_blue, enable: false, price: 59.99, description: 'Wireless Controller Blue'},
    {id: 14, color: 'blue', name: image_4_blue, enable: false, price: 59.99, description: 'Wireless Controller Blue'},
    {id: 15, color: 'blue', name: image_5_blue, enable: false, price: 59.99, description: 'Wireless Controller Blue'},
    {id: 16, color: 'red', name: image_1_red, enable: true, price: 59.99, description: 'Wireless Controller Red'},
    {id: 17, color: 'red', name: image_2_red, enable: false, price: 59.99, description: 'Wireless Controller Red'},
    {id: 18, color: 'red', name: image_3_red, enable: false, price: 59.99, description: 'Wireless Controller Red'},
    {id: 19, color: 'red', name: image_4_red, enable: false, price: 59.99, description: 'Wireless Controller Red'},
    {id: 20, color: 'red', name: image_5_red, enable: false, price: 59.99, description: 'Wireless Controller Red'},
    {id: 21, color: 'volt', name: image_1_volt, enable: true, price: 59.99, description: 'Wireless Controller Volt'},
    {id: 22, color: 'volt', name: image_2_volt, enable: false, price: 59.99, description: 'Wireless Controller Volt'},
    {id: 23, color: 'volt', name: image_3_volt, enable: false, price: 59.99, description: 'Wireless Controller Volt'},
    {id: 24, color: 'volt', name: image_4_volt, enable: false, price: 59.99, description: 'Wireless Controller Volt'},
    {id: 25, color: 'volt', name: image_5_volt, enable: false, price: 59.99, description: 'Wireless Controller Volt'},
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

export const descriptionText = [
    {name: 'Connectivity', text: 'Connect to Xbox consoles with Xbox Wireless. ' +
            'Wirelessly connect to Windows 10/11 PCs, tablets, iOS and Android using Bluetooth'},
    {name: 'Compatible With', text: 'Some text 2'},
    {name: 'Battery', text: 'Some text 3'},
]

