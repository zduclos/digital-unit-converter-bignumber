import { DataUnit } from '../index';
import { BigNumber } from 'bignumber.js';

test('Convert megabytes (MB) to bits (b)', () => {
    expect(DataUnit.MEGABYTE.toBits(BigNumber(1))).toEqual(BigNumber(8000000));
});

test('Convert megabytes (MB) to bytes (B)', () => {
    expect(DataUnit.MEGABYTE.toBytes(BigNumber(1))).toEqual(BigNumber(1000000));
});

test('Convert megabytes (MB) to kilobytes (kB)', () => {
    expect(DataUnit.MEGABYTE.toKilobytes(BigNumber(1))).toEqual(BigNumber(1000));
});

test('Convert megabytes (MB) to kibibytes (KiB)', () => {
    expect(DataUnit.MEGABYTE.toKibibytes(BigNumber(1))).toEqual(BigNumber(976.563));
});

test('Convert megabytes (MB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.toMegabytes(BigNumber(1))).toEqual(BigNumber(1));
});

test('Convert megabytes (MB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEGABYTE.toMebibytes(BigNumber(1))).toEqual(BigNumber(0.953674));
});

test('Convert megabyte (MB) to gigabytes (GB)', () => {
    expect(DataUnit.MEGABYTE.toGigabytes(BigNumber(1))).toEqual(BigNumber(0.001));
});

test('Convert megabyte (MB) to gibibytes (GiB)', () => {
    expect(DataUnit.MEGABYTE.toGibibytes(BigNumber(1))).toEqual(BigNumber(0.000931323));
});

test('Convert bits (b) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(BigNumber(1), DataUnit.BIT)).toEqual(BigNumber(0.000000125));
});

test('Convert bytes (B) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(BigNumber(1), DataUnit.BYTE)).toEqual(BigNumber(0.000001));
});

test('Convert kilobytes (kB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(BigNumber(1), DataUnit.KILOBYTE)).toEqual(BigNumber(0.001));
});

test('Convert kibibytes (KiB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(BigNumber(1), DataUnit.KIBIBYTE)).toEqual(BigNumber(0.001024));
});

test('Convert megabytes (MB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(BigNumber(1), DataUnit.MEGABYTE)).toEqual(BigNumber(1));
});

test('Convert mebibytes (MiB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(BigNumber(1), DataUnit.MEBIBYTE)).toEqual(BigNumber(1.04858));
});

test('Convert gigabytes (GB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(BigNumber(1), DataUnit.GIGABYTE)).toEqual(BigNumber(1000));
});

test('Convert gibibytes (GiB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(BigNumber(1), DataUnit.GIBIBYTE)).toEqual(BigNumber(1073.741824));
});
