export interface IHomeInputs {
  tel: string;
  email: string;
}

enum SexType {
  Female,
  Male,
}
export interface IInfoInputs {
  nickname: string;
  name: string;
  surname: string;
  sex: SexType;
}

export interface IFormState extends IHomeInputs {}

export interface IMainState {
  error: boolean;
  isLoading: boolean;
}

export interface RootState {
  main: IMainState;
  form: IFormState;
}
