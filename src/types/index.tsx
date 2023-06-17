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

type PageType = {
  path: string,
  isReady: boolean,
};

export interface IFormState extends IHomeInputs, IInfoInputs {}

export interface IMainState {
  error: boolean;
  isLoading: boolean;
  pages: Array<PageType>;
  curPage: number;
}

export interface RootState {
  main: IMainState;
  form: IFormState;
}
