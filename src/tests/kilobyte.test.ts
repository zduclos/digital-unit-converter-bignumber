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
    expect(DataUnit.KILOBYTE.toMebibytes(BigNumber(1))).toEqual(BigNumber(0.000953674));
});

test('Convert kilobytes (kB) to gigabytes (GB)', () => {
    expect(DataUnit.KILOBYTE.toGigabytes(BigNumber(1))).toEqual(BigNumber(0.000001));
});

test('Convert kilobytes (kB) to gibibytes (GiB)', () => {
    expect(DataUnit.KILOBYTE.toGibibytes(BigNumber(1))).toEqual(BigNumber(9.3132257461548e-7));
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
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.MEBIBYTE)).toEqual(BigNumber(1048.58));
});

test('Convert gigabytes (GB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.GIGABYTE)).toEqual(BigNumber(1000000));
});

test('Convert gibibytes (GiB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(BigNumber(1), DataUnit.GIBIBYTE)).toEqual(BigNumber(1073741.824));
});
