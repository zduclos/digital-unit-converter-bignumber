import BigNumber from 'bignumber.js';

/**
 * Utility to convert units of digital information across units.
 */
export class DataUnit {
    /**
     * Bit (b). Data unit representing a binary digit
     */
    public static readonly BIT = new DataUnit(new BigNumber('0.125'));

    /**
     * Byte (B). Data unit representing 8 bits
     */
    public static readonly BYTE = new DataUnit(new BigNumber(1));

    /**
     * Kilobyte (kB). Decimal data unit representing 1,000 bytes
     */
    public static readonly KILOBYTE = new DataUnit(new BigNumber(1_000));

    /**
     * Kibibyte (KiB). Binary data unit representing 1,024 bytes
     */
    public static readonly KIBIBYTE = new DataUnit(new BigNumber(1_024));

    /**
     * Megabyte (MB). Decimal data unit representing (1,000)^2 bytes
     */
    public static readonly MEGABYTE = new DataUnit(new BigNumber(1_000_000));

    /**
     * Mebibyte (MiB). Binary data unit representing (1,024)^2 bytes
     */
    public static readonly MEBIBYTE = new DataUnit(new BigNumber(1_048_576));

    /**
     * Gigabyte (GB). Decimal data unit representing (1,000)^3 bytes
     */
    public static readonly GIGABYTE = new DataUnit(new BigNumber(1_000_000_000));

    /**
     * Gibibyte (GiB). Binary data unit representing (1,024)^3 bytes
     */
    public static readonly GIBIBYTE = new DataUnit(new BigNumber(1_073_741_824));

    /**
     * Terabyte (TB). Decimal data unit representing (1,000)^4 bytes
     */
    public static readonly TERABYTE = new DataUnit(new BigNumber(1_000_000_000_000));

    /**
     * Tebibyte (TiB). Binary data unit representing (1,024)^4 bytes
     */
    public static readonly TEBIBYTE = new DataUnit(new BigNumber(1_099_511_627_776));

    /**
     * Constructs a new `DataUnit` object. A private constructor is used to prevent external instantiation.
     *
     * @param {BigNumber} bytesPerUnit number of bytes represented by one unit
     */
    private constructor(private readonly bytesPerUnit: BigNumber) {}

    /**
     * Converts the value (`val`) in the specified data unit (`unit`) to this unit
     *
     * @param {BigNumber} val value to convert
     * @param {DataUnit} unit data unit of `val`
     * @returns {BigNumber} converted value in this unit
     */
    public convert(val: BigNumber, unit: DataUnit): BigNumber {
        return val.multipliedBy(unit.bytesPerUnit).dividedBy(this.bytesPerUnit);
    }

    /**
     * Convert a value in this unit to bits (b)
     *
     * @param {BigNumber} val value to convert to bits
     * @returns {BigNumber} converted bit value
     */
    public toBits(val: BigNumber): BigNumber {
        return DataUnit.BIT.convert(val, this);
    }

    /**
     * Convert a value in this unit to bytes (B)
     *
     * @param {BigNumber} val value to convert to bytes
     * @returns {BigNumber} converted byte value
     */
    public toBytes(val: BigNumber): BigNumber {
        return DataUnit.BYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to kilobytes (kB)
     *
     * @param {BigNumber} val value to convert to kilobytes
     * @returns {BigNumber} converted kilobyte value
     */
    public toKilobytes(val: BigNumber): BigNumber {
        return DataUnit.KILOBYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to kibibytes (KiB)
     *
     * @param {BigNumber} val value to convert to kibibytes
     * @returns {BigNumber} converted kibibyte value
     */
    public toKibibytes(val: BigNumber): BigNumber {
        return DataUnit.KIBIBYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to megabytes (MB)
     *
     * @param {BigNumber} val value to convert to megabytes
     * @returns {BigNumber} converted megabyte value
     */
    public toMegabytes(val: BigNumber): BigNumber {
        return DataUnit.MEGABYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to mebibytes (MiB)
     *
     * @param {BigNumber} val value to convert to mebibytes
     * @returns {BigNumber} converted mebibyte value
     */
    public toMebibytes(val: BigNumber): BigNumber {
        return DataUnit.MEBIBYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to gigabytes (GB)
     *
     * @param {BigNumber} val value to convert to gigabytes
     * @returns {BigNumber} converted gigabyte value
     */
    public toGigabytes(val: BigNumber): BigNumber {
        return DataUnit.GIGABYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to gibibytes (GiB)
     *
     * @param {BigNumber} val value to convert to gibibytes
     * @returns {BigNumber} converted gibibyte value
     */
    public toGibibytes(val: BigNumber): BigNumber {
        return DataUnit.GIBIBYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to terabytes (TB)
     *
     * @param {BigNumber} val value to convert to terabytes
     * @returns {BigNumber} converted terabyte value
     */
    public toTerabytes(val: BigNumber): BigNumber {
        return DataUnit.TERABYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to tebibytes (TiB)
     *
     * @param {BigNumber} val value to convert to tebibytes
     * @returns {BigNumber} converted tebibyte value
     */
    public toTebibytes(val: BigNumber): BigNumber {
        return DataUnit.TEBIBYTE.convert(val, this);
    }
}
