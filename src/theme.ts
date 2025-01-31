const breakpoints = [576, 768, 992, 1200];

export const theme = {
  mq: {
    sm: `@media (min-width: ${breakpoints[0]}px)`,
    md: `@media (min-width: ${breakpoints[1]}px)`,
    lg: `@media (min-width: ${breakpoints[2]}px)`,
    xl: `@media (min-width: ${breakpoints[3]}px)`,
  },
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    xxl: "2rem", // 32px
  },
};
