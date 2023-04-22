import { DataUnit } from '../index';
import { BigNumber } from 'bignumber.js';

test('Convert bits (b) to bits (b)', () => {
    expect(DataUnit.BIT.toBits(BigNumber(1))).toEqual(BigNumber(1));
});

test('Convert bits (b) to bytes (B)', () => {
    expect(DataUnit.BIT.toBytes(BigNumber(1))).toEqual(BigNumber(0.125));
});

test('Convert bits (b) to kilobytes (kB)', () => {
    expect(DataUnit.BIT.toKilobytes(BigNumber(1))).toEqual(BigNumber(0.000125));
});

test('Convert bits (b) to kibibytes (KiB)', () => {
    expect(DataUnit.BIT.toKibibytes(BigNumber(1))).toEqual(BigNumber(0.0001220703125));
});

test('Convert bits (b) to megabytes (MB)', () => {
    expect(DataUnit.BIT.toMegabytes(BigNumber(1))).toEqual(BigNumber(1.25e-7));
});

test('Convert bits (b) to mebibytes (MiB)', () => {
    expect(DataUnit.BIT.toMebibytes(BigNumber(1))).toEqual(BigNumber(1.1920928955078e-7));
});

test('Convert bits (b) to gigabytes (GB)', () => {
    expect(DataUnit.BIT.toGigabytes(BigNumber(1))).toEqual(BigNumber(1.25e-10));
});

test('Convert bits (b) to gibibytes (GiB)', () => {
    expect(DataUnit.BIT.toGibibytes(BigNumber(1))).toEqual(BigNumber(1.1641532183e-10));
});

test('Convert bits (b) to bits (b)', () => {
    expect(DataUnit.BIT.convert(BigNumber(1), DataUnit.BIT)).toEqual(BigNumber(1));
});

test('Convert bytes (B) to bits (b)', () => {
    expect(DataUnit.BIT.convert(BigNumber(1), DataUnit.BYTE)).toEqual(BigNumber(8));
});

test('Convert kilobytes (kB) to bits (b)', () => {
    expect(DataUnit.BIT.convert(BigNumber(1), DataUnit.KILOBYTE)).toEqual(BigNumber(8000));
});

test('Convert kibibytes (KiB) to bits (b)', () => {
    expect(DataUnit.BIT.convert(BigNumber(1), DataUnit.KIBIBYTE)).toEqual(BigNumber(8192));
});

test('Convert megabytes (MB) to bits (b)', () => {
    expect(DataUnit.BIT.convert(BigNumber(1), DataUnit.MEGABYTE)).toEqual(BigNumber(8000000));
});

test('Convert mebibytes (MiB) to bits (b)', () => {
    expect(DataUnit.BIT.convert(BigNumber(1), DataUnit.MEBIBYTE)).toEqual(BigNumber(8389000));
});

test('Convert gigabytes (GB) to bits (b)', () => {
    expect(DataUnit.BIT.convert(BigNumber(1), DataUnit.GIGABYTE)).toEqual(BigNumber(8000000000));
});

test('Convert gibibytes (GiB) to bits (b)', () => {
    expect(DataUnit.BIT.convert(BigNumber(1), DataUnit.GIBIBYTE)).toEqual(BigNumber(8589934592));
});
