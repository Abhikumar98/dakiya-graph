// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class MessageSent extends ethereum.Event {
  get params(): MessageSent__Params {
    return new MessageSent__Params(this);
  }
}

export class MessageSent__Params {
  _event: MessageSent;

  constructor(event: MessageSent) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get uri(): string {
    return this._event.parameters[1].value.toString();
  }

  get timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get thread_id(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class ThreadCreated extends ethereum.Event {
  get params(): ThreadCreated__Params {
    return new ThreadCreated__Params(this);
  }
}

export class ThreadCreated__Params {
  _event: ThreadCreated;

  constructor(event: ThreadCreated) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get thread_id(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _sender_key(): string {
    return this._event.parameters[4].value.toString();
  }

  get _receiver_key(): string {
    return this._event.parameters[5].value.toString();
  }
}

export class Messaging__getPubEncKeysResult {
  value0: string;
  value1: string;

  constructor(value0: string, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }
}

export class Messaging__messagesResult {
  value0: Address;
  value1: string;
  value2: BigInt;

  constructor(value0: Address, value1: string, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class Messaging__threadsResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: Address;
  value4: string;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: Address,
    value4: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    return map;
  }
}

export class Messaging extends ethereum.SmartContract {
  static bind(address: Address): Messaging {
    return new Messaging("Messaging", address);
  }

  checkUserRegistration(): boolean {
    let result = super.call(
      "checkUserRegistration",
      "checkUserRegistration():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_checkUserRegistration(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkUserRegistration",
      "checkUserRegistration():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getPubEncKeys(receiver: Address): Messaging__getPubEncKeysResult {
    let result = super.call(
      "getPubEncKeys",
      "getPubEncKeys(address):(string,string)",
      [ethereum.Value.fromAddress(receiver)]
    );

    return new Messaging__getPubEncKeysResult(
      result[0].toString(),
      result[1].toString()
    );
  }

  try_getPubEncKeys(
    receiver: Address
  ): ethereum.CallResult<Messaging__getPubEncKeysResult> {
    let result = super.tryCall(
      "getPubEncKeys",
      "getPubEncKeys(address):(string,string)",
      [ethereum.Value.fromAddress(receiver)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Messaging__getPubEncKeysResult(
        value[0].toString(),
        value[1].toString()
      )
    );
  }

  messages(param0: BigInt, param1: BigInt): Messaging__messagesResult {
    let result = super.call(
      "messages",
      "messages(uint256,uint256):(address,string,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new Messaging__messagesResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toBigInt()
    );
  }

  try_messages(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<Messaging__messagesResult> {
    let result = super.tryCall(
      "messages",
      "messages(uint256,uint256):(address,string,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Messaging__messagesResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toBigInt()
      )
    );
  }

  messagesIndex(): BigInt {
    let result = super.call("messagesIndex", "messagesIndex():(uint256)", []);

    return result[0].toBigInt();
  }

  try_messagesIndex(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "messagesIndex",
      "messagesIndex():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  threadCount(): BigInt {
    let result = super.call("threadCount", "threadCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_threadCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("threadCount", "threadCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  threads(param0: BigInt): Messaging__threadsResult {
    let result = super.call(
      "threads",
      "threads(uint256):(uint256,address,string,address,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Messaging__threadsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toAddress(),
      result[4].toString()
    );
  }

  try_threads(param0: BigInt): ethereum.CallResult<Messaging__threadsResult> {
    let result = super.tryCall(
      "threads",
      "threads(uint256):(uint256,address,string,address,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Messaging__threadsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toAddress(),
        value[4].toString()
      )
    );
  }
}

export class SendMessageCall extends ethereum.Call {
  get inputs(): SendMessageCall__Inputs {
    return new SendMessageCall__Inputs(this);
  }

  get outputs(): SendMessageCall__Outputs {
    return new SendMessageCall__Outputs(this);
  }
}

export class SendMessageCall__Inputs {
  _call: SendMessageCall;

  constructor(call: SendMessageCall) {
    this._call = call;
  }

  get _thread_id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _uri(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _receiver(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _sender_key(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _receiver_key(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class SendMessageCall__Outputs {
  _call: SendMessageCall;

  constructor(call: SendMessageCall) {
    this._call = call;
  }
}

export class SetPubEncKeyCall extends ethereum.Call {
  get inputs(): SetPubEncKeyCall__Inputs {
    return new SetPubEncKeyCall__Inputs(this);
  }

  get outputs(): SetPubEncKeyCall__Outputs {
    return new SetPubEncKeyCall__Outputs(this);
  }
}

export class SetPubEncKeyCall__Inputs {
  _call: SetPubEncKeyCall;

  constructor(call: SetPubEncKeyCall) {
    this._call = call;
  }

  get encKey(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetPubEncKeyCall__Outputs {
  _call: SetPubEncKeyCall;

  constructor(call: SetPubEncKeyCall) {
    this._call = call;
  }
}
