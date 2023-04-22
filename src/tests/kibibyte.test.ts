import { DataUnit } from '../index';
import { BigNumber } from 'bignumber.js';

test('Convert kibibyte (KiB) to bits (b)', () => {
    expect(DataUnit.KIBIBYTE.toBits(BigNumber(1))).toEqual(BigNumber(8192));
});

test('Convert kibibyte (KiB) to bytes (B)', () => {
    expect(DataUnit.KIBIBYTE.toBytes(BigNumber(1))).toEqual(BigNumber(1024));
});

test('Convert kibibyte (KiB) to kilobytes (kB)', () => {
    expect(DataUnit.KIBIBYTE.toKilobytes(BigNumber(1))).toEqual(BigNumber(1.024));
});

test('Convert kibibyte (KiB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.toKibibytes(BigNumber(1))).toEqual(BigNumber(1));
});

test('Convert kibibyte (KiB) to megabytes (MB)', () => {
    expect(DataUnit.KIBIBYTE.toMegabytes(BigNumber(1))).toEqual(BigNumber(0.001024));
});

test('Convert kibibyte (KiB) to mebibytes (MiB)', () => {
    expect(DataUnit.KIBIBYTE.toMebibytes(BigNumber(1))).toEqual(BigNumber(0.0009765625));
});

test('Convert kibibyte (KiB) to gigabytes (GB)', () => {
    expect(DataUnit.KIBIBYTE.toGigabytes(BigNumber(1))).toEqual(BigNumber(1.024e-6));
});

test('Convert kibibyte (KiB) to gibibytes (GiB)', () => {
    expect(DataUnit.KIBIBYTE.toGibibytes(BigNumber(1))).toEqual(BigNumber(9.5367431640625e-7));
});

test('Convert bits (b) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(BigNumber(1), DataUnit.BIT)).toEqual(BigNumber(0.0001220703125));
});

test('Convert bytes (B) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(BigNumber(1), DataUnit.BYTE)).toEqual(BigNumber(0.0009765625));
});

test('Convert kilobytes (kB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(BigNumber(1), DataUnit.KILOBYTE)).toEqual(BigNumber(0.9765625));
});

test('Convert kibibyte (KiB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(BigNumber(1), DataUnit.KIBIBYTE)).toEqual(BigNumber(1));
});

test('Convert megabytes (MB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(BigNumber(1), DataUnit.MEGABYTE)).toEqual(BigNumber(976.563));
});

test('Convert mebibytes (MiB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(BigNumber(1), DataUnit.MEBIBYTE)).toEqual(BigNumber(1024));
});

test('Convert gigabytes (GB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(BigNumber(1), DataUnit.GIGABYTE)).toEqual(BigNumber(9765632.5));
});

test('Convert gibibytes (GiB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(BigNumber(1), DataUnit.GIBIBYTE)).toEqual(BigNumber(1048576.534774));
});
