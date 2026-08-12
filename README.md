# digital-unit-converter-bignumber
 Utility to simplify conversion of arbitrary-precision digital units of measurement

- [Digital Unit Converter](#digital-unit-converter-bignumber)
  - [Installation](#installation)
  - [Importing](#import-module)
  - [Examples](#examples)
  - [Precision](#precision)
  - [Supported Data Units](#supported-data-units)
  - [Static Members](#static-members)
  - [Methods](#methods)
  - [Development](#development)

## Installation

Using npm
```console
$ npm install digital-unit-converter-bignumber
```

Using yarn
```console
$ yarn add digital-unit-converter-bignumber
```

## Import module

The package provides native CommonJS and ES Module builds with TypeScript declarations.

### CommonJS

```js
const { DataUnit } = require('digital-unit-converter-bignumber');
```

### ES Modules

```ts
import { DataUnit } from 'digital-unit-converter-bignumber';
```

## Examples

JavaScript: convert 10 megabytes (MB) to bytes (B)
```js
let converted = DataUnit.MEGABYTE.toBytes(BigNumber(10));
console.log(converted.toString()); // 10000000

// or use convert() instead
converted = DataUnit.BYTE.convert(BigNumber(10), DataUnit.MEGABYTE);
console.log(converted.toString()); // 10000000
```

TypeScript: convert 1 gibibyte (GiB) to mebibytes (MiB)
```ts
let converted: BigNumber = DataUnit.GIBIBYTE.toMebibytes(BigNumber(1));
console.log(converted.toString()); // 1024

// or use convert() instead
converted = DataUnit.MEBIBYTE.convert(BigNumber(1), DataUnit.GIBIBYTE);
console.log(converted.toString()); // 1024
```

## Precision

This library uses [`bignumber.js`](https://github.com/mikemcl/bignumber.js) for all calculations, intentionally
respecting the precision configured by your application. `BigNumber` can be configured with sufficient precision
for your application's requirements. Example:
```ts
BigNumber.config({
  DECIMAL_PLACES: 40,
  ROUNDING_MODE: BigNumber.ROUND_HALF_UP
})
``` 

## Supported Data Units

The following data units are currently supported.

| DataUnit | Term     | Abbreviation | Unit Type | Number of Bytes |
|:---------|:---------|:-------------|:----------|:----------------|
| BIT      | bit      | b            | -         | 0.125           |
| BYTE     | byte     | B            | -         | 1               |
| KILOBYTE | kilobyte | kB           | Decimal   | 10<sup>3</sup>  |
| KIBIBYTE | kibibyte | KiB          | Binary    | 2<sup>10</sup>  |
| MEGABYTE | megabyte | MB           | Decimal   | 10<sup>6</sup>  |
| MEBIBYTE | mebibyte | MiB          | Binary    | 2<sup>20</sup>  |
| GIGABYTE | gigabyte | GB           | Decimal   | 10<sup>9</sup>  |
| GIBIBYTE | gibibyte | GiB          | Binary    | 2<sup>30</sup>  |
| TERABYTE | terabyte | TB           | Decimal   | 10<sup>12</sup> |
| TEBIBYTE | tebibyte | TiB          | Binary    | 2<sup>40</sup>  |

## Static Members

- [BIT](README.md#bit)
- [BYTE](README.md#byte)
- [GIBIBYTE](README.md#gibibyte)
- [GIGABYTE](README.md#gigabyte)
- [KIBIBYTE](README.md#kibibyte)
- [KILOBYTE](README.md#kilobyte)
- [MEBIBYTE](README.md#mebibyte)
- [MEGABYTE](README.md#megabyte)
- [TEBIBYTE](README.md#tebibyte)
- [TERABYTE](README.md#terabyte)

### BIT

▪ `Static` `Readonly` **BIT**: *DataUnit*

Bit (b). Data unit representing a binary digit

Defined in: [index.ts:10](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L10)

___

### BYTE

▪ `Static` `Readonly` **BYTE**: *DataUnit*

Byte (B). Data unit representing 8 bits

Defined in: [index.ts:15](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L15)

___

### GIBIBYTE

▪ `Static` `Readonly` **GIBIBYTE**: *DataUnit*

Gibibyte (GiB). Binary data unit representing 1,024<sup>3</sup> bytes

Defined in: [index.ts:45](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L45)

___

### GIGABYTE

▪ `Static` `Readonly` **GIGABYTE**: *DataUnit*

Gigabyte (GB). Decimal data unit representing 1,000<sup>3</sup> bytes

Defined in: [index.ts:40](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L40)

___

### KIBIBYTE

▪ `Static` `Readonly` **KIBIBYTE**: *DataUnit*

Kibibyte (KiB). Binary data unit representing 1,024 bytes

Defined in: [index.ts:25](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L25)

___

### KILOBYTE

▪ `Static` `Readonly` **KILOBYTE**: *DataUnit*

Kilobyte (kB). Decimal data unit representing 1,000 bytes

Defined in: [index.ts:20](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L20)

___

### MEBIBYTE

▪ `Static` `Readonly` **MEBIBYTE**: *DataUnit*

Mebibyte (MiB). Binary data unit representing 1,024<sup>2</sup> bytes

Defined in: [index.ts:35](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L35)

___

### MEGABYTE

▪ `Static` `Readonly` **MEGABYTE**: *DataUnit*

Megabyte (MB). Decimal data unit representing 1,000<sup>2</sup> bytes

Defined in: [index.ts:30](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L30)

___

### TEBIBYTE

▪ `Static` `Readonly` **TEBIBYTE**: *DataUnit*

Tebibyte (TiB). Binary data unit representing 1,024<sup>4</sup> bytes

Defined in: [index.ts:55](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L55)

___

### TERABYTE

▪ `Static` `Readonly` **TERABYTE**: *DataUnit*

Terabyte (TB). Decimal data unit representing 1,000<sup>4</sup> bytes

Defined in: [index.ts:50](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L50)

## Methods

- [convert](README.md#convert)
- [toBits](README.md#tobits)
- [toBytes](README.md#tobytes)
- [toGibibytes](README.md#togibibytes)
- [toGigabytes](README.md#togigabytes)
- [toKibibytes](README.md#tokibibytes)
- [toKilobytes](README.md#tokilobytes)
- [toMebibytes](README.md#tomebibytes)
- [toMegabytes](README.md#tomegabytes)
- [toTebibytes](README.md#totebibytes)
- [toTerabytes](README.md#toterabytes)

### convert

▸ **convert**(`val`: *BigNumber*, `unit`: *DataUnit*): *BigNumber*

Converts the value (`val`) in the specified data unit (`unit`) to this unit

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *BigNumber* | value to convert   |
`unit` | *DataUnit* | data unit of `val`   |

**Returns:** *BigNumber*

converted value in this unit

Defined in: [index.ts:71](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L71)

___

### toBits

▸ **toBits**(`val`: *BigNumber*): *BigNumber*

Convert a value in this unit to bits (b)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *BigNumber* | value to convert to bits   |

**Returns:** *BigNumber*

converted bit value

Defined in: [index.ts:81](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L81)

___

### toBytes

▸ **toBytes**(`val`: *BigNumber*): *BigNumber*

Convert a value in this unit to bytes (B)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *BigNumber* | value to convert to bytes   |

**Returns:** *BigNumber*

converted byte value

Defined in: [index.ts:91](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L91)

___

### toGibibytes

▸ **toGibibytes**(`val`: *BigNumber*): *BigNumber*

Convert a value in this unit to gibibytes (GiB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *BigNumber* | value to convert to gibibytes   |

**Returns:** *BigNumber*

converted gibibyte value

Defined in: [index.ts:151](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L151)

___

### toGigabytes

▸ **toGigabytes**(`val`: *BigNumber*): *BigNumber*

Convert a value in this unit to gigabytes (GB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *BigNumber* | value to convert to gigabytes   |

**Returns:** *BigNumber*

converted gigabyte value

Defined in: [index.ts:141](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L141)

___

### toKibibytes

▸ **toKibibytes**(`val`: *BigNumber*): *BigNumber*

Convert a value in this unit to kibibytes (KiB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *BigNumber* | value to convert to kibibytes   |

**Returns:** *BigNumber*

converted kibibyte value

Defined in: [index.ts:111](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L111)

___

### toKilobytes

▸ **toKilobytes**(`val`: *BigNumber*): *BigNumber*

Convert a value in this unit to kilobytes (kB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *BigNumber* | value to convert to kilobytes   |

**Returns:** *BigNumber*

converted kilobyte value

Defined in: [index.ts:101](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L101)

___

### toMebibytes

▸ **toMebibytes**(`val`: *BigNumber*): *BigNumber*

Convert a value in this unit mebibytes (MiB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *BigNumber* | value to convert to mebibytes   |

**Returns:** *BigNumber*

converted mebibyte value

Defined in: [index.ts:131](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L131)

___

### toMegabytes

▸ **toMegabytes**(`val`: *BigNumber*): *BigNumber*

Convert a value in this unit to megabytes (MB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *BigNumber* | value to convert to megabytes   |

**Returns:** *BigNumber*

converted megabyte value

Defined in: [index.ts:121](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L121)

___

### toTebibytes

▸ **toTebibytes**(`val`: *number*): *number*

Convert a value in this unit to tebibytes (TiB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *number* | value to convert to tebibytes   |

**Returns:** *number*

converted tebibyte value

Defined in: [index.ts:171](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L171)

___

### toTerabytes

▸ **toTerabytes**(`val`: *number*): *number*

Convert a value in this unit to terabytes (TB)

#### Parameters:

Name | Type | Description                   |
:------ | :------ |:------------------------------|
`val` | *number* | value to convert to terabytes |

**Returns:** *number*

converted terabyte value

Defined in: [index.ts:161](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L161)

___

## Development
Node.js 22 or newer is supported.

```shell
npm install
npm run check
