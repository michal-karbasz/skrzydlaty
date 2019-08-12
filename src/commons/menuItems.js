import { About } from '../modules/about/About';
import { KindergardenMain } from '../modules/kindergarden/KindergardenMain';
import { GalleryWrapper } from '../modules/gallery/GalleryWrapper';
import { FormContainer } from '../modules/subscribe/FormWrapper';
import { WorkshopsWrapper } from '../modules/workshops/WorkshopsWrapper';
import { BirthdayWrapper } from '../modules/birthday/BirthdayWrapper';

import about from '../assets/icons/about_icon.jpeg';
import subscribe from '../assets/icons/subscribe_icon.jpeg';
import gallery from '../assets/icons/gallery_icon.jpeg';
import balloons from '../assets/icons/birthday_icon.jpeg';
import home from '../assets/icons/home_icon.jpeg';
import workshops from '../assets/icons/workshops_icon.jpeg';

export const menuItems = {
    about: { name: 'o nas', icon: about, component: About },
    home: { name: 'domowe przedszkole', icon: home, component: KindergardenMain },
    workshops: { name: 'warsztaty', icon: workshops, component: WorkshopsWrapper },
    party: { name: 'urodzinki', icon: balloons, component: BirthdayWrapper },
    subscribe: { name: 'zapisz dziecko', icon: subscribe, component: FormContainer },
    gallery: { name: 'galeria', icon: gallery, component: GalleryWrapper },
};
