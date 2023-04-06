import { Content } from "./content-interface";

let contentListArr:Content[] = [];

const generateContent = (id:number,contentArr:(string)[])=>{
    return {
      id,
      title:contentArr[0],
      description:contentArr[1],
      creator:contentArr[2]
    }
}
export const contentList = {
    generateContent: ()=>{
        contentListArr.push({
            ...generateContent(
              1,['HTML','Hyper Text Markup Language','WHADT']
            ),
            ...{imgURL:'../assets/HTML.npg'},
            ...{type:'Lanuage'},
            ...{tags:['basic structure','Most Popular','browser supported']}
        });
        contentListArr.push({
            ...generateContent(
              2,['HTML','Hyper Text Markup Language','WHADT']
            ),
            ...{imgURL:'../assets/HTML.npg'},
            ...{type:'Lanuage'},
            ...{tags:['basic structure','Most Popular','browser supported']}
        });
        contentListArr.push({
            ...generateContent(
              3,['HTML','Hyper Text Markup Language','WHADT']
            ),
            ...{imgURL:'../assets/HTML.npg'},
            ...{type:'Lanuage'},
            ...{tags:['basic structure','Most Popular','browser supported']}
        });
        contentListArr.push({
            ...generateContent(
              4,['HTML','Hyper Text Markup Language','WHADT']
            ),
            ...{imgURL:'../assets/HTML.npg'},
            ...{type:'Lanuage'},
        });
        contentListArr.push({
            ...generateContent(
              5,['HTML','Hyper Text Markup Language','WHADT']
            ),
            ...{imgURL:'../assets/HTML.npg'},
            ...{tags:['basic structure','Most Popular','browser supported']}
        });
        contentListArr.push({
            ...generateContent(
              6,['HTML','Hyper Text Markup Language','WHADT']
            ),
            ...{imgURL:'../assets/HTML.npg'},
            ...{type:'Lanuage'},
            ...{tags:['basic structure','Most Popular','browser supported']}
        });
        contentListArr.push({
            ...generateContent(
              7,['HTML','Hyper Text Markup Language','WHADT']
            ),
            ...{imgURL:'../assets/HTML.npg'},
            ...{tags:['basic structure','Most Popular','browser supported']}
        });
        contentListArr.push({
            ...generateContent(
              8,['HTML','Hyper Text Markup Language','WHADT']
            ),
            ...{type:'Lanuage'},
        });

    },
    getSpecificContent:(id:number):Content=>{
        const contentToReturn = contentListArr.filter(content=>content.id===id);
        return contentToReturn[0];
    },
    contentListArr
}