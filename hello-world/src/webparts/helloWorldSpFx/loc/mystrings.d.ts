declare interface IHelloWorldSpFxWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloWorldSpFxWebPartStrings' {
  const strings: IHelloWorldSpFxWebPartStrings;
  export = strings;
}
