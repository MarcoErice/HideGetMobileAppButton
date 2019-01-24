import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'HideGetMobileAppButtonApplicationCustomizerStrings';

const LOG_SOURCE: string = 'HideGetMobileAppButtonApplicationCustomizer';
import styles from './AppCustomizer.module.scss';


/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHideGetMobileAppButtonApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HideGetMobileAppButtonApplicationCustomizer
  extends BaseApplicationCustomizer<IHideGetMobileAppButtonApplicationCustomizerProperties> {

  private _styles: any | undefined;
  @override
  public onInit(): Promise<void> {
    
    this._styles = styles;
    Log.info(LOG_SOURCE, `Initialized ${strings.Title} ${styles}`);
   
    return Promise.resolve();
  }
}
