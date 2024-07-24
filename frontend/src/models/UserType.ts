export enum UserType {
  VIP = 'VIP',
  REGISTER = 'register',
  GUEST = 'guest',
}

export namespace UserType {
  export function isVip(userType: UserType) {
    return userType === UserType.VIP;
  }

  export function isRegister(userType: UserType) {
    return userType === UserType.REGISTER;
  }

  export function isGuest(userType: UserType) {
    return userType === UserType.GUEST;
  }
}
