import { DataUnit } from '../index';
import { BigNumber } from 'bignumber.js';

test('Convert tebibytes (TiB) to bits (b)', () => {
    expect(DataUnit.TEBIBYTE.toBits(BigNumber(1))).toEqual(BigNumber(8_796_093_022_208));
});

test('Convert tebibytes (TiB) to bytes (B)', () => {
    expect(DataUnit.TEBIBYTE.toBytes(BigNumber(1))).toEqual(BigNumber(1_099_511_627_776));
});

test('Convert tebibytes (TiB) to kilobytes (kB)', () => {
    expect(DataUnit.TEBIBYTE.toKilobytes(BigNumber(1))).toEqual(BigNumber(1_099_511_627.776));
});

test('Convert tebibytes (TiB) to kibibytes (KiB)', () => {
    expect(DataUnit.TEBIBYTE.toKibibytes(BigNumber(1))).toEqual(BigNumber(1_073_741_824));
});

test('Convert tebibytes (TiB) to megabytes (MB)', () => {
    expect(DataUnit.TEBIBYTE.toMegabytes(BigNumber(1))).toEqual(BigNumber(1_099_511.627776));
});

test('Convert tebibytes (TiB) to mebibytes (MiB)', () => {
    expect(DataUnit.TEBIBYTE.toMebibytes(BigNumber(1))).toEqual(BigNumber(1_048_576));
});

test('Convert tebibytes (TiB) to gigabytes (GB)', () => {
    expect(DataUnit.TEBIBYTE.toGigabytes(BigNumber(1))).toEqual(BigNumber(1_099.511627776));
});

test('Convert tebibytes (TiB) to gibibytes (GiB)', () => {
    expect(DataUnit.TEBIBYTE.toGibibytes(BigNumber(1))).toEqual(BigNumber(1_024));
});

test('Convert tebibytes (TiB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.toTebibytes(BigNumber(1))).toEqual(BigNumber(1));
});

test('Convert tebibytes (TiB) to terabytes (TB)', () => {
    expect(DataUnit.TEBIBYTE.toTerabytes(BigNumber(1))).toEqual(BigNumber(1.099511627776));
});

test('Convert bits (b) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(BigNumber(1), DataUnit.BIT)).toEqual(
        BigNumber('1.136868377216160297393798828e-13')
    );
});

test('Convert bytes (B) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(BigNumber(1), DataUnit.BYTE)).toEqual(
        BigNumber('9.094947017729282379150390625e-13')
    );
});

test('Convert kilobytes (kB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(BigNumber(1), DataUnit.KILOBYTE)).toEqual(
        BigNumber('9.094947017729282379150390625e-10')
    );
});

test('Convert kibibytes (KiB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(BigNumber(1), DataUnit.KIBIBYTE)).toEqual(BigNumber('9.31322574615478515625e-10'));
});

test('Convert megabytes (MB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(BigNumber(1), DataUnit.MEGABYTE)).toEqual(
        BigNumber('9.094947017729282379150390625e-7')
    );
});

test('Convert mebibytes (MiB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(BigNumber(1), DataUnit.MEBIBYTE)).toEqual(BigNumber(9.5367431640625e-7));
});

test('Convert gigabytes (GB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(BigNumber(1), DataUnit.GIGABYTE)).toEqual(
        BigNumber('0.0009094947017729282379150390625')
    );
});

test('Convert gibibytes (GiB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(BigNumber(1), DataUnit.GIBIBYTE)).toEqual(BigNumber(0.0009765625));
});

test('Convert tebibytes (TiB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(BigNumber(1), DataUnit.TEBIBYTE)).toEqual(BigNumber(1));
});

test('Convert terabytes (TB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(BigNumber(1), DataUnit.TERABYTE)).toEqual(
        BigNumber('0.9094947017729282379150390625')
    );
});
