class User {
  _id: number;
  _fullName: string;
  _phone: string;
  // @ts-ignore
  _localDate: string;
  // @ts-ignore
  _email: string;
  _address: string;

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(value) {
    this._fullName = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get localDate() {
    return this._localDate;
  }

  set localDate(value) {
    this._localDate = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  constructor(id, fullName, phone, localDate, email, address) {
    this._id = id;
    this._fullName = fullName;
    this._phone = phone;
    this._localDate = localDate;
    this._email = email;
    this._address = address;
  }
}
