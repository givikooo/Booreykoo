const media = {
    mobile: "@media (min-width: 320px) and (max-width: 480px)",  //includes Mobile devices
    tablet: "@media (min-width: 481px) and (max-width: 768px)",  //iPads, Tablets
    laptop: "@media (min-width: 769px) and (max-width: 1024px)",  //Small screens, laptops
    desktop: "@media (min-width: 1025px) and (max-width: 1200px)",  //Desktops, large screens
    fullHD: "@media (min-width: 1201px)",  //Extra large screens, TV
    sideBar: {
        mobile: "@media (max-width: 1199px)",
    }
};

export default media;