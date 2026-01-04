import foodSvg from "../assets/food.svg"
import othersSvg from "../assets/others.svg"
import servicesSvg from "../assets/services.svg"
import transportSvg from "../assets/transport.svg"
import accomodationSvg from "../assets/accomodation.svg"

export const CATEGORIES = {

    food:{
        name: "Alimentação",
        icon: foodSvg,
    },
    others:{
        name: "Outros",
        icon: othersSvg,
    },
    services:{
        name: "Serviços",
        icon: servicesSvg,
    },
    transport:{
        name: "Tansporte",
        icon: transportSvg,
    },
    accomodation:{
        name: "Hospedagem",
        icon: accomodationSvg,
    },


}

export const CATEGORIES_LIST = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>