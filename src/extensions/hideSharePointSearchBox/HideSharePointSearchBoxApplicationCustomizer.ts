import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'HideSharePointSearchBoxApplicationCustomizerStrings';

const LOG_SOURCE: string = 'HideSharePointSearchBoxApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHideSharePointSearchBoxApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HideSharePointSearchBoxApplicationCustomizer
  extends BaseApplicationCustomizer<IHideSharePointSearchBoxApplicationCustomizerProperties> {

  public onInit(): Promise<void> {

    let keepSearch:boolean = false;

    //Keep search box for lists 
    if(document.location.href.indexOf('/Lists/')!= -1){
      keepSearch = true;
    } 

    //Keep search box for document libraries 
    if(document.location.href.indexOf('/Forms/')!= -1){
      keepSearch = true;
    } 

    //On any other SharePoint page hide the search box
    if(!keepSearch){
      let css: string = '#O365_SearchBoxContainer_container{display:none;}';
      let style: HTMLElement = document.createElement('style');
      document.getElementsByTagName('body')[0].appendChild(style);
      style.appendChild(document.createTextNode(css));
    }

    return Promise.resolve();
  }



}
