export const COLORS = {
    primary: '#b9d962', 
    secondary: '#87a675', 
    background: '#1A1A19', 
    card: '#232322',
    text: '#fcfff5', 
    accent: '#d8a931', 
    black: '#000000', 
};

export const SPACING = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
};

export const FONT_SIZES = {
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24,
};

export const FONT_WEIGHTS = {
    regular: '400',
    bold: '700',
};

export const BORDER_RADIUS = {
    small: 4,
    medium: 8,
    large: 16,
};

export const SHADOWS = {
    light: {
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // Android shadow
    },
    medium: {
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4, // Android shadow
    },
};

export const theme = {
    colors: COLORS,
    spacing: SPACING,
    fontSizes: FONT_SIZES,
    fontWeights: FONT_WEIGHTS,
    borderRadius: BORDER_RADIUS,
    shadows: SHADOWS,
};