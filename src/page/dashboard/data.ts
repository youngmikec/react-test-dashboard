import { DisplayCardType } from '../../components/display-card/type';
import primaryImage from '../../images/iconpackage.png';
import successImage from '../../images/Buycart.png';
import secondaryImage from '../../images/Buycart2.png';

export const displayCardsData: DisplayCardType[] = [
    {
        title: "Total Product",
        type: 'primary',
        img: primaryImage,
        data: 300,
        itemsAdded: 2,
        itemsLabel: 'New Added'
    },
    {
        title: "Total Sales",
        type: 'success',
        img: successImage,
        data: 230,
        itemsAdded: 4,
        itemsLabel: 'Sales Today'
    },
    {
        title: "Total Orders",
        type: 'secondary',
        img: secondaryImage,
        data: 235,
        itemsAdded: 4,
        itemsLabel: 'Sales Today'
    },
]