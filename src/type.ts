import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';

export type Menu = {
    data: {
        items: Items[];
        social: Social[];
        text: string;
    }
}
export type Items = {
    href: string;
    label: string;
}
export type Social = {
    href: string;
    icon: string;
    label: string;
}

export type Services = {
    data: {
        title: string;
        description: string;
        sidebar_text: string;
        items: ServicesItem[];
    }
}

export type ServicesItem = {
    title: string;
    description: string;
}

export type Portfolio = {
    data: {
        items: PortfolioItem[];
    }
}
export type PortfolioItem = {
    title: string;
    description: string;
    thumb: string;
    slug: string
}

export type PortfolioDetail = {
    data: {
        title: string;
        description: string;
        thumb: string;
        slug: string;
    }
}