import { DataUnit } from '../index';
import { BigNumber } from 'bignumber.js';

test('Convert gibibytes (GiB) to bits (b)', () => {
    expect(DataUnit.GIBIBYTE.toBits(BigNumber(1))).toEqual(BigNumber(8589934592));
});

test('Convert gibibytes (GiB) to bytes (B)', () => {
    expect(DataUnit.GIBIBYTE.toBytes(BigNumber(1))).toEqual(BigNumber(1073741824));
});

test('Convert gibibytes (GiB) to kilobytes (kB)', () => {
    expect(DataUnit.GIBIBYTE.toKilobytes(BigNumber(1))).toEqual(BigNumber(1073741.824));
});

test('Convert gibibytes (GiB) to kibibytes (KiB)', () => {
    expect(DataUnit.GIBIBYTE.toKibibytes(BigNumber(1))).toEqual(BigNumber(1048576.534774));
});

test('Convert gibibytes (GiB) to megabytes (MB)', () => {
    expect(DataUnit.GIBIBYTE.toMegabytes(BigNumber(1))).toEqual(BigNumber(1073.741824));
});

test('Convert gibibytes (GiB) to mebibytes (MiB)', () => {
    expect(DataUnit.GIBIBYTE.toMebibytes(BigNumber(1))).toEqual(BigNumber(1024));
});

test('Convert gibibytes (GiB) to gigabytes (GB)', () => {
    expect(DataUnit.GIBIBYTE.toGigabytes(BigNumber(1))).toEqual(BigNumber(1.073741824));
});

test('Convert gibibytes (GiB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.toGibibytes(BigNumber(1))).toEqual(BigNumber(1));
});

test('Convert bits (b) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(BigNumber(1), DataUnit.BIT)).toEqual(BigNumber(1.1641532183e-10));
});

test('Convert bytes (B) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(BigNumber(1), DataUnit.BYTE)).toEqual(BigNumber(9.3132257462e-10));
});

test('Convert kilobytes (kB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(BigNumber(1), DataUnit.KILOBYTE)).toEqual(BigNumber(9.3132257461548e-7));
});

test('Convert kibibytes (KiB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(BigNumber(1), DataUnit.KIBIBYTE)).toEqual(BigNumber(0.00000095367431640625));
});

test('Convert megabytes (MB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(BigNumber(1), DataUnit.MEGABYTE)).toEqual(BigNumber(0.000931323));
});

test('Convert mebibytes (MiB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(BigNumber(1), DataUnit.MEBIBYTE)).toEqual(BigNumber(0.0009765625));
});

test('Convert gigabytes (GB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(BigNumber(1), DataUnit.GIGABYTE)).toEqual(BigNumber('0.93132257461547851563'));
});

test('Convert gibibytes (GiB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(BigNumber(1), DataUnit.GIBIBYTE)).toEqual(BigNumber(1));
});
