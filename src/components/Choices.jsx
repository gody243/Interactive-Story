import styles from './choices.module.css'

const Choices = ({choices,callback}) => {
   
  return (
    <div>
        
      {choices.map((choice,index) => {
          return(
        <p key={index} className={styles.choice}
          
          onClick={() => 
            callback(choice.target,choice.content)}>
        {choice.content}
        </p>
          )
    })}
    
    </div>
  );
};
export default Choices;
