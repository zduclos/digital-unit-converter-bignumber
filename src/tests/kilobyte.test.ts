import { DataUnit } from '../index';
import { BigNumber } from 'bignumber.js';

test('Convert kilobytes (kB) to bits (b)', () => {
    expect(DataUnit.KILOBYTE.toBits(BigNumber(1))).toEqual(BigNumber(8000));
});

test('Convert kilobytes (kB) to bytes (B)', () => {
    expect(DataUnit.KILOBYTE.toBytes(BigNumber(1))).toEqual(BigNumber(1000));
});

test('Convert kilobytes (kB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.toKilobytes(BigNumber(1))).toEqual(BigNumber(1));
});

test('Convert kilobytes (kB) to kibibytes (KiB)', () => {
    expect(DataUnit.KILOBYTE.toKibibytes(BigNumber(1))).toEqual(BigNumber(0.9765625));
});

test('Convert kilobytes (kB) to megabytes (MB)', () => {
    expect(DataUnit.KILOBYTE.toMegabytes(BigNumber(1))).toEqual(BigNumber(0.001));
});

test('Convert kilobytes (kB) to mebibytes (MiB)', () => {
    expect(DataUnit.KILOBYTE.toMebibytes(BigNumber(1))).toEqual(BigNumber(0.00095367431640625));
});

test('Convert kilobytes (kB) to gigabytes (GB)', () => {
    expect(DataUnit.KILOBYTE.toGigabytes(BigNumber(1))).toEqual(BigNumber(0.000001));
});

test('Convert kilobytes (kB) to gibibytes (GiB)', () => {
    expect(DataUnit.KILOBYTE.toGibibytes(BigNumber(1))).toEqual(BigNumber('9.31322574615478515625e-7'));
});

test('Convert kilobytes (kB) to terabytes (TB)', () => {
    expect(DataUnit.KILOBYTE.toTerabytes(BigNumber(1))).toEqual(BigNumber(1e-9));
});

test('Convert kilobytes (kB) to tebibytes (TiB)', () => {
    expect(DataUnit.KILOBYTE.toTebibytes(BigNumber(1))).toEqual(BigNumber('9.094947017729282379150390625e-10'));
});

test('Convert bits (b) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.BIT)).toEqual(BigNumber(0.000125));
});

test('Convert bytes (B) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.BYTE)).toEqual(BigNumber(0.001));
});

test('Convert kilobytes (kB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.KILOBYTE)).toEqual(BigNumber(1));
});

test('Convert kibibytes (KiB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.KIBIBYTE)).toEqual(BigNumber(1.024));
});

test('Convert megabytes (MB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.MEGABYTE)).toEqual(BigNumber(1000));
});

test('Convert mebibytes (MiB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.MEBIBYTE)).toEqual(BigNumber(1048.576));
});

test('Convert gigabytes (GB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.GIGABYTE)).toEqual(BigNumber(1000000));
});

test('Convert gibibytes (GiB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.GIBIBYTE)).toEqual(BigNumber(1073741.824));
});

test('Convert terabytes (TB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.TERABYTE)).toEqual(BigNumber(1000000000));
});

test('Convert tebibytes (TiB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.TEBIBYTE)).toEqual(BigNumber(1099511627.776));
});
