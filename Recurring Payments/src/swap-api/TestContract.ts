/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.8
*/

import { Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  AbstractAddress,
  BigNumberish,
  BN,
  FunctionFragment,
  InvokeFunction,
  StrSlice,
} from "fuels";

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;

const abi = {
  programType: "contract",
  specVersion: "1",
  encodingVersion: "1",
  concreteTypes: [
    {
      type: "()",
      concreteTypeId:
        "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
    },
    {
      type: "bool",
      concreteTypeId:
        "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903",
    },
    {
      type: "str",
      concreteTypeId:
        "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a",
    },
    {
      type: "struct std::address::Address",
      concreteTypeId:
        "f597b637c3b0f588fb8d7086c6f4735caa3122b85f0423b82e489f9bb58e2308",
      metadataTypeId: 1,
    },
    {
      type: "struct std::asset_id::AssetId",
      concreteTypeId:
        "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      metadataTypeId: 2,
    },
    {
      type: "u64",
      concreteTypeId:
        "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
    },
  ],
  metadataTypes: [
    {
      type: "b256",
      metadataTypeId: 0,
    },
    {
      type: "struct std::address::Address",
      metadataTypeId: 1,
      components: [
        {
          name: "bits",
          typeId: 0,
        },
      ],
    },
    {
      type: "struct std::asset_id::AssetId",
      metadataTypeId: 2,
      components: [
        {
          name: "bits",
          typeId: 0,
        },
      ],
    },
  ],
  functions: [
    {
      inputs: [],
      name: "deposit_funds",
      output:
        "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      attributes: [
        {
          name: "storage",
          arguments: ["write"],
        },
        {
          name: "payable",
          arguments: [],
        },
      ],
    },
    {
      inputs: [],
      name: "get_contract_balance",
      output:
        "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "payment_id",
          concreteTypeId:
            "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
        },
      ],
      name: "process_recurring_payment",
      output:
        "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903",
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "recipient",
          concreteTypeId:
            "f597b637c3b0f588fb8d7086c6f4735caa3122b85f0423b82e489f9bb58e2308",
        },
        {
          name: "amount",
          concreteTypeId:
            "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
        },
        {
          name: "interval",
          concreteTypeId:
            "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
        },
      ],
      name: "setup_recurring_payment",
      output:
        "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      attributes: [
        {
          name: "storage",
          arguments: ["write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "recipient",
          concreteTypeId:
            "f597b637c3b0f588fb8d7086c6f4735caa3122b85f0423b82e489f9bb58e2308",
        },
        {
          name: "asset_id",
          concreteTypeId:
            "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
        },
        {
          name: "amount",
          concreteTypeId:
            "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
        },
      ],
      name: "transfer",
      output:
        "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      attributes: [
        {
          name: "payable",
          arguments: [],
        },
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
  ],
  loggedTypes: [
    {
      logId: "10098701174489624218",
      concreteTypeId:
        "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a",
    },
  ],
  messagesTypes: [],
  configurables: [],
};

const storageSlots: StorageSlot[] = [
  {
    key: "63a60e5d8a026ee74ad811c1d1c1a301e57d0baa431b3796e1628f4219d08948",
    value: "0000000000000000000000000000000000000000000000000000000000000000",
  },
];

export class TestContractInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    deposit_funds: FunctionFragment;
    get_contract_balance: FunctionFragment;
    process_recurring_payment: FunctionFragment;
    setup_recurring_payment: FunctionFragment;
    transfer: FunctionFragment;
  };
}

export class TestContract extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: TestContractInterface;
  declare functions: {
    deposit_funds: InvokeFunction<[], void>;
    get_contract_balance: InvokeFunction<[], BN>;
    process_recurring_payment: InvokeFunction<
      [payment_id: BigNumberish],
      boolean
    >;
    setup_recurring_payment: InvokeFunction<
      [recipient: AddressInput, amount: BigNumberish, interval: BigNumberish],
      void
    >;
    transfer: InvokeFunction<
      [recipient: AddressInput, asset_id: AssetIdInput, amount: BigNumberish],
      void
    >;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ) {
    super(id, abi, accountOrProvider);
  }
}
