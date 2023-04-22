import { DataUnit } from '../index';
import { BigNumber } from 'bignumber.js';

test('Convert mebibytes (MiB) to bits (b)', () => {
    expect(DataUnit.MEBIBYTE.toBits(BigNumber(1))).toEqual(BigNumber(8389000));
});

test('Convert mebibytes (MiB) to bytes (B)', () => {
    expect(DataUnit.MEBIBYTE.toBytes(BigNumber(1))).toEqual(BigNumber(1049000));
});

test('Convert mebibytes (MiB) to kilobytes (kB)', () => {
    expect(DataUnit.MEBIBYTE.toKilobytes(BigNumber(1))).toEqual(BigNumber(1048.58));
});

test('Convert mebibytes (MiB) to kibibytes (KiB)', () => {
    expect(DataUnit.MEBIBYTE.toKibibytes(BigNumber(1))).toEqual(BigNumber(1024));
});

test('Convert mebibytes (MiB) to megabytes (MB)', () => {
    expect(DataUnit.MEBIBYTE.toMegabytes(BigNumber(1))).toEqual(BigNumber(1.04858));
});

test('Convert mebibytes (MiB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.toMebibytes(BigNumber(1))).toEqual(BigNumber(1));
});

test('Convert mebibytes (MiB) to gigabytes (GB)', () => {
    expect(DataUnit.MEBIBYTE.toGigabytes(BigNumber(1))).toEqual(BigNumber(0.00104858));
});

test('Convert mebibytes (MiB) to gibibytes (GiB)', () => {
    expect(DataUnit.MEBIBYTE.toGibibytes(BigNumber(1))).toEqual(BigNumber(0.0009765625));
});

test('Convert bits (b) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(BigNumber(1), DataUnit.BIT)).toEqual(BigNumber(0.00000011920928955078));
});

test('Convert bytes (B) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(BigNumber(1), DataUnit.BYTE)).toEqual(BigNumber(0.00000095367431640625));
});

test('Convert kilobytes (kB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(BigNumber(1), DataUnit.KILOBYTE)).toEqual(BigNumber(0.000953674));
});

test('Convert kibibyte (KiB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(BigNumber(1), DataUnit.KIBIBYTE)).toEqual(BigNumber(0.0009765625));
});

test('Convert megabytes (MB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(BigNumber(1), DataUnit.MEGABYTE)).toEqual(BigNumber(0.953674));
});

test('Convert mebibytes (MiB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(BigNumber(1), DataUnit.MEBIBYTE)).toEqual(BigNumber(1));
});

test('Convert gigabytes (GB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(BigNumber(1), DataUnit.GIGABYTE)).toEqual(BigNumber(953.674));
});

test('Convert gibibytes (GiB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(BigNumber(1), DataUnit.GIBIBYTE)).toEqual(BigNumber(1024));
});
