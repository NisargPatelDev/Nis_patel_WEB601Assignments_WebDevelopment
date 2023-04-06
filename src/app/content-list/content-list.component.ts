import { Component } from '@angular/core';
import { Content } from '../../../src/helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  contentListArr:Content[] = [];
  generateContent(id:number,contentArr:(string)[]){
    return {
      id,
      title:contentArr[0],
      description:contentArr[1],
      creator:contentArr[2]
    }
  }

  constructor(){
    this.contentListArr.push({
      ...this.generateContent(
        2,['HTML','The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.','WHATWG']
      ),
      ...{imgURL:'../assets/HTML.png'},
      ...{type:'Movie'},
      ...{tags:['Basic','Most Popular','Browser']}
    });
    this.contentListArr.push({
      ...this.generateContent(
        3,['HTML','The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.','WHATWG']
      ),
      ...{imgURL:'../assets/HTML.png'},
      ...{type:'Movie'},
      ...{tags:['Basic','Most Popular','Browser']}
    });
    this.contentListArr.push({
      ...this.generateContent(
        4,['HTML','The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.','WHATWG']
      ),
      ...{imgURL:'../assets/HTML.png'},
      ...{type:'Movie'},
      ...{tags:['Basic','Most Popular','Browser']}
    });
    this.contentListArr.push({
      ...this.generateContent(
        5,['HTML','The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.','WHATWG']
      ),
      ...{imgURL:'../assets/HTML.png'},
      ...{type:'Movie'},
      ...{tags:['Basic','Most Popular','Browser']}
    });
    this.contentListArr.push({
      ...this.generateContent(
        6,['HTML','The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.','WHATWG']
      ),
      ...{imgURL:'../assets/HTML.png'},
      ...{type:'Movie'},
      ...{tags:['Basic','Most Popular','Browser']}
    });
    
  }
}