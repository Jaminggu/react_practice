const deviceSizes = {
    mobile: "375px",
    desktop: "1440px"
};

const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    desktop: `screen and (max-width: ${deviceSizes.desktop})`
};

export default device;