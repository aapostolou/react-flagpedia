import { ImgHTMLAttributes } from 'react';

import { flagCodes } from './constants';
import { FlagCode, OriginalHeightSize, OriginalWidthSize, WavingSize } from './constants/types';

type WavingFlagProps = {
    variant?: "waving";
    size?: WavingSize;
    type?: "png" | "webp";
};
type OriginalWidthFlagProps = {
    variant?: "original-width";
    size?: OriginalWidthSize;
    type?: "png" | "webp" | "jpg";
};
type OriginalHeightFlagProps = {
    variant?: "original-height";
    size?: OriginalHeightSize;
    type?: "png" | "webp" | "jpg";
};
type SvgFlagProps = {
    variant?: "svg";
};

export type FlagProps = {
    code: FlagCode;
} & (WavingFlagProps | OriginalWidthFlagProps | OriginalHeightFlagProps) &
    ImgHTMLAttributes<HTMLImageElement>;

const WavingFlag: React.FC<Omit<FlagProps, "variant" | "size"> & Pick<WavingFlagProps, "size">> = ({
    code,
    size = "48x36",
    ...imgProps
}) => {
    const [width, height] = size.split("x").map((n) => Number(n));

    return (
        <img
            width={width}
            height={height}
            {...imgProps}
            src={`https://flagcdn.com/${size}/${code}.png`}
            srcSet={`https://flagcdn.com/${width * 2}x${height * 2}/${code}.png 2x, https://flagcdn.com/${width * 3}x${
                height * 3
            }/${code}.png 3x`}
        />
    );
};

const OriginalWidthFlag: React.FC<Omit<FlagProps, "variant" | "size"> & Pick<OriginalWidthFlagProps, "size">> = ({
    code,
    size = "w40",
    type = "png",
    ...imgProps
}) => {
    const width = Number(size.slice(1));

    return (
        <img
            width={width}
            {...imgProps}
            src={`https://flagcdn.com/${size}/${code}.${type}`}
            srcSet={`https://flagcdn.com/w${width * 2}/${code}.${type} 2x`}
        />
    );
};

const OriginalHeightFlag: React.FC<Omit<FlagProps, "variant" | "size"> & Pick<OriginalHeightFlagProps, "size">> = ({
    code,
    size = "h40",
    type = "png",
    ...imgProps
}) => {
    const height = Number(size.slice(1));

    return (
        <img
            height={height}
            {...imgProps}
            src={`https://flagcdn.com/${size}/${code}.${type}`}
            srcSet={`https://flagcdn.com/h${
                height * 2
            }/${code}.${type} 2x, https://flagcdn.com/h${height * 3}/${code}.${type} 3x`}
        />
    );
};

const SvgFlag: React.FC<Omit<FlagProps, "variant" | "size"> & SvgFlagProps> = ({ code, ...imgProps }) => {
    return <img {...imgProps} src={`https://flagcdn.com/${code}.svg`} />;
};

const Flag: React.FC<FlagProps> = ({ code, variant = "waving", size, ...imgProps }) => {
    const country = flagCodes[code];

    const props = { code, alt: country, ...imgProps };

    return (
        <>
            {variant === "waving" && <WavingFlag {...props} size={size as WavingFlagProps["size"]} />}
            {variant === "original-width" && (
                <OriginalWidthFlag {...props} size={size as OriginalWidthFlagProps["size"]} />
            )}
            {variant === "original-height" && (
                <OriginalHeightFlag {...props} size={size as OriginalHeightFlagProps["size"]} />
            )}
            {variant === "svg" && <SvgFlag {...props} />}
        </>
    );
};

export default Flag;
