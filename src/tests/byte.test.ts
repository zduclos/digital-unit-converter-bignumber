import { DataUnit } from '../index';
import { BigNumber } from 'bignumber.js';

test('Convert bytes (B) to bits (b)', () => {
    expect(DataUnit.BYTE.toBits(BigNumber(1))).toEqual(BigNumber(8));
});

test('Convert bytes (B) to bytes (B)', () => {
    expect(DataUnit.BYTE.toBytes(BigNumber(1))).toEqual(BigNumber(1));
});

test('Convert bytes (B) to kilobytes (kB)', () => {
    expect(DataUnit.BYTE.toKilobytes(BigNumber(1))).toEqual(BigNumber(0.001));
});

test('Convert bytes (B) to kibibytes (KiB)', () => {
    expect(DataUnit.BYTE.toKibibytes(BigNumber(1))).toEqual(BigNumber(0.0009765625));
});

test('Convert bytes (B) to megabytes (MB)', () => {
    expect(DataUnit.BYTE.toMegabytes(BigNumber(1))).toEqual(BigNumber(0.000001));
});

test('Convert bytes (B) to mebibytes (MiB)', () => {
    expect(DataUnit.BYTE.toMebibytes(BigNumber(1))).toEqual(BigNumber(0.00000095367431640625));
});

test('Convert bytes (B) to gigabytes (GB)', () => {
    expect(DataUnit.BYTE.toGigabytes(BigNumber(1))).toEqual(BigNumber(1e-9));
});

test('Convert bytes (B) to gibibytes (GiB)', () => {
    expect(DataUnit.BYTE.toGibibytes(BigNumber(1))).toEqual(BigNumber(9.3132257462e-10));
});

test('Convert bits (b) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(BigNumber(1), DataUnit.BIT)).toEqual(BigNumber(0.125));
});

test('Convert bytes (B) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(BigNumber(1), DataUnit.BYTE)).toEqual(BigNumber(1));
});

test('Convert kilobytes (kB) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(BigNumber(1), DataUnit.KILOBYTE)).toEqual(BigNumber(1000));
});

test('Convert kibibytes (KiB) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(BigNumber(1), DataUnit.KIBIBYTE)).toEqual(BigNumber(1024));
});

test('Convert megabytes (MB) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(BigNumber(1), DataUnit.MEGABYTE)).toEqual(BigNumber(1000000));
});

test('Convert mebibytes (MiB) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(BigNumber(1), DataUnit.MEBIBYTE)).toEqual(BigNumber(1049000));
});

test('Convert gigabytes (GB) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(BigNumber(1), DataUnit.GIGABYTE)).toEqual(BigNumber(1000000000));
});

test('Convert gibibytes (GiB) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(BigNumber(1), DataUnit.GIBIBYTE)).toEqual(BigNumber(1073741824));
});
