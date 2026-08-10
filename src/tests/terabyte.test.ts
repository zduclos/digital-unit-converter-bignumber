import { DataUnit } from '../index';
import { BigNumber } from 'bignumber.js';

test('Convert terabytes (TB) to bits (b)', () => {
    expect(DataUnit.TERABYTE.toBits(BigNumber(1))).toEqual(BigNumber(8_000_000_000_000));
});

test('Convert terabytes (TB) to bytes (B)', () => {
    expect(DataUnit.TERABYTE.toBytes(BigNumber(1))).toEqual(BigNumber(1_000_000_000_000));
});

test('Convert terabytes (TB) to kilobytes (kB)', () => {
    expect(DataUnit.TERABYTE.toKilobytes(BigNumber(1))).toEqual(BigNumber(1_000_000_000));
});

test('Convert terabytes (TB) to kibibytes (KiB)', () => {
    expect(DataUnit.TERABYTE.toKibibytes(BigNumber(1))).toEqual(BigNumber(976_562_500));
});

test('Convert terabytes (TB) to megabytes (MB)', () => {
    expect(DataUnit.TERABYTE.toMegabytes(BigNumber(1))).toEqual(BigNumber(1_000_000));
});

test('Convert terabytes (TB) to mebibytes (MiB)', () => {
    expect(DataUnit.TERABYTE.toMebibytes(BigNumber(1))).toEqual(BigNumber(953_674.31640625));
});

test('Convert terabytes (TB) to gigabytes (GB)', () => {
    expect(DataUnit.TERABYTE.toGigabytes(BigNumber(1))).toEqual(BigNumber(1_000));
});

test('Convert terabytes (TB) to gibibytes (GiB)', () => {
    expect(DataUnit.TERABYTE.toGibibytes(BigNumber(1))).toEqual(BigNumber('931.322574615478515625'));
});

test('Convert terabytes (TB) to tebibytes (TiB)', () => {
    expect(DataUnit.TERABYTE.toTebibytes(BigNumber(1))).toEqual(BigNumber('0.9094947017729282379150390625'));
});

test('Convert terabytes (TB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.toTerabytes(BigNumber(1))).toEqual(BigNumber(1));
});

test('Convert bits (b) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(BigNumber(1), DataUnit.BIT)).toEqual(BigNumber(1.25e-13));
});

test('Convert bytes (B) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(BigNumber(1), DataUnit.BYTE)).toEqual(BigNumber(0.000000000001));
});

test('Convert kilobytes (kB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(BigNumber(1), DataUnit.KILOBYTE)).toEqual(BigNumber(0.000000001));
});

test('Convert kibibytes (KiB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(BigNumber(1), DataUnit.KIBIBYTE)).toEqual(BigNumber(0.000000001024));
});

test('Convert megabytes (MB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(BigNumber(1), DataUnit.MEGABYTE)).toEqual(BigNumber(0.000001));
});

test('Convert mebibytes (MiB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(BigNumber(1), DataUnit.MEBIBYTE)).toEqual(BigNumber(0.000001048576));
});

test('Convert gigabytes (GB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(BigNumber(1), DataUnit.GIGABYTE)).toEqual(BigNumber(0.001));
});

test('Convert gibibytes (GiB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(BigNumber(1), DataUnit.GIBIBYTE)).toEqual(BigNumber(0.001073741824));
});

test('Convert tebibytes (TiB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(BigNumber(1), DataUnit.TEBIBYTE)).toEqual(BigNumber(1.099511627776));
});

test('Convert terabytes (TB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(BigNumber(1), DataUnit.TERABYTE)).toEqual(BigNumber(1));
});
