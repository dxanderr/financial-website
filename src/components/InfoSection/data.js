import ImgSavings from "../../images/svg-3.svg";
import ImgDiscover from "../../images/svg-5.svg";
import ImgSignUp from "../../images/svg-7.svg";

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transactions with zero fees',
    description: 'Get a access to our exclusive app that allows you to send unlimited tranactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: ImgSavings,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headLine: 'Login to your account at any time',
    description: 'Access your data from anywhere around the globe. Download and store data for offline browsing.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: ImgDiscover,
    alt: 'Piggy',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join Our Team',
    headLine: 'Get started today by creating your free account',
    description: 'Set up in less than 10 minutes. Our team is available 24/7 for live support.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: ImgSignUp,
    alt: 'Lucky',
    dark: false,
    primary: false,
    darkText: true
}