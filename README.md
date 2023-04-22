# digital-unit-converter-bignumber
 Utility to simplify conversion of arbitrary-precision digital units of measurement

- [Digital Unit Converter](#digital-unit-converter-bignumber)
  - [Installation](#installation)
  - [Importing](#import-module)
  - [Examples](#examples)
  - [Supported Data Units](#supported-data-units)
  - [Static Members](#static-members)
  - [Methods](#methods)

## Installation

Using npm
```console
$ npm install digital-unit-converter-bignumber --save
```

Using yarn
```console
$ yarn add digital-unit-converter-bignumber
```

## Import module

CommonJS
```js
const { DataUnit } = require('digital-unit-converter-bignumber');
```

ES6
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

## Supported Data Units

The following data units are currently supported.

| DataUnit | Term | Abbreviation | Unit Type | Number of Bytes |
| :--- | :--- | :--- | :--- | :--- |
| BIT | bit | b | - | 0.125 |
| BYTE | byte | B | - | 1 |
| KILOBYTE | kilobyte | kB | Decimal | 10<sup>3</sup> |
| KIBIBYTE | kibibyte | KiB | Binary | 2<sup>10</sup> |
| MEGABYTE | megabyte | MB | Decimal | 10<sup>6</sup> |
| MEBIBYTE | mebibyte | MiB | Binary | 2<sup>20</sup> |
| GIGABYTE | gigabyte | GB | Decimal | 10<sup>9</sup> |
| GIBIBYTE | gibibyte | GiB | Binary | 2<sup>30</sup> |

## Static Members

- [BIT](README.md#bit)
- [BYTE](README.md#byte)
- [GIBIBYTE](README.md#gibibyte)
- [GIGABYTE](README.md#gigabyte)
- [KIBIBYTE](README.md#kibibyte)
- [KILOBYTE](README.md#kilobyte)
- [MEBIBYTE](README.md#mebibyte)
- [MEGABYTE](README.md#megabyte)

### BIT

▪ `Static` `Readonly` **BIT**: *DataUnit*

Bit (b). Data unit representing a binary digit

Defined in: [index.ts:12](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L12)

___

### BYTE

▪ `Static` `Readonly` **BYTE**: *DataUnit*

Byte (B). Data unit representing 8 bits

Defined in: [index.ts:27](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L27)

___

### GIBIBYTE

▪ `Static` `Readonly` **GIBIBYTE**: *DataUnit*

Gibibyte (GiB). Binary data unit representing 1,024<sup>3</sup> bytes

Defined in: [index.ts:117](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L117)

___

### GIGABYTE

▪ `Static` `Readonly` **GIGABYTE**: *DataUnit*

Gigabyte (GB). Decimal data unit representing 1,000<sup>3</sup> bytes

Defined in: [index.ts:102](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L102)

___

### KIBIBYTE

▪ `Static` `Readonly` **KIBIBYTE**: *DataUnit*

Kibibyte (KiB). Binary data unit representing 1,024 bytes

Defined in: [index.ts:57](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L57)

___

### KILOBYTE

▪ `Static` `Readonly` **KILOBYTE**: *DataUnit*

Kilobyte (kB). Decimal data unit representing 1,000 bytes

Defined in: [index.ts:42](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L42)

___

### MEBIBYTE

▪ `Static` `Readonly` **MEBIBYTE**: *DataUnit*

Mebibyte (MiB). Binary data unit representing 1,024<sup>2</sup> bytes

Defined in: [index.ts:87](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L87)

___

### MEGABYTE

▪ `Static` `Readonly` **MEGABYTE**: *DataUnit*

Megabyte (MB). Decimal data unit representing 1,000<sup>2</sup> bytes

Defined in: [index.ts:72](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L72)

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

Defined in: [index.ts:261](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L261)

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

Defined in: [index.ts:180](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L180)

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

Defined in: [index.ts:190](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L190)

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

Defined in: [index.ts:250](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L250)

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

Defined in: [index.ts:240](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L240)

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

Defined in: [index.ts:210](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L210)

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

Defined in: [index.ts:200](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L200)

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

Defined in: [index.ts:230](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L230)

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

Defined in: [index.ts:220](https://github.com/zduclos/digital-unit-converter-bignumber/blob/master/src/index.ts#L220)
