import Title from "./components/Title";
import Content from "./components/Content";
import story from './story'
import Choices from './components/Choices'

import { useState } from "react";

function App() {  
  
  const [chapterId,setChapterId]=useState(1)
  const[history,setHistory]=useState([])
  const chapter= story.find(chapter=>chapter.id===chapterId)
  const text = chapter.content
  const title= chapter.title
  const chapterContent=chapter.chapter
  const choices=chapter.choices

  if(!chapter){
  return <p>No chapter found</p>
}
//si l'etat futur depende de notre etat actuel, alors on doit passe par une fonction qui met a jour et retourne ce nouvel etat. sinon on risque des incoherences dans notre application
const selectChoice=(id,choice)=>{
 setHistory((previousChoices)=>{
   //Acces a la valeur courante de choiceHistory de facon synchrone
   //on doit ensuite retourner le tableau mis a jour
   //previouschoices me permet de faire une copie de toutes les anciennes valeurs du tableau preeviouschoices
   return [...previousChoices,choice]
 })
 setChapterId(id)
}

const onReset=()=>{
  //lors du click on appelle une fonction qui affichera de nouveau le chapitre 1 et effacera l'historique
  setChapterId(1)
  setHistory([])
}
  
  return (
    <>
     
      <Title book={title} chapter={chapterContent} />
     
      <Content text={text} />
      <Choices choices={choices} callback={selectChoice}/>
     <button onClick={onReset} >
          Restart</button>
          {
            history.map((choice,index) =><p key={index}>{choice}</p>)
          }
      </>
  );
}

export default App;
