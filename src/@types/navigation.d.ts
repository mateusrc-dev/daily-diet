export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      diets: undefined;
      newSnack: undefined;
      resultDiets: undefined;
      editSnack: {
        Name: string;
        Date: string;
      };
      detailsSnack: {
        dietName: string | null;
        dietDate: string | null;
      };
    }
  }
}
