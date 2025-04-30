import { flagCodes, originalHeightSizes, originalWidthSizes, wavingSizes } from './';

export type WavingSize = (typeof wavingSizes)[number];
export type OriginalWidthSize = (typeof originalWidthSizes)[number];
export type OriginalHeightSize = (typeof originalHeightSizes)[number];

export type FlagCode = keyof typeof flagCodes;
export type FlagCountry = (typeof flagCodes)[keyof typeof flagCodes];
