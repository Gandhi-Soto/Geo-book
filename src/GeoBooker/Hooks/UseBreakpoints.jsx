import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useBreakpoints = () => {
    const theme = useTheme();

    return {
        isDefaultMobile: useMediaQuery(theme.breakpoints.up('defaultMobileSize')),
        isSmallMobile: useMediaQuery(theme.breakpoints.up('smallMobileSize')),
        isMediumMobile: useMediaQuery(theme.breakpoints.up('mediumMobileSize')),
        isDefaultWeb: useMediaQuery(theme.breakpoints.up('defaultWebSize')),
        isSmallWeb: useMediaQuery(theme.breakpoints.up('smallWebSize')),
        isMediumWeb: useMediaQuery(theme.breakpoints.up('mediumWebSize')),
        isLargeWeb: useMediaQuery(theme.breakpoints.up('largeWebSize')),
        isWideWeb: useMediaQuery(theme.breakpoints.up('wideWebSize')),
    };
};

export default useBreakpoints;
