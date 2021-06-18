declare module "csstype" {
  interface Properties {
    // Add a missing property
    // WebkitRocketLauncher?: string;

    // Add a CSS Custom Property
    "--color"?: MQColorPalette;

    // ...or allow any other property
    // [index: string]: any;
  }
}
