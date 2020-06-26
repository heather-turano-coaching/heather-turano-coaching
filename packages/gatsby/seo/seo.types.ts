/**
 * These properties should be used when the SEO component
 * is used throughout the application. These options
 * are what can be used to over-write the existing site
 * SEO configurations provided in the `StaticSEOProperties`
 */
export interface PageSEOProperties {
  /**
   * The title of the page. This value should only be the
   * title of the page. The SEO component will take
   */
  pageTitle: string;
  /**
   * A general description of the page. If this is not provided
   * the SiteSEOProperties.siteDescription will be defaulted
   * instead.
   *
   * This will display for any social cards, search engine cards, etc...
   * This should be defaulted to the basic description of the app.
   *
   * It's probably within your best interests to updated this per page
   */
  pageDescription?: string;
  /**
   * The image that will display for social cards, search engine cards
   * This image is defaulted to whatever the siteLogo is inside of the
   * SiteSEOProperties.siteImage
   */
  pageImage?: string;
  pageKeywords?: string[];
  pageAuthor?: string;
}

export interface SiteSEOProperties {
  // The base path of the site. The best practice is to just default it to `/`
  sitePathPrefix: string;
  // The base title of the site
  siteTitle: string;
  // Alternative site title for SEO
  siteTitleAlt: string;
  // The base description of the site
  siteDescription: string;
  // Path to your image you placed in the 'static' folder
  siteImage: string;
  // The domain of the site. no trailing slash
  siteUrl: string;
  // Base headline for th schema.org JSON-LD
  siteHeadline: string;
  // the language used for the site
  siteLanguage: string;
  // needed for facebook
  siteOgLanguage: string;
  // author of the site
  siteAuthor: string;
  // base set of keywords that will be included on every page
  siteBaseKeywords?: string[];
  // Social
  // @machineq
  twitterHandle: string;
  facebookProfileUrl?: string;
  linkedInProfileUrl?: string;
}

/**
 * This configuration is the exact configuration needed
 * to make a valid manifest.json file. These properties
 * are standard to all PWAs and are needed to make the
 * application a valid PWA.
 *
 * These properties are typed here to be used with the Gatsby
 * config and they do not include all properties required for
 * a proper `manifest.json` file. The Gatsby plugin auto generates
 * some of the content we need so we should keep these at a minimum.
 * It's best to offload some of the work to the plugin as that
 * adding some of the fields, especially icons, can be error prone
 *
 * For more information on these fields check out the below link:
 * https://web.dev/add-manifest/#:~:text=The%20web%20app%20manifest%20is,when%20the%20app%20is%20launched.
 */
export interface ManifestProperties {
  /**
   * Used for platforms where the name can be longer.
   * Used for when the platform is installed
   */
  name: string;
  /**
   * Used on the user's home screen, launcher, or other
   * places where space may be limited.
   */
  short_name: string;
  /**
   * When a user installs your PWA, you can define a set of icons
   * for the browser to use on the home screen, app launcher,
   * task switcher, splash screen, and so on.
   *
   * Note that we should provide a URL for this inside of the directory
   * as the Gatsby plugin takes care of auto generating our icons for us
   * This path should be relative to the root of the site
   *
   * See the below for more information
   * https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/#configure-icons-and-their-generations---required
   */
  icon: string;
  /**
   * Tells the browser where your application should
   * start when it is launched, and prevents the app
   * from starting on whatever page the user was on when
   * they added your app to their home screen.
   *
   */
  start_url: string;
  /**
   * Used on the splash screen when the application
   * is first launched on mobile.
   */
  background_color: string;
  /**
   * You can customize what browser UI is shown when your app is launched.
   * For example, you can hide the address bar and browser chrome. Games can even be made to launch full screen.
   *
   * for more examples on the below types go to: https://web.dev/add-manifest/#display
   */
  display: "fullscreen" | "standalone" | "minimal-ui";
  /**
   * defines the set of URLs that the browser considers to be within your app,
   * and is used to decide when the user has left the app.
   * The scope controls the URL structure that encompasses
   * all the entry and exit points in your web app.
   * Your start_url must reside within the scope.
   *
   * Leave this alone and make sure your service worker is at the root
   * of your application
   *
   * More information here: https://web.dev/add-manifest/#scope
   */
  scope?: string;
  /**
   * sets the color of the tool bar, and may be reflected
   * in the app's preview in task switchers. The theme_color
   * should match the meta theme color specified in your document head.
   */
  theme_color: string;
}
