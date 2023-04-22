import { DataUnit } from '../index';
import { BigNumber } from 'bignumber.js';

test('Convert gigabytes (GB) to bits (b)', () => {
    expect(DataUnit.GIGABYTE.toBits(BigNumber(1))).toEqual(BigNumber(8000000000));
});

test('Convert gigabytes (GB) to bytes (B)', () => {
    expect(DataUnit.GIGABYTE.toBytes(BigNumber(1))).toEqual(BigNumber(1000000000));
});

test('Convert gigabytes (GB) to kilobytes (kB)', () => {
    expect(DataUnit.GIGABYTE.toKilobytes(BigNumber(1))).toEqual(BigNumber(1000000));
});

test('Convert gigabytes (GB) to kibibytes (KiB)', () => {
    expect(DataUnit.GIGABYTE.toKibibytes(BigNumber(1))).toEqual(BigNumber(9765632.5));
});

test('Convert gigabytes (GB) to megabytes (MB)', () => {
    expect(DataUnit.GIGABYTE.toMegabytes(BigNumber(1))).toEqual(BigNumber(1000));
});

test('Convert gigabytes (GB) to mebibytes (MiB)', () => {
    expect(DataUnit.GIGABYTE.toMebibytes(BigNumber(1))).toEqual(BigNumber(953.674));
});

test('Convert gigabytes (GB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.toGigabytes(BigNumber(1))).toEqual(BigNumber(1));
});

test('Convert gigabytes (GB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIGABYTE.toGibibytes(BigNumber(1))).toEqual(BigNumber('0.93132257461547851563'));
});

test('Convert bits (b) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(BigNumber(1), DataUnit.BIT)).toEqual(BigNumber(0.000000000125));
});

test('Convert bytes (B) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(BigNumber(1), DataUnit.BYTE)).toEqual(BigNumber(0.000000001));
});

test('Convert kilobytes (kB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(BigNumber(1), DataUnit.KILOBYTE)).toEqual(BigNumber(0.000001));
});

test('Convert kibibytes (KiB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(BigNumber(1), DataUnit.KIBIBYTE)).toEqual(BigNumber(0.000001024));
});

test('Convert megabytes (MB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(BigNumber(1), DataUnit.MEGABYTE)).toEqual(BigNumber(0.001));
});

test('Convert mebibytes (MiB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(BigNumber(1), DataUnit.MEBIBYTE)).toEqual(BigNumber(0.00104858));
});

test('Convert gigabytes (GB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(BigNumber(1), DataUnit.GIGABYTE)).toEqual(BigNumber(1));
});

test('Convert gibibytes (GiB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(BigNumber(1), DataUnit.GIBIBYTE)).toEqual(BigNumber(1.073741824));
});
