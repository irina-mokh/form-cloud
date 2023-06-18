export interface IHomeInputs {
  tel: string;
  email: string;
}

export interface IInfoInputs {
  nickname: string;
  name: string;
  surname: string;
  sex: 'man' | 'woman' | '';
}

export interface ITextInputs {
  about: string;
}

export interface IGroupInputs {
  advantages: Array<string>;
  checkGroup: Array<number>;
  radioGroup: Array<number>;
}

type PageType = {
  path: string,
  isReady: boolean,
};

export interface IFormState extends IHomeInputs, IInfoInputs, IGroupInputs, ITextInputs {}

export interface IMainState {
  error: string | null;
  pages: Array<PageType>;
  curPage: number;
}

export interface RootState {
  main: IMainState;
  form: IFormState;
}
