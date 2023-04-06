import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent{
  initContent= new ContentList([]);
  contentIndex:number = 0; 
  fetchedContent:Content | undefined;
  errorMessage:string=``;
  generateContent(id:number,contentArr:(string)[]){
    return {
      id,
      title:contentArr[0],
      description:contentArr[1],
      creator:contentArr[2]
    }
  }
 
  constructor(){
    this.initContent.addContentToPrivateArr({
        ...this.generateContent(
          1,['Java Script','JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.','Brendan Eich']
        ),
        ...{imgURL:'../assets/JavaScript-logo.png'},
        ...{type:'Movie'},
        ...{tags:['Animated','Most Popular','Creative']}
      });
    this.initContent.addContentToPrivateArr({
      ...this.generateContent(
        2,['HTML',`The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. `,'WHATWG']
      ),
      ...{imgURL:'../assets/HTML.png'}
    });
  }

  onSubmit():void{
    try{
      this.fetchedContent = this.initContent.getContentAtSpecificIndex(this.contentIndex);
      this.errorMessage='';
    }catch{
      this.errorMessage=`Entered Array index is out of bound please enter value between 0 and ${this.initContent.contentArr.length-1} (inclusive)`;
    }
  }

  //totalContents = this.initContent.contentArr
}